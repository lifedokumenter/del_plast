import React, { useEffect } from "react";
import './index.less';
import { Button, Grid, Icon } from 'semantic-ui-react';
import { PChainOption, PChainOptionMetadata } from '../../interfaces/PChainOption'; 
import { usePChainChoices } from "../../contexts/PChainChoicesContext";
import ProgressBars from "../../components/ProgressBars";
import lifeLogo from '../../images/life_logo.svg';
import Chat from "../../components/Chat";
import { useParams } from "react-router";
import PChainStep from "../../components/PChainStep";
import FeedbackModal from "../../components/FeedbackModal";
import { Interaction } from '../../interfaces/Interaction';
import ToDirectorModal from "../../components/ToDirectorModal";
import { useChat } from '../../contexts/chatContext';

interface RouteParams {
  stepNo: string;
}

export interface LandingProps {
  appData: any;
}

const Landing = ({
  appData
}: LandingProps) => {

  const { activePChainChoice, pChainChoices, setMutuallyDisabledOptions, resetChoices } = usePChainChoices();
  const { messages, addPendingMessages, setPendingMessages } = useChat();
  let { stepNo } = useParams<RouteParams>();
  const [step, setStep] = React.useState<number>();
  const [feecbackModalOpen, setFeedbackModalOpen ] = React.useState(false);
  const [multipleChoice, setMultipleChoice] = React.useState<boolean | undefined>();
  const [containsAllCategories, setContainsAllCategories] = React.useState<boolean>(false);
  const [showEmailModal, setShowEmailModal] = React.useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = React.useState<boolean>(false);
  const [initialRender, setInitialRender] = React.useState<boolean>(true);

  useEffect(() => {
    const newStep = stepNo ? parseInt(stepNo) : 1;
    if (newStep !== step) {
      setStep(newStep);
      setMultipleChoice(newStep === 6 || newStep === 5);
      resetChoices();
      setHasInteracted(false);
    } 
  }, [stepNo, step, resetChoices]);

  useEffect(() => {
    setMutuallyDisabledOptions(appData?.mutuallyDisabledOptions || []);
  }, [appData, setMutuallyDisabledOptions]);

  useEffect(() => {
    if (initialRender && appData && !hasInteracted) {
      setTimeout(() => {
        if (!hasInteracted && !messages.length && appData?.steps[step || 1].initialChatMessages.length) {
          addPendingMessages(appData.steps[step || 1].initialChatMessages);
          setHasInteracted(true);
        }
      }, 30000);
    }
  },[hasInteracted, messages, appData, setPendingMessages, addPendingMessages, step, initialRender])

  useEffect(() => {
    setInitialRender(false);
  }, []);

  const [scores, setScore] = React.useState<PChainOptionMetadata>(activePChainChoice?.metadata || {co2Score: 0, bioScore: 0, economyScore: 0});

  const submitStep = () => {
    setHasInteracted(true);
    if (multipleChoice) {
      setFeedbackModalOpen(true);
    } else {
      console.log('submitted with activePChainChoice', activePChainChoice);
      setShowEmailModal(true);
    }
  }

  /* calculate scores on change */
  useEffect(() => {
    const defaultScores = {co2Score: 0, bioScore: 0, economyScore: 0};
    let currentScores = activePChainChoice?.metadata || defaultScores;
    if (multipleChoice && pChainChoices?.length) {
      // seperate options into categories
      type categoryNames = "material" | "production" | "transport" | "usage" | "disposal";
      let categories: Record<categoryNames, Array<PChainOption>> = {
        material: [],
        production: [],
        transport: [],
        usage: [],
        disposal: []
      };

      pChainChoices.forEach( c => {

        // check for interactions
        let filteredInteractions:Array<Interaction> = appData.interactions.filter((i:Interaction) => i.id1 === c.id || i.id2 === c.id);
        filteredInteractions.forEach( i => {
          const otherId:string = i.id1 === c.id ? i.id2 : i.id1;
          if (pChainChoices.find(p => p.id === otherId)) {
            // as interactions will occur twice on looping this way, we divide by 2
            currentScores.co2Score += i.scores.co2 / 2;
            currentScores.bioScore += i.scores.bio / 2;
            currentScores.economyScore += i.scores.economy / 2;
          }
        });

        if (c.id.substring(0,8) === "material") { categories.material.push({...c}); }
        if (c.id.substring(0,10) === "production") { categories.production.push({...c});}
        if (c.id.substring(0,9) === "transport") { categories.transport.push({...c});}
        if (c.id.substring(0,5) === "usage") { categories.usage.push({...c});}
        if (c.id.substring(0,8) === "disposal") { categories.disposal.push({...c});}
      });

      // multiply each category with their weighting
      // if more than one option from a category is chosen, take avarage from that category
      let hasAll = true;
      (Object.keys(categories) as Array<categoryNames>).forEach(cStr => {
        const cat = categories[cStr];
        if (cat.length === 0) {
          hasAll = false;
        }

        cat.forEach( c => {
          currentScores.co2Score += ((c.metadata?.co2Score || 0) * appData.scoreWeights.co2[cStr]) / cat.length;
          currentScores.bioScore += ((c.metadata?.bioScore || 0) * appData.scoreWeights.bio[cStr]) / cat.length;
          currentScores.economyScore += ((c.metadata?.economyScore || 0) * appData.scoreWeights.economy[cStr]) / cat.length;
        });
      });
      setContainsAllCategories(hasAll);
    }

    setScore(currentScores);
  }, [multipleChoice, activePChainChoice, pChainChoices, appData.scoreWeights, appData.interactions]);

  return(
    <Grid columns={2} stackable>
      <Grid.Row>
        <Grid.Column floated='left' width={step === 6 ? 16 : 12}> 
          {
            !!appData && 
            <div className="landing">
              <div className="landing__content">
                <PChainStep key={step} step={step} appData={appData} multipleChoice={multipleChoice} /> 
                <FeedbackModal 
                  feedbackOptions={appData.feedback}
                  title={appData.feedbackText.title}
                  description={appData.feedbackText.description}
                  cancelBtnText={appData.feedbackText.cancelBtnText}
                  submitBtnText={appData.feedbackText.submitBtnText}
                  approvedBtnText={appData.feedbackText.approvedBtnText}
                  approvedDescription={appData.feedbackText.approvedDescription}
                  open={feecbackModalOpen}
                  onSubmit={() => {
                    setFeedbackModalOpen(false);
                  }}
                  onCancel={() => setFeedbackModalOpen(false)}
                />
                <ToDirectorModal
                  buttonText={appData.bossEmailTexts.sendBtnText}
                  choice={appData.bossEmailTexts.choices[stepNo || "1"]}
                  feedback={appData.bossEmailTexts.thanksForMessage}
                  email={appData.bossEmailTexts.email}
                  subject={appData.bossEmailTexts.subject}
                  open={showEmailModal} 
                  onClose={() => setShowEmailModal(false)}
                  closeButtonText={appData.bossEmailTexts.closeButtonText}
                />
              </div>
              <ProgressBars
                co2={scores.co2Score} 
                bio={scores.bioScore} 
                economy={scores.economyScore}
                co2Label={appData?.medatadataHeaders?.co2} 
                bioLabel={appData?.medatadataHeaders?.bio} 
                economyLabel={appData?.medatadataHeaders?.economy}
                limits={appData?.scoreLimits}
                alertOnAboveLimit={step === 5 || step === 6}
                alertMessage={appData?.aboveLimit}
                showLimits={step === 6}
              />
              <div className="landing__content__footer">
                <img alt="text" src={lifeLogo} />
                <Button 
                  size="huge" 
                  primary 
                  onClick={submitStep} 
                  disabled={multipleChoice ? !containsAllCategories : !activePChainChoice}>
                    <span dangerouslySetInnerHTML={{__html: (appData.steps[step || 1].buttonText) || ''}} />
                    <Icon name="chevron right" />
                </Button>
              </div>
            </div> 
          }
        </Grid.Column>
        {
          step !== 6 && 
          <Grid.Column floated='right' width={4}>
            <Chat title={appData.chat.title} />
          </Grid.Column>
        }
      </Grid.Row>
    </Grid>
  )
}

export default Landing;
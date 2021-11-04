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
  const { messages, addPendingMessages } = useChat();
  let { stepNo } = useParams<RouteParams>();
  const [step, setStep] = React.useState<number>();
  const [feecbackModalOpen, setFeedbackModalOpen ] = React.useState(false);
  const [multipleChoice, setMultipleChoice] = React.useState<boolean | undefined>();
  const [containsAllCategories, setContainsAllCategories] = React.useState<boolean>(false);
  const [showEmailModal, setShowEmailModal] = React.useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = React.useState<boolean>(false);
  const [toDirectorMessage, setToDirectorMessage] = React.useState<string>('');
  const [overBudget, setOverBudget] = React.useState<boolean>(false);

  const interval = React.useRef(setTimeout(() => {}, 0));

  const setInitialMessages = React.useCallback(() => {
    if (!hasInteracted && !messages.length && appData?.steps[step || 1].initialChatMessages.length) {
      addPendingMessages(appData.steps[step || 1].initialChatMessages);
      setHasInteracted(true);
    }
  }, [hasInteracted, addPendingMessages, setHasInteracted, appData, messages, step]);

  useEffect(() => {
    if (appData && !hasInteracted) {
      interval.current = setTimeout(setInitialMessages, (appData.initialMessagesDelay || 30) * 1000);
    }
    return () => {
      clearTimeout(interval.current); // cleanup
    };
  },[hasInteracted, appData, setInitialMessages])

  useEffect(() => {
    const newStep = stepNo ? parseInt(stepNo) : 1;
    if (newStep !== step) {
      setStep(newStep);
      setMultipleChoice(newStep === 6 || newStep === 5);
      resetChoices();
      setHasInteracted(false);
      setContainsAllCategories(newStep === 6 ? false : true);
      setToDirectorMessage('');
      setOverBudget(false);
    } 
  }, [stepNo, step, resetChoices]);

  useEffect(() => {
    if (!hasInteracted && messages.length) {
      setHasInteracted(true);
    }
  },[messages, hasInteracted])

  useEffect(() => {
    setMutuallyDisabledOptions(appData?.mutuallyDisabledOptions || []);
  }, [appData, setMutuallyDisabledOptions]);

  const [scores, setScore] = React.useState<PChainOptionMetadata>(activePChainChoice?.metadata || {co2Score: 0, bioScore: 0, economyScore: 0});

  const submitStep = () => {
    setHasInteracted(true);
    step === 6 ? setFeedbackModalOpen(true) : setShowEmailModal(true);
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
          currentScores.co2Score += ((c.metadata?.co2Score || 0) * (step === 6 ? appData.scoreWeights.co2[cStr] : 1) * (step === 6 ? appData.scoreMultiplicator.co2 : 1));
          currentScores.bioScore += ((c.metadata?.bioScore || 0) * (step === 6 ? appData.scoreWeights.bio[cStr] : 1) * (step === 6 ? appData.scoreMultiplicator.bio : 1));;
          currentScores.economyScore += ((c.metadata?.economyScore || 0) * (step === 6 ? appData.scoreWeights.economy[cStr] : 1) * (step === 6 ? appData.scoreMultiplicator.economy : 1));
        });
      });
      setContainsAllCategories(step !== 6 || hasAll);   

      console.log('currentScores', currentScores);
      
      // check if is above limit
      setOverBudget(currentScores.co2Score > appData?.scoreLimits.co2 * 100 ||
        currentScores.bioScore > appData?.scoreLimits.bio * 100  ||
        currentScores.economyScore > appData?.scoreLimits.economy * 100 )
    }
   
    setScore(currentScores);
  }, [multipleChoice, activePChainChoice, pChainChoices, appData.scoreWeights, appData.interactions, step, appData.scoreLimits]);

  return(
    <Grid columns={2} stackable>
      <Grid.Row>
        <Grid.Column floated='left' width={step === 6 ? 16 : 12}> 
          {
            !!appData && 
            <div className="landing">
              <div className="landing__content">
                <PChainStep 
                  key={step} 
                  step={step} 
                  appData={appData} 
                  multipleChoice={multipleChoice}
                /> 
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
                  feedback={appData.bossEmailTexts.thanksForMessage.steps[stepNo || "1"]?.split('{{choice}}').join(activePChainChoice?.title || '')}
                  email={appData.bossEmailTexts.email}
                  subject={appData.bossEmailTexts.subject}
                  open={showEmailModal} 
                  onClose={() => setShowEmailModal(false)}
                  closeButtonText={appData.bossEmailTexts.closeButtonText}
                  message={toDirectorMessage}
                  setMessage={setToDirectorMessage}
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
                showCo2={step !== 5}
                showBio={step !== 5}
                showEconomy={true}
              />
              <div className="landing__content__footer">
                <img alt="text" src={lifeLogo} />
                <Button 
                  size="huge" 
                  primary 
                  onClick={submitStep} 
                  disabled={multipleChoice ? !containsAllCategories || overBudget : !activePChainChoice}>
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
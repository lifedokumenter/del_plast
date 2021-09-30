import React, { useEffect, useState } from "react";
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

interface RouteParams {
  stepNo: string;
}

export interface LandingProps {
  appData: any;
}

const Landing = ({
  appData
}: LandingProps) => {

  const { activePChainChoice, pChainChoices, setMutuallyDisabledOptions } = usePChainChoices();
  const { stepNo } = useParams<RouteParams>();
  const [ feecbackModalOpen, setFeedbackModalOpen ] = React.useState(false);
  const [multipleChoice, setMultipleChoice] = useState<boolean>(parseInt(stepNo) === 6);

  useEffect(() => {
    setMultipleChoice(parseInt(stepNo) === 6);
  }, [stepNo]);

  useEffect(() => {
    setMutuallyDisabledOptions(appData?.mutuallyDisabledOptions || []);
  }, [appData, setMutuallyDisabledOptions]);

  const [scores, setScore] = useState<PChainOptionMetadata>(activePChainChoice?.metadata || {co2Score: 0, bioScore: 0, economyScore: 0});

  const submitStep = () => {
    if (multipleChoice) {
      setFeedbackModalOpen(true);
    } else {
      console.log('submitted with activePChainChoice', activePChainChoice);
    }
  }

  const submit = () => {
    console.log('submitting with choices: ', pChainChoices);
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
        if (c.id.substring(0,8) === "material") { categories.material.push({...c}); }
        if (c.id.substring(0,10) === "production") { categories.production.push({...c});}
        if (c.id.substring(0,9) === "transport") { categories.transport.push({...c});}
        if (c.id.substring(0,5) === "usage") { categories.usage.push({...c});}
        if (c.id.substring(0,8) === "disposal") { categories.disposal.push({...c});}
      });

      // multiply each category with their weighting
      // if more than one option from a category is chosen, take avarage from that category
      (Object.keys(categories) as Array<categoryNames>).forEach(cStr => {
        const cat = categories[cStr];
        cat.forEach( c => {
          currentScores.co2Score += ((c.metadata?.co2Score || 0) * appData.scoreWeights.co2[cStr]) / cat.length;
          currentScores.bioScore += ((c.metadata?.bioScore || 0) * appData.scoreWeights.bio[cStr]) / cat.length;
          currentScores.economyScore += ((c.metadata?.economyScore || 0) * appData.scoreWeights.economy[cStr]) / cat.length;
        });
      })
    }

    setScore(currentScores);
  }, [multipleChoice, activePChainChoice, pChainChoices, appData.scoreWeights]);

  return(
    <Grid columns={2} stackable>
      <Grid.Row>
        <Grid.Column floated='left' width={12}>
          <div className="landing">
            <div className="landing__content">
              <PChainStep key={stepNo} step={parseInt(stepNo)} appData={appData} multipleChoice={multipleChoice} /> 
              <FeedbackModal 
                feedbackOptions={appData.feedback}
                title={appData.feedbackText.title}
                description={appData.feedbackText.description}
                cancelBtnText={appData.feedbackText.cancelBtnText}
                submitBtnText={appData.feedbackText.submitBtnText}
                open={feecbackModalOpen}
                onSubmit={() => {
                  setFeedbackModalOpen(false); 
                  submit();
                }}
                onCancel={() => setFeedbackModalOpen(false)}
              />
            </div>
            <ProgressBars
              co2={scores.co2Score} 
              bio={scores.bioScore} 
              economy={scores.economyScore}
              co2Label={appData?.medatadataHeaders?.co2} 
              bioLabel={appData?.medatadataHeaders?.bio} 
              economyLabel={appData?.medatadataHeaders?.economy}
            />
            <div className="landing__content__footer">
              <img alt="text" src={lifeLogo} />
              <Button size="huge" primary onClick={submitStep}>
                {appData.steps[stepNo || 1].buttonText}
                <Icon name="chevron right" />
              </Button>
            </div>
          </div> 
        </Grid.Column>
        <Grid.Column floated='right' width={4}>
          <Chat />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Landing;
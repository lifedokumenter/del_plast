import React, { useEffect, useState } from "react";
import './index.less';
import { Button, Grid, Icon } from 'semantic-ui-react';
import { PChainOptionMetadata } from '../../interfaces/PChainOption'; 
import { usePChainChoices } from "../../contexts/PChainChoicesContext";
import ProgressBars from "../../components/ProgressBars";
import lifeLogo from '../../images/life_logo.svg';
import Chat from "../../components/Chat";
import { useParams } from "react-router";
import PChainStep from "../../components/PChainStep";

interface RouteParams {
  stepNo: string;
}

export interface LandingProps {
  appData: any;
}

const Landing = ({
  appData
}: LandingProps) => {

  const { activePChainChoice, pChainChoices } = usePChainChoices();
  const { stepNo } = useParams<RouteParams>();
  
  const [multipleChoice, setMultipleChoice] = useState<boolean>(parseInt(stepNo) === 6);

  useEffect(() => {
    setMultipleChoice(parseInt(stepNo) === 6);
  }, [stepNo]);

  const [scores, setScore] = useState<PChainOptionMetadata>(activePChainChoice?.metadata || {co2Score: 0, bioScore: 0, economyScore: 0});

  const submit = () => {
    console.log('submitted with activePChainChoice', activePChainChoice);
  }

  /* calculate scores on change */
  useEffect(() => {
    const defaultScores = {co2Score: 0, bioScore: 0, economyScore: 0};
    let currentScores = activePChainChoice?.metadata || defaultScores;
    if (multipleChoice && pChainChoices?.length) {
      currentScores = defaultScores;
      pChainChoices.forEach( c => {
        currentScores.bioScore+=c.metadata?.bioScore || 0;
        currentScores.co2Score+=c.metadata?.co2Score || 0;
        currentScores.economyScore+=c.metadata?.economyScore || 0;
      });
      currentScores.bioScore = currentScores.bioScore / pChainChoices.length;
      currentScores.co2Score = currentScores.co2Score / pChainChoices.length;
      currentScores.economyScore = currentScores.economyScore / pChainChoices.length;
    }
    setScore(currentScores);
  }, [multipleChoice, activePChainChoice, pChainChoices]);

  return(
    <Grid columns={2} stackable>
      <Grid.Row>
        <Grid.Column floated='left' width={12}>
          <div className="landing">
            <div className="landing__content">
              <PChainStep key={stepNo} step={parseInt(stepNo)} appData={appData} multipleChoice={multipleChoice} />
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
              <Button size="huge" primary onClick={submit}>
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
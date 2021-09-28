import React from "react";
import './index.less';
import { Button, Grid, Header, Icon } from 'semantic-ui-react';
import { PChainOption } from '../../interfaces/PChainOption'; 
import PChainColumn from "../../components/PChainColumn"
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

  const { activePChainChoice } = usePChainChoices();
  const { stepNo } = useParams<RouteParams>();

  const submit = () => {
    console.log('submitted with activePChainChoice', activePChainChoice);
  }

  return(
    <Grid columns={2} stackable>
      <Grid.Row>
        <Grid.Column floated='left' width={12}>
          <div className="landing">
            <div className="landing__content">
              <PChainStep key={stepNo} step={parseInt(stepNo)} appData={appData} />
            </div>
            <ProgressBars
              co2={activePChainChoice?.metadata?.co2Score} 
              bio={activePChainChoice?.metadata?.bioScore} 
              economy={activePChainChoice?.metadata?.economyScore}
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
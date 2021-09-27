import React from "react";
import './index.less';
import { Button, Header } from 'semantic-ui-react';
import { PChainOption } from '../../interfaces/PChainOption'; 
import PChainColumn from "../../components/PChainColumn"
import { usePChainChoices } from "../../contexts/PChainChoicesContext";
import ProgressBars from "../../components/ProgressBars";
import lifeLogo from '../../images/life_logo.svg';

export interface LandingProps {
  appData: any;
}

const Landing = ({
  appData, 
}: LandingProps) => {

  const { activePChainChoice } = usePChainChoices();
  console.log('activePChainChoice:' , activePChainChoice);

  return(
    <div className="landing">
      <div className="landing__content">
        <div className="landing__header">
          <Header size="large" >{appData?.chooseMaterialHeader}</Header>
        </div>
        <div className="landing__content__columns">
          { 
            appData?.materials.map( (option: PChainOption) => 
              <PChainColumn
                key={option.id}
                PChainOptions={option.subMaterials || []} 
                selected={activePChainChoice} 
                id={option.id}
              />
            )
          }
        </div>
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
        <Button primary>{appData?.chooseMaterialButton}</Button>
      </div>
    </div>        
  )
}

export default Landing;
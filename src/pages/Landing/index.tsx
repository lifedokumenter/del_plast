import React from "react";
import './index.less';
import { Header } from 'semantic-ui-react';
import { PChainOption } from '../../interfaces/PChainOption'; 
import PChainColumn from "../../components/PChainColumn"
import { usePChainChoices } from "../../contexts/PChainChoicesContext";
import ProgressBars from "../../components/ProgressBars";

export interface LandingProps {
  appData: any;
}

const Landing = ({
  appData, 
}: LandingProps) => {

  const { activePChainChoice } = usePChainChoices();

  return(
    <div className="landing">
      <div className="landing__content">
        <Header size="large" className="landing__header">{appData?.chooseMaterialHeader}</Header>
        <div className="landing__content__columns">
          { 
            appData?.materials.map( (option: PChainOption) => 
              <PChainColumn
                key={option.id}
                PChainOptions={option.subMaterials || []} 
                selected={activePChainChoice} 
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
    </div>        
  )
}

export default Landing;
import React from 'react';
import { Header } from 'semantic-ui-react';
import { usePChainChoices } from '../../contexts/PChainChoicesContext';
import { PChainOption } from '../../interfaces/PChainOption';
import PChainColumn from '../PChainColumn';
import './index.less';

interface PChainStepProps { 
  step: number,
  appData: any
}

const PChainStep = ({step, appData}:PChainStepProps) => {
  
  const { activePChainChoice } = usePChainChoices();

  let pChainType = 'materials';
  if (step === 2) {
    pChainType = 'production';
  } else if(step === 3) {
    pChainType = 'transport';
  } else if(step === 4) {
    pChainType = 'usage';
  } else if(step === 5) {
    pChainType = 'disposal';
  } else if(step === 6) {
    pChainType = 'all';
  }

  const reduceSubCategories = (category: string) =>{
    return appData[category].reduce((options: Array<PChainOption>, option: PChainOption) => [...options, ...option.subCategories || []], [])
  }

  let pChainOptions:Array<PChainOption> = [];
  if (pChainType === 'all') {
    pChainOptions = [
      { id: 'materials', subCategories: reduceSubCategories('materials') },
      { id: 'production', subCategories: reduceSubCategories('production') },
      { id: 'transport', subCategories: reduceSubCategories('transport') },
      { id: 'usage', subCategories: reduceSubCategories('usage') },
      { id: 'disposal', subCategories: reduceSubCategories('disposal') },
    ];
    
  } else{
    pChainOptions = appData[pChainType];
  }

  return (
    <div className={`p-chain-step p-chain-step__${step}`}>
      <Header size="large" >{appData?.steps[step].title}</Header>
      <div className="p-chain-step__columns">
        { 
          pChainOptions.map( (option: PChainOption) => 
            <PChainColumn
              key={option.id}
              PChainOptions={option.subCategories || []} 
              selected={activePChainChoice} 
              id={option.id}
              wrap={pChainOptions.length === 1}
              showDescription={pChainType !== 'all'}
              size={pChainType === 'all' ? 'small' : ''}
            />
          )
        }
      </div>
    </div>
  )
}

PChainStep.defaultProps = {
  step: 1
}

export default PChainStep;
import React from 'react';
import { Header } from 'semantic-ui-react';
import { usePChainChoices } from '../../contexts/PChainChoicesContext';
import { PChainOption } from '../../interfaces/PChainOption';
import PChainColumn from '../PChainColumn';
import './index.less';

interface PChainStepProps { 
  step: number,
  appData: any,
  multipleChoice?: boolean|undefined
}

const PChainStep = ({step, multipleChoice, appData}:PChainStepProps) => {

  let pChainType = 'material';
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

  const { activePChainChoice } =  usePChainChoices();

  const reduceSubCategories = (category: string) =>{
    return appData[category].reduce((options: Array<PChainOption>, option: PChainOption) => [...options, ...option.subCategories || []], [])
  }

  let pChainOptions:Array<PChainOption> = [];
  if (pChainType === 'all') {
    pChainOptions = [
      { id: 'material', subCategories: reduceSubCategories('material'), title: appData?.steps[step].columnTitles.material },
      { id: 'production', subCategories: reduceSubCategories('production'), title: appData?.steps[step].columnTitles.production  },
      { id: 'transport', subCategories: reduceSubCategories('transport'), title: appData?.steps[step].columnTitles.transport  },
      { id: 'usage', subCategories: reduceSubCategories('usage'), title: appData?.steps[step].columnTitles.usage  },
      { id: 'disposal', subCategories: reduceSubCategories('disposal'), title: appData?.steps[step].columnTitles.disposal  },
    ];
  } else{
    pChainOptions = appData[pChainType];
  }

  return (
    <div className={`p-chain-step p-chain-step__${step}`}>
      <Header size="large">
        <span dangerouslySetInnerHTML={{__html: appData?.steps[step || 1].title || ''}}/>
      </Header>
      {
        appData?.steps[step || 1].tagline && 
        <Header size="medium">
          <span dangerouslySetInnerHTML={{__html: appData?.steps[step || 1].tagline || ''}}/>
        </Header>
      }
      <div className="p-chain-step__columns">
        { 
          pChainOptions.map( (option: PChainOption) => 
            <PChainColumn
              key={option.id}
              multipleChoicePerColumn={option.id === 'disposal'}
              PChainOptions={option.subCategories || []} 
              wrap={pChainOptions.length === 1}
              showDescription={pChainType !== 'all'}
              size={pChainType === 'all' ? 'small' : ''}
              multipleChoice={multipleChoice}
              title={pChainType === 'all' ? option.title : undefined}
              striped={step === 6}
              maxChoices={option.id === 'disposal' ? 2 : undefined}
            />
          )
        }
        {
          step === 4 &&
          <div className="p-chain-step__columns__image">
            <img src={activePChainChoice?.imageUrl}></img>
          </div>
        }
      </div>
    </div>
  )
}

PChainStep.defaultProps = {
  step: 1
}

export default PChainStep;
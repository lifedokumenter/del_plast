import React from 'react';
import './index.less';

import { PChainOption } from '../../interfaces/PChainOption'; 
import { useChat } from '../../contexts/chatContext';
import { usePChainChoices } from '../../contexts/PChainChoicesContext';
import PChainOptionCard from '../PChainOptionCard';
import { Header } from 'semantic-ui-react';

interface PChainColumnProps { 
  title: string;
  PChainOptions: Array<PChainOption>,
  showDescription?: boolean;
  wrap?: boolean;
  size?: string;
  multipleChoice?: boolean;
  multipleChoicePerColumn?: boolean;
  striped?: boolean;
  maxChoices?: number|undefined;
}

const PChainColumn = ({title, PChainOptions, wrap, showDescription, size, multipleChoice, multipleChoicePerColumn, striped, maxChoices}:PChainColumnProps) => {

  const { setPendingMessages } = useChat(); 
  const { activePChainChoice, setActivePChainChoice, togglePChainChoice, pChainChoices, disabledPChainChoices } = usePChainChoices();

  const selectPChainOption = (option: PChainOption) => {
    if (multipleChoice) {
      const wasToggledOn = togglePChainChoice(option, multipleChoicePerColumn);
      setPendingMessages(wasToggledOn && option.chatMessages ? option.chatMessages : []);
    } else {
      setPendingMessages(option.chatMessages || []);
      setActivePChainChoice(option);
    }
  }

  const isOptionSelected = (option:PChainOption) => {
    if (multipleChoice) {
      return !!pChainChoices.find(c => c.id === option.id);
    } else {
      return option.id === activePChainChoice?.id;
    }
  }

  const isOptionDisabled = (option:PChainOption) => {
    if (!maxChoices) {
      return disabledPChainChoices.indexOf(option.id) > -1;
    } 

    const selectedIds = pChainChoices.map(c => c.id);
    const selectedOptions = PChainOptions.filter(c => selectedIds.indexOf(c.id) > -1 )

    if (selectedOptions.length === maxChoices) {
      return !pChainChoices.find(c => c.id === option.id);
    } else {
      return disabledPChainChoices.indexOf(option.id) > -1;
    } 
  }

  return (
    <div className={`p-chain-column ${wrap ? 'wrap' : ''} ${striped ? 'striped' : ''}`}>
      {
        title && 
        <Header size="medium" >
          <span dangerouslySetInnerHTML={{__html: title || ''}} />
        </Header>
      }
      {
        PChainOptions.map((option: PChainOption) => (
          <PChainOptionCard 
            pChainOption={option} 
            key={option.id} 
            onSelect={selectPChainOption} 
            showDescription={showDescription} 
            isSelected={isOptionSelected(option)} 
            size={size} 
            isDisabled={isOptionDisabled(option)}
          />
        ))
      }
    </div>
  )
}

PChainColumn.defaultProps = {
  title: undefined,
  PChainOptions: [],
  showDescription: true,
}

export default PChainColumn;
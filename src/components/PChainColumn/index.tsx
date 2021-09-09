import React from 'react';
import './index.less';
import { Card } from 'semantic-ui-react';

import { PChainOption } from '../../interfaces/PChainOption'; 
import { useChat } from '../../contexts/chatContext';
import { usePChainChoices } from '../../contexts/PChainChoicesContext';

interface PChainColumnProps { 
  PChainOptions: Array<PChainOption>,
  onSelect: (option: PChainOption)=>void,
  selected?: PChainOption | null,
  showDescription?: boolean;
}

const PChainColumn = ({PChainOptions, onSelect, selected}:PChainColumnProps) => {

  const { setPendingMessages } = useChat(); 
  const { setActivePChainChoice } = usePChainChoices();

  const selectPChainOption = (option: PChainOption) => {
    setPendingMessages(option.chatMessages || []);
    setActivePChainChoice(option);
    onSelect(option);
  }

  return (
    <div className="raw-material-column">
      {
        PChainOptions.map((option: PChainOption) => (
          <Card  className="raw-material-column__option" key={option.id} color={selected ? 'green' : 'grey'} onClick={() => selectPChainOption(option)}>
            <Card.Content>
              <Card.Header content={option.title} />
              <Card.Description content={
                <div className="raw-material-column__option__description">
                  <p>{option.description}</p>
                  <img src={option.imageUrl} />
                </div>
              } />
            </Card.Content>
          </Card>
        ))
      }
    </div>
  )
}

PChainColumn.defaultProps = {
  PChainOptions: [],
  onSelect: () => {},
  selected: null,
  showDescription: true,
}

export default PChainColumn;
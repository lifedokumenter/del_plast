import React from 'react';
import './index.less';
import { Card } from 'semantic-ui-react';

import { PChainOption } from '../../interfaces/PChainOption'; 
import { useChat } from '../../contexts/chatContext';
import { usePChainChoices } from '../../contexts/PChainChoicesContext';

import { ReactComponent as OilIcon } from '../../images/oil.svg';
import { ReactComponent as BioIcon } from '../../images/bio.svg';
import { ReactComponent as RecycleIcon } from '../../images/recycle.svg';
import { ReactComponent as CheckmarkIcon } from '../../images/checkmark.svg';

interface PChainColumnProps { 
  PChainOptions: Array<PChainOption>,
  onSelect: (option: PChainOption)=>void,
  id?: string,
  selected?: PChainOption | null,
  showDescription?: boolean;
  wrap?: boolean;
  size?: string;
}

const PChainColumn = ({PChainOptions, onSelect, selected, id, wrap, showDescription, size}:PChainColumnProps) => {

  const { setPendingMessages } = useChat(); 
  const { setActivePChainChoice } = usePChainChoices();

  console.log('size is: ', size);

  let icon: any = null;

  if (id) {
    if (id === 'olieplast') {
      icon = <OilIcon />;
    } else if (id === 'planteplast'){
      icon = <BioIcon />;
    } else if (id === 'genanvendt'){
      icon = <RecycleIcon />;
    }
    
  }

  const selectPChainOption = (option: PChainOption) => {
    setPendingMessages(option.chatMessages || []);
    setActivePChainChoice(option);
    onSelect(option);
  }

  return (
    <div className={`p-chain-column ${wrap ? 'wrap' : ''}`}>
      {
        PChainOptions.map((option: PChainOption) => (
          <Card className={`p-chain-column__option ${size}`} key={option.id} color={option.id === selected?.id ? 'green' : undefined} onClick={() => selectPChainOption(option)}>
            <Card.Content>
              <Card.Header content={option.title} /> 
              { 
                option.id === selected?.id &&
                <CheckmarkIcon className="p-chain-column__option__selected-icon" />
              }
              {
                showDescription && 
                <Card.Description content={
                    <>
                      <p>{option.description}</p>
                      {icon}
                    </>
                  } 
                />
              }
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
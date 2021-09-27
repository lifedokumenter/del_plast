import React from 'react';
import './index.less';
import { Card } from 'semantic-ui-react';

import { PChainOption } from '../../interfaces/PChainOption'; 
import { useChat } from '../../contexts/chatContext';
import { usePChainChoices } from '../../contexts/PChainChoicesContext';

import { ReactComponent as OilIcon } from '../../images/oil.svg';
import { ReactComponent as BioIcon } from '../../images/bio.svg';
import { ReactComponent as RecycleIcon } from '../../images/recycle.svg';

interface PChainColumnProps { 
  PChainOptions: Array<PChainOption>,
  onSelect: (option: PChainOption)=>void,
  id?: string,
  selected?: PChainOption | null,
  showDescription?: boolean;
}

const PChainColumn = ({PChainOptions, onSelect, selected, id}:PChainColumnProps) => {

  const { setPendingMessages } = useChat(); 
  const { setActivePChainChoice } = usePChainChoices();

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
    <div className="raw-material-column">
      {
        PChainOptions.map((option: PChainOption) => (
          <Card className="raw-material-column__option" key={option.id} color={option.id === selected?.id ? 'green' : undefined} onClick={() => selectPChainOption(option)}>
            <Card.Content>
              <Card.Header content={option.title} />
              <Card.Description content={
                <>
                  <p>{option.description}</p>
                  {icon}
                </>
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
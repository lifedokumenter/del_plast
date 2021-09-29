import React from 'react';
import './index.less';
import { Card } from 'semantic-ui-react';

import { PChainOption } from '../../interfaces/PChainOption'; 
import { ReactComponent as OilIcon } from '../../images/oil.svg';
import { ReactComponent as BioIcon } from '../../images/bio.svg';
import { ReactComponent as RecycleIcon } from '../../images/recycle.svg';
import { ReactComponent as CheckmarkIcon } from '../../images/checkmark.svg';
import { usePChainChoices } from '../../contexts/PChainChoicesContext';

interface PChainOptionProps { 
  pChainOption: PChainOption,
  isSelected: boolean,
  onSelect: (option: PChainOption)=>void,
  showDescription?: boolean;
  size?: string;
  isDisabled?: boolean;
}

const PChainOptionCard = ({pChainOption, isDisabled, isSelected, onSelect, showDescription, size}:PChainOptionProps) => {

  let icon: any = null;

  if (pChainOption.id === 'olieplast') {
    icon = <OilIcon />;
  } else if (pChainOption.id === 'planteplast'){
    icon = <BioIcon />;
  } else if (pChainOption.id === 'genanvendt'){
    icon = <RecycleIcon />;
  }

  return (
    <Card className={`p-chain-option-card ${size} ${isDisabled ? 'disabled' : ''}`} key={pChainOption.id} color={isSelected ? 'green' : undefined} onClick={() => isDisabled ? null : onSelect(pChainOption)}>
      <Card.Content>
        <Card.Header content={pChainOption.title} /> 
        { 
          isSelected &&
          <CheckmarkIcon className="p-chain-option-card__selected-icon" />
        }
        {
          showDescription && 
          <Card.Description content={
              <>
                <p>{pChainOption.description}</p>
                {icon}
              </>
            } 
          />
        }
      </Card.Content>
    </Card>
  )
}

PChainOptionCard.defaultProps = {
  pChainOption: {},
  isSelected: false,
  onSelect: () => {},
  showDescription: true,
  size: '',
}

export default PChainOptionCard;
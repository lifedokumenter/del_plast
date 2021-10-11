import React from 'react';
import './index.less';
import { Card } from 'semantic-ui-react';

import { PChainOption } from '../../interfaces/PChainOption'; 
import { ReactComponent as OilIcon } from '../../images/oil.svg';
import { ReactComponent as BioIcon } from '../../images/bio.svg';
import { ReactComponent as RecycleIcon } from '../../images/recycle.svg';
import { ReactComponent as CheckmarkIcon } from '../../images/checkmark.svg';

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

  if (pChainOption.iconType === 'oil') {
    icon = <OilIcon />;
  } else if (pChainOption.iconType === 'bio'){
    icon = <BioIcon />;
  } else if (pChainOption.iconType === 'recycle'){
    icon = <RecycleIcon />;
  }

  return (
    <Card className={`p-chain-option-card ${size} ${isDisabled ? 'disabled' : ''}`} key={pChainOption.id} color={isSelected ? 'green' : undefined} onClick={() => isDisabled ? null : onSelect(pChainOption)}>
      <Card.Content>
        <Card.Header content={
          <span dangerouslySetInnerHTML={{__html: pChainOption.title || ''}}/>
        }/> 
        {
          showDescription && 
          <Card.Description content={
              <>
                <p dangerouslySetInnerHTML={{__html: pChainOption.description || ''}}/>
                {icon}
              </>
            } 
          />
        }
      </Card.Content>
      { 
        isSelected &&
        <CheckmarkIcon className="p-chain-option-card__selected-icon" />
      }
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
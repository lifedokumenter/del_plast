import React from 'react';
import { Button, Header, Popup, Progress } from 'semantic-ui-react';
import './index.less';

interface ProgressLimits {
  co2: number,
  bio: number,
  economy: number
}

interface ProgressBarsProps {
  co2: number | undefined,
  bio: number | undefined,
  economy: number | undefined,
  limits: ProgressLimits,
  co2Label?: string,
  bioLabel?: string,
  economyLabel?: string;
  alertOnAboveLimit?: boolean;
  alertMessage?: string;
}

const ProgressBars = ({co2, bio, economy, limits = {co2: 0.8, bio: 0.8, economy: 0.8}, co2Label='', bioLabel='', economyLabel='', alertOnAboveLimit = false, alertMessage = ''}: ProgressBarsProps) => {

  const parseColor = (percentage: number | undefined, limit: number) => {
    limit = limit * 100;
    if (percentage === undefined || (percentage <= limit && percentage < 33)) {
      return 'green';
    } else if (percentage < limit) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

  return (
    <div className="progress-bars">
      <div className="progress-bars__bar">
        <Header size="medium"> 
          <span dangerouslySetInnerHTML={{__html: co2Label || ''}} />
        </Header>
        <Progress percent={co2} color={parseColor(co2, limits.co2)}>
          <div className="progress-bars__bar__limit" style={{width: limits.co2 * 100 + '%'}} />
          {
            alertOnAboveLimit && ((co2 || 0) > limits.co2 * 100) &&
            <Popup 
              content={ <span dangerouslySetInnerHTML={{__html: alertMessage || ''}} /> } 
              trigger={<Button color="red" icon='exclamation' />} 
            />
          }
        </Progress>
      </div>
      <div className="progress-bars__bar">
        <Header size="medium">{bioLabel}</Header>
        <Progress percent={bio} color={parseColor(bio, limits.bio)}>
          <div className="progress-bars__bar__limit" style={{width: limits.bio * 100 + '%'}} />
          {
            alertOnAboveLimit && ((bio || 0) > limits.bio * 100) &&
            <Popup 
              content={ <span dangerouslySetInnerHTML={{__html: alertMessage || ''}} /> } 
              trigger={<Button color="red" icon='exclamation' />} 
            />
          }
        </Progress>
      </div>
      <div className="progress-bars__bar">
        <Header size="medium">{economyLabel}</Header>
        <Progress percent={economy} color={parseColor(economy, limits.economy)}>
          <div className="progress-bars__bar__limit" style={{width: limits.economy * 100 + '%'}} />
          {
            alertOnAboveLimit && ((economy || 0) > limits.economy * 100) &&
            <Popup 
              content={ <span dangerouslySetInnerHTML={{__html: alertMessage || ''}} /> }  
              trigger={<Button color="red" icon='exclamation' />} 
            />
          }
        </Progress>
      </div>
    </div>
  )

}

export default ProgressBars;


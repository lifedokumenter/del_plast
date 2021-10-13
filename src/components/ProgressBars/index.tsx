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
  showLimits?: boolean;
}

const ProgressBars = ({co2, bio, economy, limits = {co2: 0.8, bio: 0.8, economy: 0.8}, co2Label='', bioLabel='', economyLabel='', alertOnAboveLimit = false, alertMessage = '', showLimits}: ProgressBarsProps) => {

  const parseColor = (percentage: number | undefined, limit: number) => {

    limit = limit * 100;
    if (percentage === undefined || (percentage <= limit && percentage < 20)) {
      return 'green';
    } else if (percentage < 40) {
      return 'olive';
    } else if (percentage < 60) {
      return 'yellow';
    } else if (percentage < 80) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  const renderProgressBar = (label: string, percent: number|undefined, limit: number) => {
    return (
      <div className="progress-bars__bar">
        <Header size="medium"> 
          <span dangerouslySetInnerHTML={{__html: label || ''}} />
        </Header>
        <Progress percent={percent} color={parseColor(percent, limit)}>
          { 
            showLimits &&
            <div className="progress-bars__bar__limit" style={{width: limit * 100 + '%'}}>
              {
                alertOnAboveLimit && ((percent || 0) > limit * 100) &&
                <Popup 
                  content={ <span dangerouslySetInnerHTML={{__html: alertMessage || ''}} /> } 
                  trigger={<Button color="red" icon='exclamation' />} 
                />
              }
            </div>
          }
        </Progress>
      </div>
    )
  }

  return (
    <div className="progress-bars">
      { renderProgressBar(co2Label, co2, limits.co2) }
      { renderProgressBar(bioLabel, bio, limits.bio) }
      { renderProgressBar(economyLabel, economy, limits.economy) }
    </div>
  )

}

export default ProgressBars;


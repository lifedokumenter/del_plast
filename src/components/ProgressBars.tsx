import React from 'react';
import { Progress } from 'semantic-ui-react';
import './ProgressBars.less';

interface ProgressBarsProps {
  co2: number | undefined,
  bio: number | undefined,
  economy: number | undefined,
  co2Label?: string,
  bioLabel?: string,
  economyLabel?: string
}

const ProgressBars = ({co2, bio, economy, co2Label='', bioLabel='', economyLabel=''}: ProgressBarsProps) => {

  return (
    <div className="progress-bars">
      <Progress percent={co2} color={'red'}>
        {co2Label}
      </Progress>
      <Progress percent={bio} color={'teal'}>
        {bioLabel}
      </Progress>
      <Progress percent={economy} color={'blue'}>
        {economyLabel}
      </Progress>
    </div>
  )

}

export default ProgressBars;


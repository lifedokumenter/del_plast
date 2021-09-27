import React from 'react';
import { Header, Progress } from 'semantic-ui-react';
import './index.less';

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
      <div className="progress-bars__bar">
        <Header size="medium">{co2Label}</Header>
        <Progress percent={co2} color={'red'}/>
      </div>
      <div className="progress-bars__bar">
        <Header size="medium">{bioLabel}</Header>
        <Progress percent={bio} color={'yellow'}/>
      </div>
      <div className="progress-bars__bar">
        <Header size="medium">{economyLabel}</Header>
        <Progress percent={economy} color={'green'}/>
      </div>
    </div>
  )

}

export default ProgressBars;


import React from 'react';
import './index.less';
import { Header, Image } from 'semantic-ui-react';

import ToDirectorModal from '../ToDirectorModal';

interface Props {
  id: string,
  title: string,
  description: string,
  imageUrl?: string,
  selectedHeader?: string,
  feedback?: string,
  enableSelect?: boolean
}

const RawMaterialDetails = ({ id, title, description, imageUrl, selectedHeader, feedback, enableSelect}: Props ) => {

  return (
    <div className="raw-material-details">
      <div className="raw-material-details-image">
        <Image src={imageUrl} />
      </div>
      <div className="raw-material-details-description">
        <Header>{title}</Header>
        <p>{description}</p>
        <ToDirectorModal 
          buttonText={`Vælg "${title}" og send mail til direktøren`} 
          choice={title || ''} 
          header={selectedHeader}
          feedback={feedback}
          enableSelect={enableSelect}
        />
      </div>
    </div>
  )

}

export default RawMaterialDetails;
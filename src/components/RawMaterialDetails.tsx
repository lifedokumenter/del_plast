import './RawMaterialDetails.less';

import React from 'react';
import { Header, Image } from 'semantic-ui-react';

import ToDirectorModal from './ToDirectorModal';

interface Props {
  id: string,
  title: string,
  description: string,
  imageUrl?: string,
  selectedHeader?: string,
  feedback?: string
}

const RawMaterialDetails = ({ id, title, description, imageUrl, selectedHeader, feedback}: Props ) => {

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
        />
      </div>
    </div>
  )

}

export default RawMaterialDetails;
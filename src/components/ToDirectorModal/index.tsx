import React from 'react'
import { Button, Form, Header, Modal, TextArea } from 'semantic-ui-react';
import { ReactComponent as EmailNavbar } from '../../images/email_top.svg';
import { ReactComponent as EmailFooterIcons } from '../../images/email_footer_icons.svg';

import './index.less';

interface Props {
  buttonText: string,
  choice: string,
  onClose?: () => void,
  open?: boolean,
  header?: string,
  feedback?: string,
  email?: string,
  subject?: string,
}

function ToDirectorModal({buttonText, choice, header, feedback, open, email, subject, onClose = () => {}}: Props) {
  const [sent, setSent] = React.useState(false)

  return (
    <Modal
      onClose={() => {setSent(false); onClose()}}
      open={open}
      className="to-director-modal"
    >
      <Modal.Content>
        <Modal.Header>
          <EmailNavbar className="to-director-modal__email_navbar" />
        </Modal.Header>
        <Modal.Description>
          {
            sent === false && 
            <>
              <div className="to-director-modal__fields">
                <div className="to-director-modal__fields__input">
                  <p>Til</p>
                  <p>{email}</p>
                </div>
                <div className="to-director-modal__fields__input">
                  <p>Emne</p>
                  <p className="to-director-modal__fields__input__subject">{`${subject} ${choice}`}</p>
                </div>
              </div>
              <Form>
                <TextArea placeholder='Besked...' />
              </Form>
            </>
          }
          {
            sent && 
            <>
              <p>"{feedback}"</p>
            </>
          }
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <EmailFooterIcons className="to-director-modal__email-footer-icons" />
        {
          sent === false && 
          <Button
            content={buttonText}
            onClick={() => setSent(true)}
            color='blue'
          />
        }
        {
          sent && 
          <Button
            onClick={() => {setSent(false); onClose(); }}
            color="blue"
          >Luk</Button>
        }
      </Modal.Actions>
    </Modal>
  )
}

ToDirectorModal.defaultProps = {
  open: false,
  onClose: () => {}
}

export default ToDirectorModal;

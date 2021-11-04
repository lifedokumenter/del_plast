import React from 'react'
import { Button, Form, Modal, TextArea } from 'semantic-ui-react';
import { ReactComponent as EmailNavbar } from '../../images/email_top.svg';
import { ReactComponent as EmailFooterIcons } from '../../images/email_footer_icons.svg';

import './index.less';

interface Props {
  buttonText?: string,
  choice?: string,
  onClose?: () => void,
  open?: boolean,
  feedback?: string,
  email?: string,
  subject?: string,
  closeButtonText?: string,
  message?: string,
  setMessage?: (message: string) => void,
  showAnswer?: boolean | undefined
}

function ToDirectorModal({
  buttonText, 
  choice, 
  feedback, 
  open, 
  email, 
  subject, 
  showAnswer,
  onClose = () => '', 
  closeButtonText = '', 
  message='', 
  setMessage = () => {},
}: Props) {
  const [sent, setSent] = React.useState(false);

  const close = () => {
    if (sent) {
      setMessage('');
    } 
    onClose()
  }

  React.useEffect(() => {
    if (showAnswer) {
      setSent(true);
    }
  }, [showAnswer])

  return (
    <Modal
      onClose={() => {setSent(false); close()}}
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
                  <p className="to-director-modal__fields__input__subject" dangerouslySetInnerHTML={{__html: `${subject} ${choice}`}} />
                </div>
              </div>
              <Form>
                <TextArea value={message} placeholder='Besked...' onChange={(ev) => setMessage(ev.target.value)} />
              </Form>
            </>
          }
          {
            sent && 
            <>
              <p dangerouslySetInnerHTML={{__html: `${feedback}`}} />
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
            onClick={() => {setSent(false); close(); }}
            color="blue"
          >
            <span dangerouslySetInnerHTML={{__html: `${closeButtonText}`}} />
          </Button>
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

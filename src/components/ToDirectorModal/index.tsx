import React from 'react'
import { Button, Form, Header, Modal, TextArea } from 'semantic-ui-react';
import { ReactComponent as EmailNavbar } from '../../images/email_top.svg';
import { ReactComponent as EmailFooterIcons } from '../../images/email_footer_icons.svg';
import { ReactComponent as CheckmarkFull } from '../../images/checkmark_full.svg';

import './index.less';
import { PChainOption } from '../../interfaces/PChainOption';

interface Props {
  buttonText?: string,
  choices?: PChainOption[],
  onClose?: () => void,
  open?: boolean,
  feedback?: string,
  category?: string;
  email?: string,
  subject?: string,
  closeButtonText?: string,
  message?: string,
  setMessage?: (message: string) => void,
  showAnswer?: boolean | undefined;
  directorName?: string;
  directorTitle?: string;
  toName?: string;
  placeholder?: string;
  step: number|undefined;
  hasAnsweredMessages?: string[];
}

function ToDirectorModal({
  buttonText, 
  choices, 
  feedback, 
  category,
  open, 
  email, 
  subject, 
  showAnswer,
  hasAnsweredMessages,
  onClose = () => '', 
  closeButtonText = '', 
  message='', 
  setMessage = () => {},
  directorName = '',
  directorTitle = '',
  toName = '',
  placeholder = '',
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
  }, [showAnswer]);

  const [answers, setAnswers] = React.useState<Array<PChainOption[]>>([]);
  const [hasAnswered, setHasAnswered] = React.useState<boolean>(false);

  const checkHasAnswered = () => {
    for (let i=0; i<answers.length; i++) {
      if (JSON.stringify(answers[i])===JSON.stringify(choices)) {
        return true;
      }
    }

    return false;
  }

  const saveAnswer = () => {
    if (choices?.length) {
      const _hasAnswered = checkHasAnswered();
      if (!_hasAnswered) {
        setAnswers([...answers, choices]);
      }
      setHasAnswered(_hasAnswered);
    }
  }

  const getHasAnsweredMsg = () => {
    if (hasAnsweredMessages?.length){
      return hasAnsweredMessages[Math.floor(Math.random()*hasAnsweredMessages.length)];
    } else {
      return feedback;
    }
  }

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
                  <p className="to-director-modal__fields__input__subject" dangerouslySetInnerHTML={{__html: `${subject} ${category}`}} />
                </div>
              </div>
              <Form>
                <TextArea value={message} placeholder={placeholder || 'Besked...'} onChange={(ev) => setMessage(ev.target.value)} />
              </Form>
            </>
          }
          {
            sent && 
            <div className="to-director-modal__answer">
              <div className="to-director-modal__answer__from-card">
                <img src="./images/director_avatar.jpg" alt="director" />
                <div className="to-director-modal__answer__from-card__content">
                  <Header className="to-director-modal__answer__from-card__content__name" size="medium">
                    <span dangerouslySetInnerHTML={{__html: directorName}}></span>
                  </Header>  
                  <div className="to-director-modal__answer__from-card__content__to">
                    <p>Til:</p>
                    <CheckmarkFull />
                    <p dangerouslySetInnerHTML={{__html: toName}}></p>
                  </div>
                </div>
              </div>
              <p dangerouslySetInnerHTML={{__html: `${hasAnswered ? getHasAnsweredMsg() : feedback}`}} />

              <div className="to-director-modal__answer__logo">
                {/* <CoverupLogo /> */}
                <img className="to-director-modal__answer__logo__img" src="./images/coverup_logo.svg" alt="logo" />
                <div className="to-director-modal__answer__logo__title">
                  <p dangerouslySetInnerHTML={{__html: directorName}}></p>
                  <p dangerouslySetInnerHTML={{__html: directorTitle}}></p>
                </div>
              </div>
            </div>
          }
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <EmailFooterIcons className="to-director-modal__email-footer-icons" />
        {
          sent === false && 
          <Button
            content={buttonText}
            onClick={() => {
              setSent(true);       
              saveAnswer();
            }}
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

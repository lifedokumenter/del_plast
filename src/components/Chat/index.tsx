import React from 'react';
import { Segment, Form, TextArea, Button, Icon } from 'semantic-ui-react';

import './index.less';

interface Props {
  answers?:  any[] | null,
  message?: string | null,
  onSubmitted?: ()=>void,
}

const Chat = ({message= '', answers = [], onSubmitted=()=>{} }: Props) => {

  const [showUserMesssage, setShowUserMessage] = React.useState<boolean>(false);
  const [showMessages, setShowMessages] = React.useState<boolean>(false);

  const prevMessagRef = React.useRef<string | null>('');
  const prevMessage = prevMessagRef.current;

  React.useEffect(() => {
    prevMessagRef.current = message;
    if (message !== prevMessage) {
      setShowMessages(false);
      setShowUserMessage(false);
    }
  }, [message, prevMessage]);


  const submitMessage = () => {
    setShowUserMessage(true);
    onSubmitted();

    const timer = setTimeout(() => {
      setShowMessages(true);
    }, 1000);
    return () => clearTimeout(timer);
  }

  return (
    <div className="chat">
      <Segment className="chat-wrapper">
        <div>
          <div className="chat-messages"> 
            {
              showUserMesssage && message !== '' &&
              <div className="chat-messages-user">
                <Icon name="user" size="large"></Icon>
                <p>{message}</p>
              </div>
            }
            {
              showMessages && answers && answers.map( (answer, idx) => {
                return <div key={idx} className="chat-messages-message"> 
                  {/* <Icon name="user" size="large"></Icon> */}
                  <div className="chat-messages-message-user-icon"><p>{answer.initials}</p></div>
                  <p>{answer.message}</p>
                </div>
              })
            }
          </div>
        </div>
        <Form>
          <TextArea value={showUserMesssage ? '' : message || ''} disabled placeholder="Besked..."></TextArea>     
          <Button className={showUserMesssage ? '' : 'pulsate'} primary icon onClick={() => {submitMessage()}}>
            <Icon name='angle right' />
          </Button>
        </Form>
      </Segment>
    </div>
  )

}

export default Chat;
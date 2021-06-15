import React from 'react';
import { Segment, Form, TextArea, Button, Icon } from 'semantic-ui-react';

import './Chat.less';

interface Props {
  messages: string[]
}

const Chat = ({messages = []}: Props) => {

  const [showMessages, setShowMessages] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>('');
  const [messageInput, setMessageInput] = React.useState<string>('');

  const submitMessage = () => {
    setShowMessages(false);
    setMessage(messageInput);

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
              message && message !== '' &&
              <div className="chat-messages-user">
                <Icon name="user" size="large"></Icon>
                <p>{message}</p>
              </div>
            }
            {
              showMessages && messages.map( (text, idx) => {
                return <div key={idx} className="chat-messages-message"> 
                  <Icon name="user" size="large"></Icon>
                  <p>{text}</p>
                </div>
              })
            }
          </div>
        </div>
        <Form>
          <TextArea 
            placeholder='Besked...' 
            onChange={ev => {setMessageInput(ev.target.value)}}
          />
          <Button primary icon onClick={() => {submitMessage()}}>
            <Icon name='angle right' />
          </Button>
        </Form>
      </Segment>
    </div>
  )

}

export default Chat;
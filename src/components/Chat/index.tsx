import React from 'react';
import { Segment, Form, TextArea, Button, Icon } from 'semantic-ui-react';
import { useChat } from '../../contexts/chatContext';
import { ChatMessage } from '../../interfaces/ChatMessage';
import { ReactComponent as PersonIcon } from '../../images/person.svg';


import './index.less';

interface Props {
  onSubmitted?: ()=>void,
}

const Chat = ({ onSubmitted }: Props) => {

  const { messages, addPendingMessages, pendingMessages } = useChat();
  const [userMessage, setUserMessage] = React.useState<ChatMessage | undefined>(pendingMessages?.find( m => m.isUser === true));

  React.useEffect(() => {
    setUserMessage(pendingMessages?.find( m => m.isUser === true));
  }, [pendingMessages]);

  return (
    <div className="chat">
      <Segment className="chat-wrapper">
        <div>
          <div className="chat-messages"> 
            {
              messages && messages.map( (message: ChatMessage, index: number) => (
                <div key={index} className={message.isUser ? 'chat-messages__user' : 'chat-messages__message'}> 
                  <div className="chat-messages__user-icon">
                    <PersonIcon />
                  </div>
                  <div className="chat-messages__bubble">
                    <p>{message.initials}</p>
                    <p>{message.message}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <Form>
          <TextArea value={userMessage?.message || ''} disabled placeholder="Besked..."></TextArea>     
          <Button className={userMessage?.message?.length ? 'pulsate' : ''} primary icon onClick={() => { addPendingMessages() }}>
            <Icon name='angle right' />
          </Button>
        </Form>
      </Segment>
    </div>
  )

}

Chat.defaultProps = {
  onSubmitted: () => {}
}

export default Chat;
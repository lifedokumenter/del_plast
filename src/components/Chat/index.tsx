import React from 'react';
import { Segment, Form, TextArea, Button, Icon } from 'semantic-ui-react';
import { useChat } from '../../contexts/chatContext';
import { ChatMessage } from '../../interfaces/ChatMessage';
import { ReactComponent as PersonIcon } from '../../images/person.svg';
import { ReactComponent as CallIcon } from '../../images/call.svg';
import { ReactComponent as VideoIcon } from '../../images/video.svg';
import { ReactComponent as MoreIcon } from '../../images/more.svg';

import './index.less';
import ChatEllipsisLoader from './ChatEllipsisLoader';

interface Props {
  title: string;
  onSubmitted: ()=>void,
}

const Chat = ({ title, onSubmitted }: Props) => {

  const { messages, addPendingMessages, pendingMessages, setPendingMessages, isChatLoading } = useChat();
  const [userMessage, setUserMessage] = React.useState<ChatMessage | undefined>(pendingMessages?.find( m => m.isUser === true));

  const messagesContainerRef = React.useRef<null|HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesContainerRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    setUserMessage(pendingMessages?.find( m => m.isUser === true));
  }, [pendingMessages]);
  
  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const submit = () => {
    addPendingMessages();
    onSubmitted();
    setPendingMessages([]);
  }

  const messageAvatar = (type: string | undefined) => {
    let src:string | null = null;
    if (type === 'communication') {
      src = './images/plast_communication_user.jpg'
    } else if (type === 'economy') {
      src = './images/plast_economy_user.jpg'
    } else if (type === 'environment') {
      src = './images/plast_environment_user.jpg'
    }
    
    if (src) {
      return <img src={src} width="100%" alt="avatar" />
    } 

    return <PersonIcon />
  }

  return (
    <div className="chat">
      <Segment className="chat__wrapper">
        <div>
          <div className="chat__navbar">
            <p dangerouslySetInnerHTML={{__html: title || ''}} />
            <div className="chat__navbar__icons">
              <CallIcon />
              <VideoIcon />
              <MoreIcon />
            </div>
          </div>
          <div className="chat__messages"> 
            {
              messages && messages.map( (message: ChatMessage, index: number) => (
                <div  ref={index === messages.length - 1 ? messagesContainerRef : null} key={index} className={`chat__messages__message ${message?.isUser ? 'chat__messages__message--user' : ''}`}> 
                  {
                    !message?.isUser &&
                    <div className="chat__messages__message__user-icon">
                      {
                        messageAvatar(message?.type)
                      }
                    </div>
                  }
                  <div className="chat__messages__message__bubble">
                    <p dangerouslySetInnerHTML={{__html: message?.initials || ''}}/>
                    <p dangerouslySetInnerHTML={{__html: message?.message || ''}}/>
                  </div>
                </div>
              ))
            } 
            {
              isChatLoading &&
              <div className="chat__messages__message">
                <div className="chat__messages__message__bubble">
                  <ChatEllipsisLoader />
                </div>
              </div>
            }
          </div>
        </div>
        <Form>
          <TextArea value={userMessage?.message || ''} disabled placeholder="Besked..."></TextArea>     
          <Button className={userMessage?.message?.length ? 'pulsate' : ''} primary icon onClick={submit}>
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
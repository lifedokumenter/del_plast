import React from 'react';
import { ChatMessage } from '../interfaces/ChatMessage';

interface ChatProviderProps {
  children: React.ReactNode;
}

export interface ChatContextApi {
  messages: Array<ChatMessage>;
  addPendingMessages: (appendMessages?: Array<ChatMessage>) => void;
  setPendingMessages: (messages: Array<ChatMessage>) => void;
  pendingMessages: Array<ChatMessage>;
  isChatLoading: boolean;
}

const ChatContext = React.createContext({} as ChatContextApi)

export const ChatProvider = ({ children }: ChatProviderProps) => {

  const [messages, setMessages] = React.useState<Array<ChatMessage>>([]);
  const [pendingMessages, setPendingMessages] = React.useState<Array<ChatMessage>>([]);
  const [isChatLoading, setIsChatLoading] = React.useState<boolean>(false);

  const addPendingMessages = (appendMessages?: Array<ChatMessage>) => {
    const addMessages = appendMessages || pendingMessages || [];
    if (addMessages.length) {
      // append user messages
      const userMessages: Array<ChatMessage> = addMessages.filter( m => m.isUser === true);
      let newMessages: Array<ChatMessage> = [...messages, ...userMessages];
      setMessages(newMessages);
      setIsChatLoading(true);
      
      // append answers
      const answers: Array<ChatMessage> = addMessages.filter( m => !m.hasOwnProperty('isUser') || m.isUser === false);
      appendAnswers(answers, newMessages);
    }
  }

  const appendAnswers = (answers: Array<ChatMessage>, messages: Array<ChatMessage>) => {
    const rand = (Math.floor(Math.random() * 5) + 1)*1000;
    setTimeout(() => {
      const newMessages: Array<ChatMessage> = [...messages, {...answers[0]}];
      setMessages(newMessages);
      answers.splice(0,1);
      if (answers.length) {
        appendAnswers(answers, newMessages);
      } else {
        setIsChatLoading(false);
      }
    }, rand);
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        addPendingMessages,
        pendingMessages,
        setPendingMessages,
        isChatLoading
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

ChatProvider.defaultProps = {};

export const useChat = (): ChatContextApi => React.useContext(ChatContext);

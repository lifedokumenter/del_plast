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
}

const ChatContext = React.createContext({} as ChatContextApi)

export const ChatProvider = ({ children }: ChatProviderProps) => {

  const [messages, setMessages] = React.useState<Array<ChatMessage>>([]);
  const [pendingMessages, setPendingMessages] = React.useState<Array<ChatMessage>>([]);
  

  const addPendingMessages = (appendMessages?: Array<ChatMessage>) => {
    const addMessages = appendMessages || pendingMessages;
    if (addMessages?.length) {
      const userMessageIdx = addMessages.findIndex( m => m.isUser === true);
      const rand = (Math.floor(Math.random() * 3) + 1)*1000;
      const userMessage: Array<ChatMessage> = [];
      if (userMessageIdx > -1) {
        userMessage.push(addMessages[userMessageIdx])
        setMessages([...messages, ...userMessage]);
        addMessages.splice(userMessageIdx, 1);
      }
      setTimeout(() => {
        setMessages([...messages, ...userMessage,  ...addMessages]);
      }, rand);
    }
  }

  return (
    <ChatContext.Provider
      value={{
        messages,
        addPendingMessages,
        pendingMessages,
        setPendingMessages
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

ChatProvider.defaultProps = {};

export const useChat = (): ChatContextApi => React.useContext(ChatContext);

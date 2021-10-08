import React from 'react';
import { ChatMessage } from '../interfaces/ChatMessage';

interface ChatProviderProps {
  children: React.ReactNode;
}

export interface ChatContextApi {
  messages: Array<ChatMessage>;
  addPendingMessages: () => void;
  setPendingMessages: (messages: Array<ChatMessage>) => void;
  pendingMessages: Array<ChatMessage>;
}

const ChatContext = React.createContext({} as ChatContextApi)

export const ChatProvider = ({ children }: ChatProviderProps) => {

  const [messages, setMessages] = React.useState<Array<ChatMessage>>([]);
  const [pendingMessages, setPendingMessages] = React.useState<Array<ChatMessage>>([]);

  const addPendingMessages = () => {
    const userMessage = pendingMessages[0];
    const rand = (Math.floor(Math.random() * 4) + 1)*1000;
    setMessages([...messages, userMessage]);
    const answers = pendingMessages.slice(1, pendingMessages.length);
    setTimeout(() => {
      setMessages([...messages, userMessage, ...answers]);
    }, rand)
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

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
    console.log('setting messages', pendingMessages)
    setMessages([...messages, ...pendingMessages]);
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

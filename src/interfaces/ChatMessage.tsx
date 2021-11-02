export interface ChatMessage {
  initials: string;
  message: string;
  isUser?: boolean;
  type?: string;
}
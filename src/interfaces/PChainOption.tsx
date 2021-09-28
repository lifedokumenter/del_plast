import { ChatMessage } from "./ChatMessage";

export interface PChainOptionMetadata {
  co2Score: number,
  bioScore: number,
  economyScore: number
}

export interface PChainOption {
  id: string,
  title?: string,
  description?: string,
  imageUrl?: string,
  subCategories?: Array<PChainOption>,
  metadata?: PChainOptionMetadata,
  chatMessages?: Array<ChatMessage>,
  type?: string,
}

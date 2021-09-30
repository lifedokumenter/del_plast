import { ChatMessage } from "./ChatMessage";

export interface PChainOptionMetadata {
  co2Score: number,
  bioScore: number,
  economyScore: number
}

export interface DisabledPChainOption {
  id1: string,
  id2: string,
  description: string
}

export interface PChainOption {
  id: string,
  title?: string,
  description?: string,
  imageUrl?: string,
  subCategories?: Array<PChainOption>,
  metadata?: PChainOptionMetadata,
  chatMessages?: Array<ChatMessage>,
  iconType?: string,
  disablesOptions?: Array<DisabledPChainOption>
}

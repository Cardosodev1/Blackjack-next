import { Card } from "./card.type";

export interface DeckResponse {
    succeess: boolean
    deck_id: string
    shuffled: boolean
    remaining: number
}

export interface DrawCardResponse {
    success: boolean;
    deck_id: string;
    cards: Card[];
    remaining: number;
  } 
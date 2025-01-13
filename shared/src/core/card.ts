import { v4 as uuidv4 } from 'uuid';
import { Rank } from './rank';
import { Suit } from './suit';

interface ICard {
  id: string;
  rank: Rank;
  suit: Suit;
}

export class Card implements ICard {
  public readonly id: string;
  public readonly rank: Rank;
  public readonly suit: Suit;

  constructor(rank: Rank, suit: Suit) {
    this.id = uuidv4();
    this.rank = rank;
    this.suit = suit;
  }

  getRank(): Rank {
    return this.rank;
  }

  getSuit(): Suit {
    return this.suit;
  }
}

export class ABCard extends Card {
  public played: boolean = false;
  private discard: boolean = false;
  public faceUp: boolean;

  constructor(_rank?: Rank | null, _suit?: Suit | null, faceUp: boolean = true) {
    const rank = _rank ?? Rank.getRandom();
    const suit = _suit ?? Suit.getRandom();
    super(rank, suit);
    this.faceUp = faceUp;
  }

  getPlayed(): boolean {
    return this.played;
  }

  getDiscard(): boolean {
    return this.discard;
  }

  getRank(): Rank {
    return this.rank;
  }

  getSuit(): Suit {
    return this.suit;
  }

  setPlayed(value: boolean) {
    this.played = value;
  }

  setDiscard(value: boolean) {
    this.discard = value;
  }
}

export class ABCardPreview extends ABCard {
  declare public rank: Rank;
  declare public suit: Suit;

  constructor() {
    super();
  }

  getRank(): Rank {
    return this.rank;
  }

  setRank(value: Rank) {
    this.rank = value;
  }

  getSuit(): Suit {
    return this.suit;
  }

  setSuit(value: Suit) {
    this.suit = value;
  }
}

export type ABCards = ABCard[];

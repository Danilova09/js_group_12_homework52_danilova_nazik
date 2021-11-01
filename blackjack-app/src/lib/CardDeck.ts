let suits = ['diams', 'hearts', 'clubs', 'spades'];
let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

export class Card {
  rank: string;
  suit: string;
  weight: number;
  constructor(rank: string, suit: string) {
    this.rank = rank;
    this.suit = suit;
    this.weight = 5;
  }
  getScore() {
    if(this.rank === '2') {
      this.weight = 2;
    } else if (this.rank === '3') {
      this.weight = 3;
    } else if (this.rank === '4') {
      this.weight = 4;
    } else if (this.rank === '5') {
      this.weight = 5;
    } else if (this.rank === '6') {
      this.weight = 6;
    } else if (this.rank === '7') {
      this.weight = 7;
    } else if (this.rank === '8') {
      this.weight = 8;
    } else if (this.rank === '9') {
      this.weight = 9;
    } else if (this.rank === '10') {
      this.weight = 10;
    } else if (this.rank === 'J' || this.rank === 'Q' || this.rank === 'K') {
      this.weight = 10;
    } else if (this.rank === 'A') {
      this.weight = 11;
    }
  }
}

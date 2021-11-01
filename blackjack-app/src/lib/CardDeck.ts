let suits = ['diams', 'hearts', 'clubs', 'spades'];
let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

export class Card {
  rank: string;
  suit: string;
  constructor(suit: string, rank: string) {
    this.suit = suit;
    this.rank = rank;
  }

  getScore() {
    if(this.rank === '2') {
      return 2;
    } else if (this.rank === '3') {
      return 3;
    } else if (this.rank === '4') {
      return 4;
    } else if (this.rank === '5') {
      return 5;
    } else if (this.rank === '6') {
      return 6;
    } else if (this.rank === '7') {
      return 7;
    } else if (this.rank === '8') {
      return 8;
    } else if (this.rank === '9') {
      return 9;
    } else if (this.rank === '10' || this.rank === 'J' || this.rank === 'Q' || this.rank === 'K') {
      return 10;
    } else if (this.rank === 'A') {
      return 11;
    }
  }

}

type CardOfDeck = {
  suit: string;
  rank: string;
}

class CardDeck {
  deck: CardOfDeck[] = [];
  constructor() {
    this.deck = this._createCards();
  }

  _createCards() {
    for(let suit of suits) {
      for (let rank of ranks) {
        let newCard = new Card(suit, rank);
        this.deck.push(newCard);
      }
    }
    return this.deck;
  }

  _getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getCard() {
    let randomNumber =  this._getRandomInt(1, this.deck.length - 1);
    let card = this.deck.splice(randomNumber, 1);
    return card;
  }

  getCards(howMany: number) {
    let cards = [];
    for (let i = 0; i < howMany; i++) {
      cards.push(this.getCard()[0]);
    }
    return cards;
  }
}

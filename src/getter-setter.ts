export {};

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `${this._secretNumber}`;
  }
}
let card = new MyNumberCard('KEI', 12345);
console.log(card.owner);
console.log(card.debugPrint());
card.secretNumber = 12346;
console.log(card.debugPrint());

// card._owner = 'SASAKI';
// console.log(card._secretNumber);

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
    this.secretNumber = secretNumber;
  }
}
let card = new MyNumberCard('KEI', 12345);
console.log(card.owner);
// card._owner = 'SASAKI';
// console.log(card._secretNumber);

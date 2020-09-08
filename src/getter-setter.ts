export {};

class MyNumberCard {
  private _owner: string;
  secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this.secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }
}

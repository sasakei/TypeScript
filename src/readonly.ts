export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myCard = new VisaCard('KEI');
console.log(myCard.owner);
// myCard.owner = 'けい';

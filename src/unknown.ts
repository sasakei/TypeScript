export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnKnown: unknown = kansu();

let sumAny = numberAny + 10;
// console.log(typeof numberUnKnown);
if (typeof numberUnKnown === 'number') {
  let sumUnKnown = numberUnKnown + 10;
}

export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

// interface Animal {
//   age: number;
//   name: string;
// }

// class Person {
//   constructor(public age: number) {}
// }

// let me: Animal;

// me = new Person(23);

// ⬆︎AnimalにあるnameメンバーがPersonクラスに存在しないため、エラーになる(型の互換性がない)

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;

me = new Person(23, 'Kei');

console.log(me);

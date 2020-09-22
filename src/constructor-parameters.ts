export {};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let Kei = new Person('Kei', 23);
console.log(Kei);

type PersonType = typeof Person;
type Profile = ConstructorParameters<PersonType>;
const profile: Profile = ['Ham', 43];
const ham = new Person(...profile);
console.log(ham);

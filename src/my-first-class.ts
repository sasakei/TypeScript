export {};

class Person {
  name: string;
  age: number;

  //   ⬇︎コンストラクターの戻り値に対応する型は書けない
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

let Kei = new Person('Kei', 23);
console.log(Kei.profile());

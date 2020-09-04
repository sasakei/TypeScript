export {};

class Person {
  name: string;
  protected age: number;
  protected nationality: string;
  // ⬆︎protectedは子クラスからの呼び出しを許容するが、privateは許容しない。

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let Kei = new Android('Kei', 23, 'Japan');
console.log(Kei.profile());

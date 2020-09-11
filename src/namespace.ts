export {};

namespace Japan {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace Euro {
  export class Person {
    constructor(
      public First: string,
      public Middle: string,
      public Last: string
    ) {}
  }
}

const me = new Japan.Tokyo.Person('KEI');
const you = new Japan.Osaka.Person('Chi');
console.log(me);
console.log(you);

const metta = new Euro.Person('Metta', 'World', 'Piece');
console.log(metta);

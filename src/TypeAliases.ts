export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

type Profile = {
  name: string;
  age: number;
};

const example1: Profile = {
  name: 'kei',
  age: 23,
};

type Profile2 = typeof example1;
// ⬆︎定義されたオブジェクトの型推論を代入

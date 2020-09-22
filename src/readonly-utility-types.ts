export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Kei',
  age: 23,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Iwai',
  age: 24,
};

// friend.age++;

type Yomitori<T> = {
  readonly [P in keyof T]: T[P];
};

// ⬆︎Readonlyの中身

export {};

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(1000));
console.log(echo<string>('1000'));
console.log(echo<boolean>(1000 === 1000));

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(100).echo());
console.log(new Mirror<string>('100').echo());
console.log(new Mirror<boolean>(100 === 100).echo());

// ⬆︎引数の型が指定可能になる

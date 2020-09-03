export {};

function double(value: number): number;
function double(value: string): string;

// ⬆︎シグネチャーによって引数に渡ってくる型を指定
// ⬇︎型安全はシグネチャーによって保証されているためany型

function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go'));

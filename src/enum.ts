export {};

enum Months {
  Jan = 1,
  Feb,
  Mar,
  Apr,
  May,
  June,
  JUly,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

console.log(Months.Dec);

// ⬆︎enumで代入される値は0~だが、一つ目の要素に
// 値をオーバーライドすればその値を起点とした連番が振られる

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#000000',
}
console.log(COLORS.RED);

enum COLORS {
  BLACK = '#000000',
}

console.log(COLORS.BLACK);

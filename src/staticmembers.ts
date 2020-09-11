export {};

class Me {
  static isProgrammer: boolean = true;
  static First: string = 'KEI';
  static Last: string = 'SASAKI';

  static work() {
    return `Hi I'm ${this.First}`;
  }
}

console.log(Me.First);
console.log(Me.work());

// ⬆︎クラスから直接(インスタンスを作成せずとも)呼び出せるプロパティ

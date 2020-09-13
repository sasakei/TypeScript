export {};

class Mahotsukai {}
class Souryo {}

class Taro extends Mahotsukai {}

interface Kenja {
  ionazun(): void;
}
interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('イオナズン！');
  }
  kougeki(): void {
    console.log('こうげき！');
  }
}

// クラスの場合複数継承はできないが、
// インターフェイスは複数実装が可能。
// 実装がされていない場合エラーで知らせてくれる。

const jiro = new Jiro();

jiro.ionazun();
jiro.kougeki();

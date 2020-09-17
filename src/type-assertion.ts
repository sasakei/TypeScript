export {};

let name: any = 'Kei';

// let length = (name as string).length;
let length = (<string>name).length;

// length = 'Sasa';
// ⬆︎エラーが起きるので正しくアノテーションされている

console.log(length);

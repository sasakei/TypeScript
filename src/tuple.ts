export {};

let profile = ['Kei', 23];
let profiles: (string | number)[] = ['Kei', 23];
// ⬆︎arrayでは配列の順番までは指定できない

let profiles2: [string, number] = ['Kei', 23];
// profiles2 = [23, 'Kei'];
// ⬆︎配列内の順番まで指定可能

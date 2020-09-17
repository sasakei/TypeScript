export {};

let name = 'Kei' as const;
// name = 'Kekke';

name = 'Kei';

let profile = {
  name: 'Seinen',
  height: 184,
} as const;

// ⬆︎readonlyになる

// profile.name = 'KK';
// profile.height = 188;

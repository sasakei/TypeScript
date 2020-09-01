export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

// type TwoWay = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

// ⬆︎⬇︎同じ処理

type TwoWay = Pitcher1 & Batter1;

const Sasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const Ochiai: Batter1 = {
  battingAverage: 0.367,
};

const Otani: TwoWay = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};

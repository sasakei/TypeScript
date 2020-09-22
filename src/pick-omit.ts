export {};

type Detailedprofile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<Detailedprofile, 'name' | 'weight'>;
type SmallProfile = Omit<Detailedprofile, 'height'>;

// ⬆︎pickは特定の型を抽出し、Omitは特定の型を除外する

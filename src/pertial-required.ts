export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

type PartialType = Partial<Profile>;

// ⬆︎元の型のプロパティをオプショナルに

type RequiredType = Required<Profile>;

// ⬆︎元の型のプロパティを全必須に

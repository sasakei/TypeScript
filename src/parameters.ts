export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('Kei', 23);

type Profile = Parameters<typeof debugProfile>;

const profiles: Profile = ['Mike', 33];
debugProfile(...profiles);

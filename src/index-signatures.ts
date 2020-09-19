export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  age: number;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Kei', age: 23, underTwenty: false };
profile.age >= 20
  ? (profile.underTwenty = false)
  : (profile.underTwenty = true);

profile.nationality = 'Japan';

console.log(profile);

export {};

type ObjectType = {
  name: string;
  age: number;
};

interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectType = {
  name: 'Kei',
  age: 23,
};

let object2: ObjectInterface = {
  name: 'Kei',
  age: 23,
};

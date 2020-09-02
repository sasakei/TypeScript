export {};

let BMI: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi = weight / (height * height);
  if (printable) {
    console.log(bmi);
  }
  return bmi;
};

BMI(1.84, 68, true);

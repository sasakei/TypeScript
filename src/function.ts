export {};

function BMI(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(BMI(1.84, 68));

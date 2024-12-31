let inches = window.prompt("Your height in inches?");
let pounds = window.prompt("Your weight in pounds?");

cm = inches * 2.54;
kg = pounds / 2.2046;

console.log(
  "Your height in cm " + cm.toFixed() + ", your weight in kg " + kg.toFixed()
);

bmi = kg / (cm / 100) ** 2;
console.log("Your BMI is " + bmi.toFixed(2));

//174cm - 68.5
//75 - 165.35

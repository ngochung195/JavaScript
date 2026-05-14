const taxRate = 0.1;
let baseSalary = 5000;
let overTimeHours = 10;
const bonusRate = 1.5;

var finalSalary = baseSalary + (baseSalary * overTimeHours * bonusRate) - (baseSalary * taxRate);
console.log("Lương thực nhận: " + finalSalary);
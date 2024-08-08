const readline = require('readline-sync');

let u_num5 = readline.question("Enter a number: ");

let increased_num = parseInt(u_num5) + 1;
let decreased_num = parseInt(u_num5) - 1;

console.log("Increased by 1... " + increased_num);
console.log("Decreased by 1... " + decreased_num);
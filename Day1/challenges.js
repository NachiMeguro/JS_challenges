/*
Exercise 1: Basic Output
Write a program that prints "Hello, World!" to the console.
*/

let greeting = "Henlo hooman";

console.log(greeting);

/*
Exercise 2: Basic Arithmetic
Create a program that adds two numbers and prints the result.
Write a program that subtracts one number from another and prints the result.
Create a program that multiplies two numbers and prints the result.
Write a program that divides one number by another and prints the result.
*/

let a, b, result;
a = 10;
b = 56;

// Addition

result = a + b;
console.log("a+b=", result);

// Subtraction

result = a - b;
console.log("a-b=", result);

// Multiplification

result = a * b;
console.log("a*b=", result);

// Division

result = a / b;
console.log("a/b=", result);

/*
Exercise 3: Data Types
Declare variables of different data types: string, number, boolean. Print each variable to the console.
Create a program that takes a string, a number, and a boolean as inputs and prints them in a single line.
*/

// String
let string = "Woof Woof";

// Number
let num = 1;

// Boolean
let isTrue = true;

console.log(string);
console.log(num);
console.log(isTrue);

/*
Exercise 4: String Concatenation
Write a program that concatenates two strings and prints the result.
Create a program that concatenates a string and a number, then prints the result.
*/

let string_2 = "Web";
let num_2 = 3.0;

let concat_word = string_2 + num_2;

console.log(concat_word);

/*
Exercise 5: Basic User Input (using prompt)
Write a program that asks the user for their name and then greets them with their name.
Create a program that asks the user for two numbers and then prints the sum of those numbers.
*/

const readline = require('readline-sync');

var u_name = readline.question("What is your name?");
var greeting2 = "Hello!";

console.log(greeting2, u_name);

var u_num1 = readline.question("Enter a number");
var u_num2 = readline.question("Enter another number");

var u_sum = parseInt(u_num1) + parseInt(u_num2);

console.log("The sum of the two numbers you gave is", u_sum);

/*
Exercise 6: Simple Math
Write a program that calculates the area of a rectangle. The program should take the width and height as inputs.
Create a program that calculates the perimeter of a rectangle. The program should take the width and height as inputs.
*/

const readline = require('readline-sync');

let height = readline.question("Enter height: ");
let width = readline.question("Enter width: ");

let space = ( parseInt(height) * parseInt(width));

console.log("The size of the are of the rectangle is... " + space);

/*
Exercise 7: Modulus Operation
Write a program that calculates the remainder of a division between two numbers and prints the result.
*/

const readline = require('readline-sync');

let u_num3 = readline.question("Enter a number: ");
let u_num4 = readline.question("Enter another number: ");

let modulus = parseInt(u_num3) % parseInt(u_num4);

console.log("When " + u_num3 + "is devided by " + u_num4 + ", the modulus is " + modulus);

/*
Exercise 8: Increment and Decrement
Create a program that increments a number by 1 and prints the result.
Write a program that decrements a number by 1 and prints the result.
*/

const readline = require('readline-sync');

let u_num5 = readline.question("Enter a number: ");

let increased_num = parseInt(u_num5) + 1;
let decreased_num = parseInt(u_num5) - 1;

console.log("Increased by 1... " + increased_num);
console.log("Decreased by 1... " + decreased_num);
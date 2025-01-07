//If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
let x = "5" + 2 + 3;
console.log("value of x=",x)
let y= 2 + 6 +"1"
console.log("value of y=",y)
//When to Use var, let, or const?
//1. Always declare variables

//2. Always use const if the value should not be changed

//3. Always use const if the type should not be changed (Arrays and Objects)

//4. Only use let if you can't use const

//5. Only use var if you MUST support old browsers.



//JavaScript identifiers are case-sensitive.

//DATA TYPES

const pi = 3.14;
console.log("value of pi=",pi)//Numbers are written without quotes.


let person = "John Doe";
console.log("Name of  a person=",person)//Strings are written with quotes.


let answer = 'Yes I am!';
console.log(answer)

//variable declaration
//You can declare many variables in one statement.

//Start the statement with let and separate the variables by comma:
let Person = "John Doe", carName = "Volvo", price = 200;



//You cannot re-declare a variable declared with let or const.

//This will not work:

//let carName = "Volvo";
//let carName;    We can't re declare like this
let $$$ = 2;
let $myMoney = 5;//The dollar sign is treated as a letter in JavaScript names.

let _lastName = "Johnson";
let _x = 2;
let _100 = 5;// Javascript uses underscore as letters





  
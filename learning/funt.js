
// Function to compute the product of p1 and p2
function myFunction(p1, p2) 
{
    return p1 * p2;

  }

//A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

//Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

//The parentheses may include parameter names separated by commas:(parameter1, parameter2, ...)

//The code to be executed, by the function, is placed inside curly brackets: {}

// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) 
{
// Function returns the product of a and b
  return a * b;
}
console.log(x)

//OBJECT

// Create an Object
const Person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//Spaces and line breaks are not important. An object initializer can span multiple lines:
// Create an Object
const person = 
{
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  //This example creates an empty JavaScript object, and then adds 4 properties:

// Create an Object
const emp = {};

// Add Properties
emp.firstName = "John";
emp.lastName = "Doe";
emp.age = 50;
emp.eyeColor = "blue";

//An Object is an Unordered Collection of Properties
//Properties are the most important part of JavaScript objects.

//Properties can be changed, added, deleted, and some are read only.

//Deleting Properties

const persons = 
{
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  delete persons.age;

  const per = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };




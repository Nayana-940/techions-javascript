//Object
//A collection of key-value pairs, where keys are usually strings and values can be any data type (including other objects).
//Built-in Object Types:
//Objects: {} (a collection of key-value pairs)
//Arrays: [] (ordered collection of values)
//Dates: new Date() (used for handling date and time)
//Maps: new Map() (stores key-value pairs)
//Sets: new Set() (stores unique values)
//IntArrays/FloatArrays: Typed arrays for numerical values

// Object example
let person = {
    name: "John",
    age: 30
  };
  console.log(person);  // { name: "John", age: 30 }
  
  // Array example
  let fruits = ["apple", "banana", "cherry"];
  console.log(fruits);  // ["apple", "banana", "cherry"]
  
  // Date example
  let today = new Date();
  console.log(today);  // Current date and time
  
  // Map example
  let map = new Map();
  map.set("key1", "value1");
  console.log(map);  // Map { 'key1' => 'value1' }
  
  // Set example
  let set = new Set([1, 2, 3, 3]);
  console.log(set);  // Set { 1, 2, 3 }



  const cars = ["Saab", "Volvo", "BMW"];
  console.log(cars)

  const Person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
  console.log(Person)



// The typeof Operator
//You can use the JavaScript typeof operator to find the type of a JavaScript variable.

//The typeof operator returns the type of a variable or an expression:

typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"

  

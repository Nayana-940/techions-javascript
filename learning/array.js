// JavaScript Arrays and Common Methods Demonstration

// 1. Array Declaration Examples
// Creating an array using literal syntax
const cars = ["Saab", "Volvo", "BMW"];

// Alternate syntax: breaking lines for readability
const car = [
    "Saab",
    "Volvo",
    "BMW"
];

// Initializing an empty array and assigning values
const carrs = [];
carrs[0] = "Saab";
carrs[1] = "Volvo";
carrs[2] = "BMW";

// 2. Basic Array Methods Demonstration
const fruits = ["Apple", "Banana", "Cherry"];

// a. Array Length
console.log("Length of array:", fruits.length); // 3

// b. Convert array to string
console.log("Array as a string:", fruits.toString()); // "Apple,Banana,Cherry"

// c. Accessing element at a specific index
console.log("Element at index 1:", fruits.at(1)); // "Banana"

// d. Joining elements with a separator
console.log("Joined array with '-' :", fruits.join(" - ")); // "Apple - Banana - Cherry"

// e. Removing the last element using pop()
const poppedElement = fruits.pop(); 
console.log("Popped element:", poppedElement); // "Cherry"
console.log("Array after pop:", fruits); // ["Apple", "Banana"]

// f. Adding a new element using push()
fruits.push("Dragonfruit");
console.log("Array after push:", fruits); // ["Apple", "Banana", "Dragonfruit"]

// 3. Array Search Methods Demonstration
const numbers = [1, 2, 3, 4, 2, 5];

// a. Finding the first occurrence of an element using indexOf()
const firstIndex = numbers.indexOf(2);
console.log("First index of 2:", firstIndex); // 1

// b. Finding the last occurrence of an element using lastIndexOf()
const lastIndex = numbers.lastIndexOf(2);
console.log("Last index of 2:", lastIndex); // 4

// c. Checking if an element exists using includes()
const hasThree = numbers.includes(3);
const hasTen = numbers.includes(10);
console.log("Does the array include 3?", hasThree); // true
console.log("Does the array include 10?", hasTen); // false




// 1. Alphabetic Sort
let names = ["Charlie", "Alice", "Bob"];
console.log("Original Array:", names);
names.sort(); // Alphabetically sorts the array
console.log("Alphabetically Sorted:", names);

// 2. Array sort()
//let numbers = [10, 5, 20];
console.log("\nOriginal Numbers:", numbers);
numbers.sort((a, b) => a - b); // Sorts numerically in ascending order
console.log("Sorted Numbers (Ascending):", numbers);

// 3. Array reverse()
let arr = [1, 2, 3];
console.log("\nOriginal Array:", arr);
arr.reverse(); // Reverses the array in place
console.log("Reversed Array:", arr);

// 4. Array toSorted()
let unsorted = [7, 4, 2];
console.log("\nOriginal Array:", unsorted);
let sortedCopy = unsorted.toSorted(); // Returns a sorted copy
console.log("Sorted Copy (toSorted):", sortedCopy);
console.log("Original Array Unchanged:", unsorted);

// 5. Array toReversed()
let toReverse = [9, 8, 7];
console.log("\nOriginal Array:", toReverse);
let reversedCopy = toReverse.toReversed(); // Returns a reversed copy
console.log("Reversed Copy (toReversed):", reversedCopy);
console.log("Original Array Unchanged:", toReverse);

// 6. Sorting Objects
let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 }
];
console.log("\nOriginal Object Array:", people);
people.sort((a, b) => a.age - b.age); // Sort objects by 'age' property
console.log("Sorted by Age:", people);


//example

let agepeople = [35,12,45,13,23]
console.log("orginal array:", agepeople);
agepeople.sort((a,b) => a - b);
console.log("Sorted array:", agepeople);
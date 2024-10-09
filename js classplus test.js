// // 01. Write a function that takes a numerical score (0-100) as an argument and returns a letter grade (A, B, C, D, or F) based on the standard grading scale.


function numerical(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}
console.log(numerical(72))

// 02. Odd Numbers with while Loop: Use a while loop to print all odd numbers from 1 to 50.

let number = 1;

while (number <= 50) {
    if (number % 2 !== 0) {
        console.log(number);
    }
    number++;
}


// 03. Array Methods: What will the following code output?
// javascript
// Copy code in
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(num => num * 2)
// console.log(doubled);
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2)
console.log(doubled);

output=[2,4,6,8,10];

// String Methods: How can you check if a string contains a specific substring? Provide an example using the string "Hello, World!".


let str = "Hello, World!";
let containsWorld = str.includes("World");

console.log(containsWorld);     

// Objects: How do you add a new property to an existing object? Provide an example object and show how to add a property called age.


let person = {
    name: "harshit",
    address: "rohini",
  };
  person.age=20;
  console.log(person.age);
  
//   Functions: Write a function called sum that takes two parameters and returns their sum. What will sum(5, 10) return?

function sum(a, b) {
    return a + b;
  }
  let result = sum(5, 10);
console.log(result); 

    

//   this Keyword: Explain how the this keyword behaves in a method of an object. Provide an example using an object that has a method
let person1={
    name: "harshit",
    age: 20,
    address:"rohini",
    task: function() {
        console.log(this.name);
        
   
    }
  };
  person1.task();
  
 
//  Function Constructor: How do you create an object using a function constructor? Provide an example of a constructor function called Car that initializes make and model properties.

function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  let car = new Car("suzuki", "swift");
  let car1 = new Car("Honda", "Civic");
  console.log(car);
  console.log(car1);
  
 
//   Fibonacci Function: Write a function that returns the nth Fibonacci number. For example, if the input is 5, the output should be 5 (0, 1, 1, 2, 3, 5).
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
  
    let a = 0, 
    b = 1, next;
  
    for (let i = 2; i <= n; i++) {
      next = a + b;
      a = b;
      b = next;
    }
  
    return b;
  }
  console.log(fibonacci(5)); 
  


// given an array, the task is to cyclically rotate the array clockwise by one time.
// Examples:
// Input: arr[] = {1, 2, 3, 4, 5}
// Output: arr[] = {5, 1, 2, 3, 4}
// Input: arr[] = {2, 3, 4, 5, 1}
// Output: {1, 2, 3, 4, 5}























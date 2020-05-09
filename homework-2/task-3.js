"use stricts";
// //=======================1===============
// const toPassTests = function () {
//       console.log(
//         "Прежде, чем выполнить это задание у тебя должно быть сдано пять тестов!"
//       );
//     };
//     toPassTests();
//     const toPassTests2 = () =>
//       console.log(
//         "Прежде чем, как выполнить это задание у тебя должно быть сдано пять тестов!"
//       );
//     toPassTests2();
// //========================2===============
// // FUNCTION EXPRESSION
// let age;
// const checkAge = function (age) {
//   age = +prompt("Enter your age please");
//   if (age >= 18) {
//     return alert("Here you are! You are got access!");
//   } else {
//     return alert("Sorry, you can`t to get access");
//   }
// };
// // FUNCTION ARROW
// const checkAge2 = (age) =>
//   (age = +prompt("") >= 18)
//     ? alert("Here you are! You are got access!")
//     : alert("Sorry, you can`t to get access");
// checkAge2();

// //========================3===============

// // function EXPRESSION 
// const toGetCost = function(message, pricePerWord) {
//   let words = message.split(" ");
//   let wordsCount = words.length;
//   return (pricePerWord *= wordsCount);
// };

// //arrow function 
// const toGetCost2 = (message, pricePerWord) => (pricePerWord *= message.split(" ").length);

// console.log(toGetCost("To be, or not to be, that is the question", 10)); // 100
// console.log(toGetCost("Whether 'tis nobler in the mind to suffer", 20)); // 160
// console.log(toGetCost("The slings and arrows of outrageous fortune,", 40)); // 280
// console.log(toGetCost("Or to take arms against a sea of troubles", 20)); // 180

//  //========================4===============

// //FUNCTION EXPRESSION
// const logItems = function(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// };

//  logItems([
//       "Wolverine",
//       "Thor",
//       "Iron Man",
//       "Deadpool",
//       "Nick Fury",
//       "Colossus",
//     ]);
// logItems([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

//  //========================5===============

// // FUNCTION EXPRESSION
// const checkTheWord = function(message) {
//   let msg = message.toLowerCase();
//   if (msg.includes("great") || msg.includes("know")) {
//     return true;
//   }
//   return false;
// };
// //  ARROW FUNCTION
// const checkTheWor2 = message =>
//   message.toLowerCase().includes("great") ||
//   message.toLowerCase().includes("know")
//     ? true
//     : false;

// console.log(checkTheWord("Than fly to others that we know not of?")); // true
// console.log(checkTheWord("Thus conscience does make cowards of us all")); // false
// console.log(checkTheWord("And enterprises of great pitch and moment")); // true
// console.log(checkTheWord("And lose the name of action")); // false

//  //========================6===============

// const countTestsScore = function() {
//       let totalSum = 0;
//       for (const argument of arguments) {
//         totalSum += argument;
//         console.log("тот", totalSum);
//       }
//       return console.log("тот", totalSum);
//     };

// countTestsScore(16, 22, 23); // 61
// countTestsScore(15, 20, 22, 20); // 77
// countTestsScore(14, 19, 21, 20, 23); // 97

// //========================7===============

// const myNewArrowFunction = (...args) => console.log(args);

// myNewArrowFunction(1, 2, 3); // [1, 2, 3]
// myNewArrowFunction(100, 200, 300, 400, 500); // [100, 200, 300, 400, 500]

// myNewArrowFunction("Js", "Python", "Java", "PHP", "C++"); // ["Js", "Python", "Java", "PHP", "C++"]

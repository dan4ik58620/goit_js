"use stricts";

// // // ============== 1 =========================================

// const authors = ["William Shakespeare","Guy de Maupassant","Dante Alighieri","Mikhail Bulgakov","Albert Camu","Erich Maria Remarque"];

// authors.push("Honore de Balzac", "Miguel de Cervantes", "Anton Chekhov");
// authors.unshift("Charles Dickens", "Edgar Allan Poe", "Gabriel Garcia Marquez");

// console.log(authors);//12

// // // ============== 2 =========================================

// const scores = [12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42]

// scores.shift();
// scores.shift();

// scores.pop();
// scores.pop();
// scores.pop();
// console.log(scores);

// // // ============== 3 =========================================


// const result = [12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42]

// const removeFromStart = scores.splice(0, 3);

// const removeFromEnd = scores.splice(9, 3);

// console.log(removeFromStart);
// console.log(removeFromEnd);
// console.log(result);

// // // ============== 4 =========================================

// const partOfResults = [5, 17, 3, 4, 98, 67, 532, 611];

// // // ============== 5 =========================================

// const doubleResults = [5, 17, 3, 4, 98, 67, 532, 611];

// // // ============== 6 =========================================

// const evenResults = [532, 98, 4,];

// const oddResults =[611, 67, 17, 5, 3];

// console.log(evenResults);
// console.log(oddResults);

// // // ============== 7 =========================================

// const AllResults = evenResults.concat(oddResults);
// console.log("AllResults", AllResults);

// let includesOne = [];

// for (let i = 0; i < AllResults.length; i += 1) {
//  let item = AllResults[i] + "";
//  console.log(item);
//   if (item.includes(1))
//   includesOne.push(+item);
// }
// console.log("includesOne", includesOne);

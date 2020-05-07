"use strict"
///Императивный код.....

//пример иперативного  

// const array = [1, 2, 4, 8, 27, 23, 21];
// const filterArray = [];

// for (let i = 0; i < array.length; i +=1) {
//     if (array[i] > 3) {
//         filterArray.push(array[i]);
//     }
// }
// console.log("impertive", filterArray);

// const filteredNumber = array.filter((item) =>
// {
//     return item > 3;
// });
// console.log("declarative", filteredNumber);

// const dirtyMultiply = (arr, value) => {
//     for (let j = 0; j < arr.length; j +=1) {
//         arr[j] *= value;
//     }
// };
// console.log("исходный масив", array);
// dirtyMultiply(array, 5);
// console.log("измененный исходный масив",array);

// const cleanMultiply = (arr, value) => {
//     const result = [];
//     for (let k = 0; k < arr.length; k += 1) {
//         result.push(arr[k] * value);
//     }
// return console.log("ретерн", result);
// };
// console.log("исходный масив", array);
// cleanMultiply(array, 5)
// console.log("не изменившыйся исходный мас", array);

// const arrNamber = [1, 4, 3, 14, 16, 2, 90]

// for (let i = 0; i < arrNamber.length; i += 1) {
//     console.log("for",arrNamber[i]);
// }

// arrNamber.forEach((el) => console.log("forEach", el));

// // arrNamber((el,x) => console.log(`forEach: index ${x}, value ${}` el))

// const tests = ["test-1", "test-2", "test-3", "test-4", "test-5", "test-6"];
// tests.forEach((test) => console.log(test));


// console.log("исходный массив", arrNamber);

// const doubleNambers = arrNamber.map((num) => num * 2);
// console.log("map:", doubleNambers);
// console.log("исходный массив", arrNamber);

// //////example 2

// const users = [
//     { name: "jack", isActive: true },
//     { name: "john", isActive: false },
//     { name: "Susan", isActive: true },
//   ];

//   const names = users.map((user) => user.name);
//   console.log("map:", names);
  
//   console.log("исходник", arrNamber)

//   const filteredArray = arrNamber.filter((el) => el > 10);
//   console.log("filter-1:", filteredArray);
  
//   const filteredArray1 = arrNamber.filter((num) => num < 5);
//   console.log("filte-2:", filteredArray1);
  
//   const filteredArray2 = arrNamber.filter((num) => num === 5);
//   console.log("filter-3:", filteredArray2);

 ///// example 2

// Для каждого элемента коллекции (user) проверим поле isActive.
// Если оно true, то текущий элемент (user) будет записан в результирующий массив.

// const activeUsers = users.filter((user) => user.isActive === true);

// const activeUsers = users.filter((user) => user.isActive);
// console.log("filter: active", activeUsers);

// const inActiveUsers = users.filter((user) => user.isActive !== true);
// const inActiveUsers = users.filter((user) => user.isActive === false);

// const inActiveUsers = users.filter((user) => !user.isActive);

// console.log("filter: inactive", inActiveUsers);


// const newArr = [1, 2, 3, 2, 1];

// const nextToThree = newArr.find((el) => el > 3);
// console.log("find:", nextToThree); // undefined

// const beforeThree = newArr.find((num) => num < 2);
// console.log("find:", beforeThree); // 1

// const five = newArr.find((num) => num === 5);
// console.log("find:", five); // undefined


// const newUsers = [
//     { id: "000", name: "Mango", isActive: true },
//     { id: "001", name: "Poly", isActive: false },
//     { id: "002", name: "Ajax", isActive: true },
//     { id: "003", name: "Chelsey", isActive: false },
//   ];
  
//   const user = newUsers.find((el) => el.id === "002");
//   console.log(user);

//   const getUserById = (array, id_value) => array.find((el) => el.id === id_value)

//   console.log(getUserById(newUsers, "003")); // {id: "003", name: "Chelsey", isActive: false}
//   console.log(getUserById(newUsers, "01"));


// const sumNums = [8, 14, 23, 43, 2];
// const isBig = (val) => val >= 10;
// console.log(sumNums.every(isBig)); // false
// console.log(sumNums.some(isBig)); // true

// const isBig1 = (val) => val >= 1;
// console.log(sumNums.every(isBig1)); // true
// console.log(sumNums.some(isBig1)); // true

// const isBig2 = (val) => val >= 501;
// console.log(sumNums.every(isBig2)); // false
// console.log(sumNums.some(isBig2)); // false

// // every ==> true, if all elements === true
// // some ==> true, if only one element === true


// const fruits = [
//     { name: "apples", amount: 3 }, // true
//     { name: "bananas", amount: 10 }, // true
//     { name: "oranges", amount: 1 }, // true
//   ];
  
//    const allAvailble = fruits.every((el) => el.amount > 0);
//    console.log(allAvailble);

//    const anyAvailble = fruits.some((sum) => sum.amount > 0);
//    console.log(anyAvailble);
       
//  console.log("initial array", sumNums);
//  const newSum = sumNums.reduce((acc, el) => acc + el, 1000);
 
//  console.log("acc", newSum);

// let total = 0;

// for (let el of sumNums) {
//     total +=el;
// }

// console.log(total);

// const tweets = [
//     // 0
//     { id: "000", likes: 5, tags: ["js", "nodejs"] }, // 5
//     { id: "001", likes: 2, tags: ["html", "css"] }, // 7
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] }, // 24
//     { id: "003", likes: 8, tags: ["css", "react"] }, // 32
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] }, // 32
//   ];
  
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes);

// const countLikes = (arr) => arr.reduce((acc, el) => acc + el.likes, 0);

// const getTags = (array) =>
//   array.reduce((acc, elem) => {
//     acc.push(...elem.tags);
//     return acc;
//   }, []);

// const tags = getTags(tweets);
// console.log(tags);

// const getTagStats = (acc, tag) => {
//       if (!acc.hasOwnProperty(tag)) {
//         acc[tag] = 0;
//       } 
//       acc[tag] += 1;
//       return acc;
//     };

//     const countTags = (arr) => arr.reduce(getTagStats, {});

//     const tagCount = countTags(tags);
//     console.log(tagCount);
    
//     const alpha = [1, 3, 5, 7, 4, 8, 2, 6];

//     console.log("before sort:", alpha);
//     console.log("after sort", alpha.sort());
    
//     const clients = ["Jane", "Jack", "Cecile", "Arlo", "Susan"];
//     console.log("before sort:", clients);
//     console.log("after sort", clients.sort());






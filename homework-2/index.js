"use strict";
// ============== занятие 1 ========
// МАССИВЫ

// const arr = [];
// console.log(arr);

// const students = ["Den", "Nick", "Dave", "Helen"];
// console.log(students); // ["Den", "Nick", "Dave", "Helen"]

// // Доступ к элементам
// console.log(students[0]); // Den
// console.log(students[1]); // Nick
// console.log(students[2]); // Dave
// console.log(students[3]); // Helen
// console.log(students[4]); // undefined

// Переопределение
// замена
// students[0] = "Roy";
// console.log(students[0]); // Roy
// console.log(students); //  ["Roy", "Nick", "Dave", "Helen"]

// добавление
// students[4] = "Mary";
// console.log(students[4]); // Mary
// console.log(students); //  ["Roy", "Nick", "Dave", "Helen", "Mary"]

// длина массива
// текущее количество элементов
// console.log(students.length); // 5

// // // добавить элемент/ы
// students.length = 10;
// console.log(students.length); // 10
// console.log(students); //  ["Roy", "Nick", "Dave", "Helen", "Mary", empty]
// console.log(students[5]); // undefined
// console.log(students[6]); // undefined
// console.log(students[7]); // undefined

// // убрать элемент/ы
// students.length = 4;
// console.log(students.length);
// console.log(students); //  ["Roy", "Nick", "Dave", "Helen"]

// // итерация по массиву

// // перебор массива
// for (let i = 1; i < students.length; i += 2) {
//   console.log("students item: ", students[i]);
// }

// // заполнение данными
// for (let i = 0; i <= 6; i += 2) {
//   students.push(`The best student - ${i}`);
// }
// console.log("students list: ", students); //  students list: ["Roy", "Nick", "Dave", "Helen", "student-0", "student-1", "student-2"]
// console.log(students.length);

// // FOR...OF альтернатива циклу FOR, если не нужен счетчик
// // по массиву
// for (const student of students) {
//   console.log(student);
// }

// const house = ["flat-1", "flat-2", "flat-3", "flat-4", "flat-5"];
// for (const aFlat of house) {
//   console.log(aFlat);
// }

// const week = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// for (const aDay of week) {
//   console.log(aDay);
// }

// // по строке
// const name = "Aleksandra is a teacher!";
// console.log(name);

// for (const character of name) {
//   console.log(character);
// }

// BREAK & CONTINUE
// // найти совпадение или не совпадение и вывести сообщение об этом
// let studentName;
// console.log("имя студента", studentName);
// // studentName = prompt("Enter your name please");
// const studentsNew = [
//   "Roy",
//   "Nick",
//   "Dave",
//   "Helen",
//   "Mary",
//   "Sarah",
//   "Charly",
//   "Bob"
// ];
// console.log("список студентов", studentsNew);

// const studentsNotNew = [
//   "Roy",
//   "Nick",
//   "Dave",
//   "Dick",
//   "Mary",
//   "Olga",
//   "Charly",
//   "Bob"
// ];
// studentName = studentsNotNew[Math.floor(studentsNotNew.length * Math.random())];

// console.log("имя студента", studentName);

// let message;

// for (const student of studentsNew) {
//   if (student === studentName) {
//     message = "A student with this name already is in the database";
//     break;
//   }
//   message = "Welcome in our database of unique names!";
// }
// console.log(`${studentName}, ${message}`);



// console.log(message);

// ==================== to fixed
// const myCarsList = ["Land Rover", "WV", "Subaru"];
// let myCar = myCarsList[Math.floor(myCarsList.length * Math.random())];
// console.log("моя машина: ", myCar);

// const worldCarsList = [
//   "BMW",
//   "Toyota",
//   "Mersedes",
//   "Porshe",
//   "Audi",
//   "Lexus",
//   "Honda",
//   "Mazda",
//   "Land Rover",
//   "Nissan",
//   "Subaru"
// ];

// let message;

// for (let car of worldCarsList) {
//   //   console.log(car);
//   if (car === myCar) {
//     message = "У меня не было еще такой машины! А жаль...";
//     break;
//   }
//   message = "Оу, у меня такая тачка!";
// }
// console.log(message);
// ==================== to fixed

// continue
// const nums = [1, 5, 13, 45, 467, 99, 3, 23];
// const numMore = 34;

// for (let i = 0; i < nums.length; i += 1) {
//   if (nums[i] < numMore) {
//     continue;
//   }
//   console.log(`This number is more then ${numMore}: ${nums[i]}`);
// }
// const test1 =[ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// const minLevel =12;
// for  (let i =0; i <= test1.length; i +=1) {
//     if (test1[i] < minLevel) {
//         continue;
//     }
//     console.log(`student:`, test1[i])
// }


// // многомерные массивы
// const alPeople = [["girls"]] [["womens"]] [["grannies"]] [["boys"]] [["mans"]] [["grandpass"]]

// const matrix = [
//   [1, 2, 3], // [0]
//   [11, 22, 33], // [1]
//   [111, 222, 333] // [2]
// ];
// console.log(matrix)
// console.log(matrix[0][0]); // 1
// console.log(matrix[0][1]); // 2
// console.log(matrix[0][2]); // 3

// console.log(matrix[1][0]); // 11
// console.log(matrix[1][1]); // 22
// console.log(matrix[1][2]); // 33

// console.log(matrix[2][0]); // 111
// console.log(matrix[2][1]); // 222
// console.log(matrix[2][2]); // 333

// // вложенные циклы для перебора вложенных массивов
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log("Вложенный массив ", matrix[i]);
//   for (let j = 0; j < matrix.length; j += 1) {
//     console.log("Элемент вложенного массива", matrix[i][j]);
//     total += matrix[i][j];
//   }
// }
// console.log(total);


// ============== занятие 2 ========
// присвоение по значению
// let a = 5;
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// a = 10;
// console.log(a); // 10
// console.log(b); // 5

//  let lastName = "Nizhnichenko";
//  let newLastName = lastName;
//  console.log(lastName);
//  console.log(newLastName);

//  lastName = "Boreikina";
//  console.log(lastName);
//  console.log(newLastName);

//  const units = ["alfa","beta","gamma"];
//  const newUnits = units;
//  console.log("units",units);
//  console.log("newUnits",newUnits);

//  units[0] = "1";
//  console.log("units",units);
//  console.log("newUnits",newUnits);


// units.push("delta")
// console.log("units",units);
// console.log("newUnits",newUnits);

//  newUnits.unshift("epsilon");
//  console.log("units",units);
//  console.log("newUnits",newUnits);

// units.pop("")
// console.log("units",units);
// console.log("newUnits",newUnits);

// units.pop("")
// console.log("newUnits",newUnits);
// console.log("units",units);

// units.shift()
// console.log("units",units);
// console.log("newUnits",newUnits);


// console.log(units.join(", "));
// console.log(units.join("X"));
// console.log(units.join("- "));
// console.log(units.join("H "));

// const msg = "Welcome to Konoha";
// console.log(msg.split(" "));
// console.log(msg.split("m"));
// console.log(msg.split(""));

// const msg1 = "Welcome to Konoha";
// console.log(msg1.split(","));

// console.log(units.indexOf("beta")); // 1
// console.log(units.indexOf("b"));// -1

// console.log(msg.indexOf("to"));
// console.log(msg.indexOf("WORLD"));
// console.log(msg.indexOf("world"));
// console.log(msg.indexOf("!"));
// console.log(msg.indexOf("t"));

// const fruit = "apple";
// if (fruit === "apple" || fruit === "strawberry") {
//     console.log("its a red fruit");
// }

// const redFruits = ["apple","strawberry","cherry", "cranberry"];
// const fruit = prompt ("Enter a fruit pls");

// if (redFruits.includes(fruit)) {
//     console.log("its a red fruit");
// } else {
//     console.log("its not a red fruit");
// }

// const numList = [0,1,2,3,4,5,6,7];
// console.log("numList",numList.slice(0,3));
// console.log("numList",numList.slice(1,2));
// console.log("numList",numList.slice(1,5));

// console.log("numList",numList.slice(1));
// console.log("numList",numList.slice(3));
// console.log("numList",numList.slice());
// console.log("numList",numList);

// let spliceArr = numList.splice(0, 2);
// console.log("spliceArr",spliceArr);
// console.log("numList",numList);

// spliceArr = numList.splice(0, 0, 1);
// console.log("spliceArr",spliceArr);
// console.log("numList",numList);

// spliceArr = numList.splice(7, 0, "8", "9");
// console.log("spliceArr",spliceArr);
// console.log("numList",numList);

// spliceArr = numList.splice(3, 0, 9889);
// console.log("spliceArr",spliceArr);
// console.log("numList",numList);

// console.log(numList.splice(9889, 0, "a"));
// console.log("spliceArr",spliceArr);
// console.log("numList",numList);

// console.log(numList.splice(4, 0, "a"));
// console.log("numList",numList);
// [1, 2, 3, 9889, "a", 4, 5, 6, 7, "8", "9"];

// console.log("numList", numList.splice(3, 1,"Js"));
// console.log("numList",numList);
// console.log("numList", numList.splice(3, 3,"Alpha"));
// console.log("numList",numList);
// console.log("numList", numList.splice(3, 3,"BETA", "GAMMA"));
// console.log("numList",numList);

// const arr1 = ["Hello"];
// const arr2 = ["World"];
// const lang = arr1.concat(arr2);
// console.log(lang.join(", "))

// const add = function(a, b, c){
//     return a + b + c;
// };

// const result = add(1, 2, 3);
// console.log(result);

// console.log(add(5, 10, 15));
// console.log(add(299, 14, 121));

// const fn1 = function(){
//     console.log("1 функцыя начала выполнятся");
//     fn2();
// };
// console.log("Продолжение выполнение 1 функцыи после выхода");

// const fn2 = function(){
//     console.log("Выполняется 2 функцыя");
// };
// console.log("Начато выполнение основного кода");
// fn1();
// console.log("Продолжение выполнения основного кода после выхода");

// const count = function(a = 0, b = 10, c = 1) {
//     console.log(`countForm = ${a} , countTo = ${b}, step = ${c}`)
    
//     for ( let i = a ) ;}
  
"use strict";

//============== 1 ====================================
const fruits = ["яблоки","Бананы","Апельсины","груши", "виноград", "персики"];
console.log(fruits);
console.log(fruits[1]);

//============== 2 ====================================

const test1 = [ 4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12]
const score1 = 13;
for  (let i = 0; i <= test1.length; i += 1) {
         if (test1[i] < score1) {
             continue;
         }
         console.log(`score1:`, test1[i])
     }
     // ============== 3 ====================================

const test2 = [17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20]
const score2 = 16;
for  (let i = 0; i <= test2.length; i += 1) {
         if (test2[i] < score2) {
             continue;
         }
         console.log(`score2:`, test1[i])
     }
     // ============== 4 ====================================

const test3 =[17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20]
const score3 = 17;
for  (let i = 0; i <= test3.length; i += 1) {
         if (test3[i] < score3) {
             continue;
         }
         console.log(`score3:`, test1[i])
     }

 // ============== 5 ====================================

//  Создай многомерный массив tests, который содержит 3 вложенных массива, с результатами трех тестов студентов:

//  первый: 4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12
 
//  второй: 17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20
 
//  третий: 20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22
 
//  Выведи в консоль все три вложенных массива с помощью цикла for
 
  

const tests = [
    [4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12],
    [17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20],
    [20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22]
];
console.log(tests)

for (let i = 0; i < tests.length; i += 1) {
    console.log(tests[i]);
    for (let k = 0; k < tests[i].length; k += 1) {
        console.log(tests[i][k]);
    }
};



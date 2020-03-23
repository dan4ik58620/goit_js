"use strict";

// 1 задание

// const var1 = 1;
// const var2 = 0;
// const var3 = true;

// console.log(var1 > var2); // true
// console.log(var1 == var3); // true , потому что true приводится к 1
// console.log(var1 === var3); // false , потому что true НЕ приводится к 1 , boolean не равен number
// console.log(var1 != var3); // false , потому что нет проверки типов данних
// console.log(var2 != var3); // true , потому что true приводится  к 1 а 0 не равен 1
// console.log(var1 > var2 == var3); // true , потому что действия сравнения проводятся последовательно , сначала сравнивается 1 > 0 что приводит к true , потом true не строго приравнивается к true
// console.log(var1 > var2 > var3);// false , 1 больше 0 возвращает true а true не больше true
 
// 2 задание

// let val;
// console.log(val); // undefined
// console.log(typeof val); // undefined

// val = "River";
// console.log(isNaN(val)); // true
// console.log(typeof val); // string

// val = "Mountin";
// console.log(isNaN(val)); // true
// console.log(typeof val); // string

// val = 232;
// console.log(isNaN(val)); // false
// console.log(typeof val); // number

// val = true;
// console.log(isNaN(val)); // false
// console.log(typeof val); // boolean

// val = null;
// console.log(isNaN(val)); // false
// console.log(typeof val); // object

// 3 задание 

// const alfa = 0.2;
// const beta = 0.4;
// let result = (alfa * 10 + beta * 10) / 10;
// console.log(result);

// 4 задание 

let tetra = "12px";
console.log(tetra);

tetra = 12 + "px";
console.log(tetra);

tetra = "13.34em";
console.log(tetra);

tetra = 13.34 + "em";
console.log(tetra);

// 5 задание

console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18)); // 2
console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18)); // 733

// 6 задание
let random;
random = (Math.random() * (19 - 3) + 3);
// console.log(random);
// console.log("ceil:", Math.ceil(random));
// console.log("floor:", Math.floor(random));
// console.log("round:", Math.round(random));
// console.log("toFixed(2):", random.toFixed(2));
// console.log("toFixed(1):", random.toFixed(1));
console.log("toFixed(0):", random.toFixed(0));
"use strict"

//CALLBACK ФУНКЦЫЯ


// const highOrderFunc = function (callbackFunc) {
//     const message = "Вот так рабоатет колбек";
//     callbackFunc(message);
// };

// const showMessage = function (Dan) {
//     console.log(Dan)
// };

// highOrderFunc(showMessage);

// // // ====2===
// const printMessage = function (message){
//     console.log(message);
// }


// const highOrderFunction = function (callback) {    
// const string = "HOCs are awesome"
// callback(string);
// };
// highOrderFunction(printMessage);


// const showHeroes = function (heroes) {
//     console.log(heroes);
// }

// const mainFunc = function (callback) {
//     const heroes = ["Batman", "Robin"];
//     for (const hero of heroes) {
//         callback(hero);
//     }
// };

// mainFunc(showHeroes);


// const repeatLog = function (n) {
//     let result;
//     for (let i = 0; i < n; i +=1) {
//         result = i;
//         console.log ("каждая итерацыя i:", i);
//         console.log ("каждая итерацыя result:", result);
    
// }
// console.log ("последняя итерацыя ", result); 
// };
// repeatLog(5); 

// const showResult = function (result) {
//     console.log(result);
// };

// const showResultWithComment = function (value) {
//     console.log("cooom for result: ", value);
// };

// const repeat = function (num, callback) {
//     for (let i = 0; i < num; i +=1) {
//         callback(i);
//     }
// };

// repeat(4, showResult);

// repeat(3, showResultWithComment);


// const myArr = [];
// console.log("масив обявлен", myArr);

// repeat(5, (value) => {
//      myArr.push(`element ${value + 1}`)
// })

// // ФИЛЬТР МАССИВА
// const filterFunc = function (array, cbFunc) {
//     const filteredArr = []; // новый массив для добавления отфильтрованных элементов
//     for (const el of array) {
//       const ok = cbFunc(el);
  
//       if (ok) {
//         filteredArr.push(el);
//       }
//     }
//     return filteredArr;
//   };


//   const fruits = [
//     { name: "apples", quantity: 200, isFresh: true },
//     { name: "grapes", quantity: 150, isFresh: false },
//     { name: "bananas", quantity: 100, isFresh: true },
//   ];

//   const freshFruits = filterFunc(fruits, (RokLee) => RokLee.isFresh);
//   console.log("только свежые: ", freshFruits)


//   const x = 10;

//   const y = 20;

//   const summ = function (z) {
//       const X = 100 ;
//       return console.log(x + y + z)
//   };

// console.log("значение х глобально", X);

// summ(30);

//========================Занятие 2..===================

// function myFunc() {
//     console.log(this);
// }

// myFunc()

// const petya = {
//       name: "Petya",
//       showThis() {
//         console.log(this);
//       },
//       showName() {
//         console.log(this.name);
//       },
//     };
    
//     petya.showThis(); // {name: "Petya", showThis: ƒ, showName: ƒ}
//     petya.showName(); // 'Petya'
    
    // // ===2===
    // function showThis() {
//       console.log("this in showThis: ", this);
//     }
    
//     // Вызываем в глобальном контексте
//     showThis();
//     // this in showThis: Window
    
//     const user = { 
//       name: "Mango",
//      };
    
//     user.newMerhod = function () {
//         console.log("добавление мотода с сылкой на котнекст", this);
//     };
//     user.newMerhod()

//     user.showContext = showThis;


//     user.showContext()


//     const hotel = {
//         name: "Hilton",
//         showThis(){
//             console.log(this);
//         },
//     };

//     const fn = function (callback) {
//         callback();
//     };

//     fn(hotel.showThis);


// const arrowThis = () => {
//   console.log("this in arrowThis: ", this);
// };

// arrowThis(); 

// const newUser = { name: "Dan" };
// newUser.showContext = arrowThis;

// newUser.showContext(); 


// const hotel2 = {
//     name: "Holiday Inn",
//     showThis() {
//         const fn = () => {
//             console.log("this in fn: ", this);
//         };
    
//         fn();
//         console.log("this in fn: ", this);        
//     },
// };

// hotel2.showThis();




// const hotel3 = {
//   name: "Resort hotel",
//   showThis: function showThis() {
//     /*
//      * Контекст для стрелки сохраняется
//      * и передается из внешней области видимости
//      */
//     const context = this;

//     const fn = function fn() {
//       // А тут используется
//       console.log("this in fn: ", context);
//     };

//     fn();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel3.showThis();
// // this in fn: {name: 'Resort hotel', showThis: ƒ}
// // this in showThis: {name: 'Resort hotel',showThis: ƒ}

// // // call & apply
// const greet = function () {
//   return `Wellcome to ${this.name} hotel!`;
// };

// const hotel4 = { name: "Resort Hotel" };

// // console.log(greet.call(hotel4));

// console.log(greet.call(hotel4)); // "Wellcome to Resort Hotel!"
// console.log(greet.apply(hotel4)); // "Wellcome to Resort Hotel!"

// // const hotel5 = {
// //   name: "Resort hotel",
// //   showThis: function showThis() {
// //     const context = this;

// //     const fn = function fn() {
// //       // А тут используется
// //       console.log("this in fn: ", context);
// //     };

// //     fn();
// //     console.log("this in showThis: ", this);
// //   },
// // };

// hotel.showThis();

// //call вызовет функцию fn передав ее this ссылку на объект obj, а также аргументы arg1, arg2 и т. д.
// const greet1 = function (guest, stars) {
//   return `${guest}, welcome to ${stars}-star ${this.name}!`;
// };

// const hotel5 = { name: "Resort Hotel" };
// const motel = { name: "Sunlight Motel" };

// console.log(greet1.call(hotel5, "Mango", 5));
// // "Mango, wellcome to 5-star Resort Hotel!"

// console.log(greet1.call(motel, "Poly", 4));
// // "Poly, wellcome to 4-star Sunlight Motel!"


// const greet2 = function (guest, stars) {
//       return `${guest}, welcome to ${stars}-star ${this.name}!`;
//     };
    
//     const hotel6 = { name: "Resort Hotel" };
//     const motel1 = { name: "Sunlight Motel" };
    
//     console.log(greet2.apply(hotel6, ["Mango", 5]));
//     // "Mango, wellcome to 5-star Resort Hotel!"
    
//     console.log(greet2.apply(motel1, ["Poly", 4]));
//     // "Poly, wellcome to 4-star Sunlight Motel!"
    

//     const greet3 = function (guest) {
//           return `${guest}, welcome to ${this.name}!`;
//         };
        
//         const hotel7 = { name: "Resort Hotel" };
//         const hotelGreeter = greet3.bind(hotel7, "Mango");
//       console.log(hotelGreeter()); // "Mango, wellcome to Resort Hotel!"

//       const hotel8 = {
//           name: "Rixoz",
//           showThis() {
//             console.log(this);
//           },
//         };
        
//         const fn1 = function (callback) {
//           callback();
//         };

// fn1(hotel8.showThis.bind(hotel8)); // {name: "Resort Hotel", showThis: ƒ}
// fn1(hotel8.showThis);






























"use strict"

//CALLBACK ФУНКЦЫЯ


const highOrderFunc = function (callbackFunc) {
    const message = "Вот так рабоатет колбек";
    callbackFunc(message);
};

const showMessage = function (Dan) {
    console.log(Dan)
};

highOrderFunc(showMessage);

// // ====2===
const printMessage = function (message){
    console.log(message);
}


const highOrderFunction = function (callback) {    
const string = "HOCs are awesome"
callback(string);
};
highOrderFunction(printMessage);


const showHeroes = function (heroes) {
    console.log(heroes);
}

const mainFunc = function (callback) {
    const heroes = ["Batman", "Robin"];
    for (const hero of heroes) {
        callback(hero);
    }
};

mainFunc(showHeroes);


const repeatLog = function (n) {
    let result;
    for (let i = 0; i < n; i +=1) {
        result = i;
        console.log ("каждая итерацыя i:", i);
        console.log ("каждая итерацыя result:", result);
    
}
console.log ("последняя итерацыя ", result); 
};
repeatLog(5); 

const showResult = function (result) {
    console.log(result);
};

const showResultWithComment = function (value) {
    console.log("cooom for result: ", value);
};

const repeat = function (num, callback) {
    for (let i = 0; i < num; i +=1) {
        callback(i);
    }
};

repeat(4, showResult);

repeat(3, showResultWithComment);


const myArr = [];
console.log("масив обявлен", myArr);

repeat(5, (value) => {
     myArr.push(`element ${value + 1}`)
})

// ФИЛЬТР МАССИВА
const filterFunc = function (array, cbFunc) {
    const filteredArr = []; // новый массив для добавления отфильтрованных элементов
    for (const el of array) {
      const ok = cbFunc(el);
  
      if (ok) {
        filteredArr.push(el);
      }
    }
    return filteredArr;
  };


  const fruits = [
    { name: "apples", quantity: 200, isFresh: true },
    { name: "grapes", quantity: 150, isFresh: false },
    { name: "bananas", quantity: 100, isFresh: true },
  ];

  const freshFruits = filterFunc(fruits, (RokLee) => RokLee.isFresh);
  console.log("только свежые: ", freshFruits)


  const x = 10;

  const y = 20;

  const summ = function (z) {
      const X = 100 ;
      return console.log(x + y + z)
  };

console.log("значение х глобально", X);

summ(30);




















































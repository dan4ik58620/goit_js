"use strict"
// //Процедурный кот
// const test1 = 16;
// //==============================
// const test2 = 22;
// //==============================
// const test3 = 23;
// //==============================
// const score = (test1, test2, test3) => {
//     return console.log(test1 + test2 + test3);
// };

// score(test1, test2, test3);

// const totalScore = {
//     test1: 16,
//     test2: 22,
//     test3: 23,
//     toGetSum() {
//         return this.test1 + this.test2 + this.test3;
//     },
// };
// console,log(totalScore.toGetSum());

// const Project = function (title, theme, clients){
//     this.title = title;
//     this.theme = theme;
//     this.clients = clients;
// };
// const project = new Project("habit`s mansger", "human", "all types");
// console.log(project);

// const project_fe = new Project("App", "to fo list", "all types");
// console.log(project_fe);

////========================Урок 2 =========================

// const Human = function (arms, legs, head, body = 1) {
//     this.arms = arms;
//     this.legs = legs;
//     this.head = head;
//     this.body = body;
// };
// const Ilia = new Human(2, 2, 1);
// console.log(Ilia) 

// const Dima = new Human();
// console.log(Dima); 
 
// const Movie = function (name, rate, category) {
//     this.name = name;
//     this.rate = rate;
//     this.category = category;
//     this.countUser = 0;
  
//     this.greet = function (userName) {
//       console.log(`Hello ${userName}, welcome to ${this.name}`);
//     };
  
//     this.addUser = function (newUser) {
//       this.countUser += newUser;
//       console.log(this.countUser);
//     };
  
//     this.removeUser = function (newUser) {
//       this.countUser -= newUser;
//       console.log(this.countUser);
//     };
//   };
  
//   const movi = new Movie("Hero", 9, 100);
//   console.log(movi);
  
//   movi.greet("ALeks");
//   movi.addUser(40);
//   movi.removeUser(30);

//   const salesManager_1 = {
//     name: "Olena",
//     sales: 5,
//     sell(product) {
//       this.sales += 1;
//       return `Manager ${this.name} sold ${product}`;
//     },
//   };

//   console.log(salesManager_1.sales);
// console.log(salesManager_1.sell("Club Card"));
// console.log(salesManager_1.sell("Training Card"));
// console.log(salesManager_1.sales);

// const salesManager_2 = {
//     name: "Dan",
//     sales: 10,
//     sell(product) {
//       this.sales += 1;
//       return `Manager ${this.name} sold ${product}`;
//     },
//   };

//   console.log(salesManager_2.sales);
//   console.log(salesManager_2.sell("Club Card"));
//   console.log(salesManager_2.sell("Training Card"));
//   console.log(salesManager_2.sales);


//   const Manager = function (name = "manager", sales = 0) {
//     this.name = name;
//     this.sales = sales;
  
//     this.sell = function (product) {
//       this.sales += 1;
//       return `Manager ${this.name} sold ${product}`;
//     };
//   };
  
//   const manager_1 = new Manager("Dan");
//   console.log(manager_1.name)
//   console.log(manager_1.sales);

//   console.log(manager_1.sell("Club card"));
//   console.log(manager_1.sell("Training card"));

//   console.log(manager_1.sales);
  
  
// const manager_2 = new Manager("Dan", 5);
//   console.log(manager_2.name)
//   console.log(manager_2.sales);

//   console.log(manager_2.sell("Club card"));
//   console.log(manager_2.sell("Training card"));
  
//   console.log(manager_2.sales);
  
  
// const teacher = { lang_1: "HTML" };
// const child = { lang_2: "CSS" };

// child.__proto__ = teacher;

// console.log(child.lang_1);
// console.log(child.lang_2);


// const child2 = { lang_1: "Js", lang_2: "CSS" };
// console.log(child2.lang_1);

// child.__proto__ = teacher;
// console.log(child2.lang_1);


// const main_object = {key1: 1};
// console.log("main_object", main_object);

// const first_object = {key2: 2};
// first_object.__proto__ = main_object;
// console.log("first_object", first_object)

// console.log(first_object);
// console.log(first_object.key1);
// console.log(first_object.key3);
// console.log(first_object.key4);

// const second_object = {key3: 3};
// first_object.__proto__ = second_object;
// console.log("second_object", second_object);
// console.log("own prop", first_object.key2);

// console.log(second_object);
// console.log(second_object.key1);
// console.log(second_object.key2);
// console.log(second_object.key4);

// const third_object = {key4: 4};
// first_object.__proto__ = third_object;
// console.log(third_object);
// console.log(third_object.key1);
// console.log(third_object.key2);
// console.log(third_object.key3);

// //object
// const animal = { eats: true};

// const cat = Object.create(animal);

// console.log("initialise", cat);

// cat.barks = true;
// console.log("added prop", cat);

// console.log(cat.eats);


// const parentProd = { color: "red", count: 7};
// const childProd = Object.create(parentProd);
// childProd.price = 30;


// for (const key in childProd) {
//     console.log("__proto__ key: ", key);
// };

// for (const key in childProd) {
//     if (!childProd.hasOwnProperty(key)) continue;
//     console.log("own property: ", key);
// }

// const childProductKeys = Object.create(childProd);

// console.log(childProductKeys);

// const Guest = function (name, room) {
//     this.name = name;
//     this.room = room;
// };
// console.log("объект с методом constroctor", Guest.prototype);

// const newGuest = new Guest("ALeks", 30);
// console.log("newGueste", newGuest);

// Guest.prototype.newMethod = function () {
//     console.log(`мутод функцыи конструктора - name: ${this.name},room: ${this.room}`);
// };

// newGuest.newMethod();

// const Hero = function (name, xp) {
//     this.name = name;
//     this.xp = xp;
// };

// Hero.prototype.gainXp = function (amount) {
//     console.log(`${this.name} gained ${amount} exirience points`);
//     this.xp += amount;
// };

// const mango = new Hero("Mango", 1000);
// console.log(mango);

// mango.gainXp(500);


// const Warrior = function (name, xp, weapon){
//     Hero.call(this, name, xp);
//     this.weapon = weapon;
// }

// Warrior.prototype.attack = function () {
//     console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const poly = new Warrior("Poly", 200, "sword");

// console.log("poly", poly);

// poly.attack();








































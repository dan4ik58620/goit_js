"use strict"

// class Hero_1 {
//     constructor(name, xp) {
//         this.name = name;
//         this.xp = xp;
//     }
// };

// const newHero_1 = new Hero_1("Dan", 1000);
// console.log(newHero_1);

// console.log(
//     "сравнение прототипа екземпляра и объекта функцыи-конструктора: ",
//     newHero_1.__proto__ === Hero_1.prototype
//     );

//     class Hero_2 {
//         constructor(name, xp) {
//             this.name = name;
//             this.xp = xp;
//         }

//     gainXp() {
//         console.log(`Hero ${this.name}, xp ${this.xp} `);
//     }

// };

// const newHero_2 = new Hero_2("Dan", 1000);
// console.log(newHero_2);

// class Hero_3 {
//     static staticProp = "abc";
//     static staticMethod(){}
//     constructor(name, xp) {
//         this.name = name;
//         this.xp = xp;
//     }

//         gainXp() {
//             console.log(`Hero ${this.name}, xp ${this.xp} `);
//         }
    
//     }
    
// console.log(Hero_3.staticProp);
// console.log(Hero_3.staticMethod);

// const newHero_3 = new Hero_3("Sonia", 1000);
// console.log(newHero_3);


// class Hero_4 {
//     constructor(name, xp) {
//         this.name = name;
//         this.xp = xp;
    // }
    // changeName(name) {
    //     this._name = name;
    // }
    // getName() {
    //     return console.log(this.name);
    // }
//     set name(newName) {
//         this._name = newName;
        
//     }
//     get name() { 
//         return console.log(this._name);
//     }
// }
// const newHero_4 = new Hero_4("Sonia", 1000);

// console.log(newHero_4);
// newHero_4.name = "Drago";
// newHero_4.name;

// class Hero_5 {
//     constructor(name, xp) {
//         this.name = name;
//         this.xp = xp;
//     }

// a = 5;

// publicProp = 5;
// publicMethod = (amount) => {
//     this.xp += amount;
//     console.log(this.xp);
// }

// gainXp = (amount) => {
//     this.xp += amount;
//     console.log(this.xp);
// };
// }
// const newHero_5 = new Hero_5("Oh Etot karantin", 1000);
// console.log(newHero_5);

// const fn = function (callback) {
//     callback(100);
// };
// fn(newHero_5.publicMethod);
// fn(newHero_5.gainXp.bind(newHero_5));

// class Heroes {
//     constructor(name, xp) {
//         this.name = name;
//         this.xp = xp;
//     }
//     gainXp = (amount) => {
//         this.xp += amount;
//         console.log(`${this.name} gained ${amount} experincr points`);
//     }
// }
// class Warwar extends Heroes {
//     constructor(name, xp, weapon) {
//         super(name, xp);
//         this.weapon = weapon;
//     }
//     attack() {
//         console.log(`${this.name} attacks with ${this.xp}`);
//     }

// }








































































































































































































































































































































































































































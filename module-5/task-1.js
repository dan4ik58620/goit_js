"use strict"
//===========================1 Задание==========================
const Account = function (login, email) {
  this.login = login;
  this.email = email;
};
console.log(Account.prototype.getInfo); 

const mango = new Account("Mangozedog", "mango@dog.woof");
mango.getInfo(); 

const poly = new Account("Poly", "poly@mail.com");
poly.getInfo(); 

 //===========================2 Задание==========================
 class User {
      constructor(name, age, followers) {
        this.name = name;
        this.age = age;
        this.followers = followers;
      }
      getInfo() {
        console.log(
          `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
        );
      }
    }
    const mango1 = new User("Mango", 2, 20);
    mango1.getInfo();
    
    const poly1 = new User("Poly", 3, 17);
    poly1.getInfo();

// =======================3 Задание==========================
class Storage {
      constructor(items) {
        this.items = items;
      }

  getItems() {
    return this.items;
  }
  addItem(item) {
  this.items.push(item);
    return this.items;
          }
          removeItem(item) {
            for (let i = 0; i < this.items.length; i += 1) {
 if (this.items[i] === item) {
  this.items.splice(i, 1);
 }
      }
      return this.items;
          }
        }
        const storage = new Storage([
              "Нанитоиды",
              "Пролонгер",
              "Железные жупи",
              "Антигравитатор",
            ]);
            console.log(storage);

  const items = storage.getItems();
  console.table("getItems", items);

    storage.addItem("Дроид");
    console.table("addItem", storage.items);

 storage.removeItem("Пролонгер");
console.table("removeItem", storage.items);

// =======================4 Задание==========================

class StringBuilder {
      constructor(str) {
        this._value = str;
      }
      get value() {
        return this._value;
      }
      append(str) {
        console.log(typeof str);
        this._value += str;
        return this._value;
      }
      prepend(str) {
        this._value = str + this._value;
        return this._value;
      }
      pad(str) {
        this._value = str + this._value + str;
        return this._value;
      }
    }
    const builder = new StringBuilder(".");
    console.log(builder.value);
    
    builder.append("^");
    console.log(builder.value); 
    
    builder.prepend("^");
    console.log(builder.value); 
    
    builder.pad("=");
    console.log(builder.value); 
    // =======================5 Задание==========================

    class Car {
        static getSpecs(car) {
          return console.log(
            "static: ",
            "maxSpeed",
            car.maxSpeed,
            "speed",
            car.speed,
            "isOn",
            car.isOn,
            "distance",
            car.distance,
            "_price",
            car._price
          );
        }

        constructor(maxSpeed, price) {
            this.speed = 0;
            this.maxSpeed = maxSpeed;
            this._price = price;
            this.isOn = false;
            this.distance = 0;
          }
 set price(price) {
    return (this._price = price);
  }
  get price() {
    return this._price;
  }

  turnOn() {
    return (this.isOn = true);
  }

  turnOff() {
    return (this.isOn = false), (this.speed = 0);
  }

 accelerate(value) {
    if (this.speed <= this.maxSpeed) {
      return (this.speed += value);
    }
  }

  decelerate(value) {
    if (this.speed >= 0) {
      return (this.speed -= value);
    }
  }

  drive(hours) {
    if (this.isOn === true) {
      return (this.distance = hours * this.speed);
    }
  }
}

const mustang = new Car(200, 2000);
console.log("mustang", mustang);

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price); 
mustang.price = 4000;
console.log(mustang.price); 






















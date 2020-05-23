// "use stricts";
// // =================================1========================
// const user = {
//   name: "Semen",
//   age: 15,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "coding";
// user.premium = false;

// const toShowUpdatedUser = function (obj) {
//     console.log(obj);
//   const undatedUser = Object.keys(obj);
//     console.log(undatedUser);
//   for (let key of undatedUser) {
//     console.log(key);
//     console.log(obj[key]);
//     console.log(`${key}: ${obj[key]}`);
//   }
// };

// toShowUpdatedUser(user);
// name: "Semen"
// age: 15
// hobby:"coding"
// premium: false
// mood: "happy"

// // =================================2========================
// const countProps = function (obj) {

//     const arrayProps = Object.keys(obj);
//     return arrayProps.length;
//   return Object.keys(obj).length;
// };

//   console.log(countProps({})); // 0
//   console.log(countProps({ name: "Mango", age: 2 })); // 2
//   console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3 

//   // =================================3========================

// const countTotalSalary = function (employees) {
//   let empVals = Object.values(employees);
//   let valsTot = 0;
//   for (let val of empVals) {
//     valsTot += val;
//   }
//   return valsTot;

// };
// console.log(countTotalSalary({})); 

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   } )
// ); 

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   } )
// ); 

// // ==================== 4 ========================

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {


//   let total;
//   for (let i = 0; i < allProdcuts.length; i++) {
//     let arrFromObject = Object.values(allProdcuts[i]);
//     if (arrFromObject[0] == productName) {
//       total = arrFromObject[1] * arrFromObject[2];
//       return total;
//     }
//   }
// };
// console.log(calculateTotalPrice(products, "Радар")); 
// console.log(calculateTotalPrice(products, "Дроид")); 

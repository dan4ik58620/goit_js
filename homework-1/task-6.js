"use strict";
 
let credits = 23580;
let pricePerDroid = 3000;

let wantToBuy = +prompt("Укажите количество дроидов");
let totalPrice;
console.log(wantToBuy);

if (wantToBuy === null) {
   console.log("Отменено пользователем!");
} else {
   totalPrice = pricePerDroid * wantToBuy;
   console.log(wantToBuy);
   console.log(totalPrice);
   if (totalPrice > credits) {
     console.log("Недостаточно средств на счету!");
   } else {
     console.log(
       `Вы купили ${wantToBuy} дроидов, на счету осталось ${credits -
         totalPrice} кредитов.`
     );
   }
}




  "use strict";

// // //  ============занятие 1========================
 
// // //  ПЕРЕМЕННЫЕ И ТИПЫ ДАННЫХ
 
// // //  можно переприсвоить значение переменной
// //  let a = 4; // Number
// //  a = "JavaScript"; // String
// //  console.log(typeof a); // string
 
// //  console.log(a);
// //  console.log(typeof a); // number
 
// // //  объявлена, но не инициализирована, поэтому
// //  let b;
// //  console.log(b); // undefined
// //  console.log(typeof b); // undefined
// //  b = "FE-1&FE-7";
 
 
// //  var c = 10;
// //  c = 15;
// //  console.log(c);
 

 
// //  const isAuthenticated = true; // Boolean (1)
// //  console.log(isAuthenticated);
// //  console.log(typeof isAuthenticated); // boolean
 
// //  const isModalOpen = false; // Boolean (0)
// //  console.log(isModalOpen);
// //  console.log(typeof isModalOpen); // boolean
 
// //  const guest = null;
// //  console.log(guest); // null
// //  console.log(typeof guest); // object
 
// // //  ВЗАИМОДЕЙСТВИЕ С ПОЛЬЗОВАТЕЛЕМ, всплывающие окна
// //  const message = "hello! Great to meet you here!";
// //  console.log(message);
// //  let name = "Student";
// //  name = "Sava";
// //  console.log(name);
// //  console.log(`${name}, ${message}`); // шаблонная строка с интерполяцией
 
// //  alert(`${name}, ${message}`);
 
// //  const isReady = confirm("Are you ready to study JavaScript?");
// //  console.log(isReady); // Ok -> true, Cancel -> false
 
// //  const enterName = prompt("Please, enter your name.");
// //  console.log(enterName); // покажет введенное значение типа Строка
// //  const enterAge = prompt("Please, enter your name.");
// //  console.log(enterAgee); // покажет введенное значение ТОЖЕ типа Строка
 
// // //  ============занятие 2========================
 
// //  ОПЕРАТОРЫ
// //  const x = 11;
// //  const y = 5;
// //  const z = 2;
// //  console.log(x + y); // 16
// //  console.log(x - y); // 6
// //  console.log(x * y); // 55
// //  console.log(x / y); // 2.2
// //  console.log(x / 0); // 2.2
// //  console.log(x % y); // 1
 
// //  console.log(y ** z); // 25
 
// // //  выражение в скобках имеет приоритет (как нас учили в матиматике)
// //  console.log(x + y * z); // 21
// //  console.log((x + y) * z); // 32
 
// //  console.log(x + y ** z); // 36
// //  console.log((x + y) ** z); // 256
 
// //  let value = 100;
// //  value = value + 33;
// //  console.log(value); // 133
// //  value = value + 33;
// //  console.log(value); // 166
 
// //  value += 44;
// //  console.log(value); // 210 если не закомментирована стр 74, иначе 144
 
// //  const p = 100;
// //  const r = 3;
// //  const s = 100;
// //  console.log("p > r", p > r); // true
 
// //  console.log("p < r", p < r); // false
// //  console.log("p <= s", p <= s); // true
 
// //  console.log("p > s", p > s); // false
// //  console.log("p >= s", p >= s); // true
 
// //  console.log(3 > 2 > 1);
 
// //  console.log(3 > 2 >= 1);
// //  console.log(Boolean(""));
// //  console.log(Number(""));
// //  console.log(Boolean(" "));
// //  console.log(Number(" "));
// // //  почему? кто может объяснить? на фоне выше изложенного)
// //  console.log(3 > 2 == 1); // true
// //  console.log(3 > 2 === 1); // false
 
// // //  равенство строгое и не строгое
// //  console.log("p === r", p === r); // false
// //  console.log("p == r", p == r); // false
// //  console.log(3 == "3");
// //  console.log(3 === "3");
// //  console.log("p === s", p === s); // true
// //  console.log("p == s", p == s); // true
 
// // //  неравенство строгое
// //  console.log("p !== r", p !==3); // true
// //  console.log("3 != '3'", 3 != "3");
// //  console.log("3 != '3'", 3 !== "3");
// //  console.log("p !== s", p !== s); // false
 
// //  const num1 = 5;
// //  const num2 = 18;
// //  const str1 = "5";
// //  const str2 = "18";
// //  console.log("num === str", num1 === str1); // false
// //  console.log("num == str", num1 == str1); // true
// //  console.log(1 === true);
// //  console.log(0 == true);
// //  console.log(num1 + str1); // 55
// //  console.log(typeof (num1 + str1)); // string
 
// //  console.log(str1 + num1 + str2); // 5518
// //  console.log(typeof (str1 + num1 + str2)); // string
 
// //  console.log(str1 + num1 + num2 + str2); // 551818
// //  console.log(typeof (str1 + num1 + num2 + str2)); // string
 
// //  console.log(num1 + num2 + str1 + str2); // 23518
// //  console.log(typeof (num1 + num2 + str1 + str2)); // string
// //  ЧИСЛА
// //  let userAge = prompt("Enter your age please");
// //  console.log(userAge);
// //  console.log(typeof userAge);
// //  userAge = Number(userAge);
// //  console.log(userAge);
// //  console.log(typeof userAge);
 
// //  const val1 = "17";
// //  console.log(Number(val1)); // 17
// //  console.log(typeof Number(val1)); // number
 
// //  const val2 = "Junior JS developer";
// //  console.log(Number(val2)); // NaN
// //  console.log(typeof Number(val2)); // number
 
// // //  методы parseInt и parseFloat
// //  console.log(Number.parseInt("112px")); // 112
// //  console.log(Number.parseInt("11abc22")); // 11
// //  console.log(Number.parseInt("1.1xy9")); // 1 - ЦЕЛОЕ ЧИСЛО
// //  console.log(Number.parseInt("qweQWE110011")); // NaN
 
// //  console.log(Number.parseFloat("112px")); // 112
// //  console.log(Number.parseFloat("11abc22")); // 11
// //  console.log(Number.parseFloat("1.11xy9")); // 1.11 - ДРОБНОЕ ЧИСЛО
// //  console.log(Number.parseFloat("qweQWE110011")); // NaN
 
// // //  проверка на число
// //  const validNumber = Number("1024");
// //  console.log(validNumber); // 1024
// //  console.log(Number.isNaN(validNumber)); // false
 
// //  const invalidNumber = Number("ggg");
// //  console.log(invalidNumber); // NaN
// //  console.log(Number.isNaN(invalidNumber)); // true
 
// // //  сложение чисел с плавающей точкой
// //  const V = 0.1;
// //  const W = 0.2;
// //  console.log("0.1 + 0.2 = ", V + W); // hahaha-haha-haha-hahahaha
// //  console.log(V + W === 0.3); // false
 
// //  console.log((V * 10 + W * 10) / 10); // 0.3
// //  console.log((V * 10 + W * 10) / 10 === 0.3); // true
 
// // //  object Math
// //  console.log(Math.floor(1.1)); // 1
// //  console.log(Math.floor(1.5)); // 1
// //  console.log(Math.floor(1.99)); // 1
 
// //  console.log(Math.ceil(1.99)); // 2
// //  console.log(Math.ceil(1.5)); // 2
// //  console.log(Math.ceil(1.01)); // 2
 
// //  console.log(Math.round(1.1)); // 1
// //  console.log(Math.round(1.4)); // 1
// //  console.log(Math.round(1.5)); // 2
// //  console.log(Math.round(1.99)); // 2
 
// //  console.log(Math.max(1, 3, 2, 0)); // 3
// //  console.log(Math.min(1, 3, 2, 0)); // 0
// //  console.log(Math.min(1, -3, 2, 0)); // -3
 
// //  console.log(Math.pow(3, 3)); // 27
 
// //  console.log(Math.random());
// // //  случайное число между 0 и 1
// //  console.log(Math.random() * (10 - 1) + 1);
// // //  случайное число от 1 до 10
 
// //  СТРОКИ
// //  let animal = "tiger";
// //  console.log(animal.length); // 5
 
// //  animal = "pink panter!";
// //  console.log(animal.length); // 12
// //  console.log(animal.indexOf("pink")); // 0
// //  console.log(animal.indexOf("panter!")); // 5
// //  console.log(animal.indexOf("panter")); // 5
// //  console.log(animal.indexOf(" ")); // 4
// //  console.log(animal.indexOf("p")); // 0
// //  console.log(animal.indexOf("i")); // 1
// //  console.log(animal.indexOf("punk")); // -1
// //  console.log(animal.indexOf("dfghsdkjgfaljs")); // -1
 
// //  console.log(animal.includes("panter")); // true
// //  console.log(animal.includes("punk")); // false
 
// //  console.log(animal[0]); // p
// //  console.log(animal[1]); // i
// //  console.log(animal[2]); // n
// //  console.log(animal[3]); // k
// //  console.log(animal[4]); //
 
// //  console.log(animal.toLocaleUpperCase()); // PINK PANTER!
// //  console.log(animal); // pink panter!
// //  animal = "CAT";
// //  console.log(animal.toLocaleLowerCase()); // cat
 
// //  concatenation
 
// //  const myName = "My " + "name " + "is " + "Aleks";
// //  console.log(myName); // My name is Aleks
 
// //  let result;
 
// //  result = 3 + "3";
// //  console.log(result); // 33
// //  console.log(typeof result); // string
 
// //  result = 3 + "3" + 3;
// //  console.log(result); // 333
// //  console.log(typeof result); // string
 
// //  result = 3 + 3 + "";
// //  console.log(result); // 6
// //  console.log(typeof result); // string
 
// //  result = true + "";
// //  console.log(result); // true
// //  console.log(typeof result); // string
 
// //  result = null + "";
// //  console.log(result); // null
// //  console.log(typeof result); // string
 
// //  result = undefined + "";
// //  console.log(result); // undefined
// //  console.log(typeof result); // string
 
// //  ============занятие 3========================
 
//  // ЛОГИЧЕСКИЕ ОПЕРАТОРЫ: &&, ||, !.
 
//  // ложные значения, приводящие к false
//  // 0;
//  console.log(Boolean(0)); // false
//  console.log(typeof 0); // number
//  // NaN;
//  console.log(Boolean(NaN)); // false
//  console.log(typeof NaN); // number
//  // null;
//  console.log(Boolean(null)); // false
//  console.log(typeof null); // object
//  // undefined;
//  console.log(Boolean(undefined)); // false
//  console.log(typeof undefined); // undefined
//  // "" || "";
//  console.log(Boolean("")); // false
//  console.log(typeof ""); // string
//  // НО!
//  console.log(Boolean(" ")); // true
//  console.log(typeof " "); // string
//  // // false;
//  console.log(Boolean(false)); // false
//  console.log(typeof false); // boolean
 
//  console.log(Number(false)); // 0
//  console.log(Number(true)); // 1
 
//  // все остальные к true
//  console.log(Boolean("my name")); // true
//  console.log(typeof "my name"); // string
 
//  console.log(false == undefined); // false
//  console.log(false == null); // false
 
//  console.log(null === undefined); // false
//  console.log(null == undefined); // true, почему object и undefined true?
//  // Это специальное правило языка.
//  // Эти значения равны друг другу и не равны никаким другим значениям.
 
//  // При использовании математических операторов и других операторов сравнения < > <= >=
//  // Значения null/undefined преобразуются к числам:
//  // null становится 0, а
//  // undefined – NaN.
 
//  // && вернет последнее true, если все операнды истинные
//  const KPI = 30;
//  const fact = KPI > 20 && KPI < 31;
//  console.log(fact); // true
//  console.log("cat" && "dog" && "parrot"); // parrot
 
//  // в остальных - false
//  const fact2 = KPI > 20 && KPI < 29;
//  console.log(fact2); // false
//  console.log("cat" && false); // false
 
//  // если первый операнд false, остальные уже не вычисляются
//  const fact1 = KPI > 31 && KPI < 32;
//  console.log(fact1); // false
//  console.log(false && "parrot"); // false
 
//  // || вернет первый true, если хотя бы один операнд истинный
//  const age = 30;
//  const trueAge = age < 31 || age > 29;
//  console.log(trueAge); // true - оба истинные
//  console.log("cat" || "parrot"); // cat
 
//  // если первый операнд true, остальыне уже не вычисляются
//  const trueAge1 = age < 31 || age > 32;
//  console.log(trueAge1); // true - только левый истинный
//  console.log("cat" || false); // cat
 
//  const trueAge2 = age < 29 || age > 27;
//  console.log(trueAge2); // true - только правый истинный
//  console.log(false || "parrot"); // parrot
 
//  const trueAge3 = age < 29 || age > 31;
//  console.log(trueAge3); // false - оба ложные
 
//  const trueAge4 = age < 29 || age > 31 || age > 32;
//  console.log(trueAge4); // false - все ложные
 
//  const trueAge5 = age < 29 || age > 25 || age > 50;
//  console.log(trueAge5); // true - хоть и только один - истинный
 
//  // ! после приведения к булю, меняет его значение на противоположное
//  console.log(!true); // false
//  console.log(!false); // true
 
//  console.log(!1); // false
//  console.log(!!1); // true - двойное отрицание
 
//  console.log(!0); // true
//  console.log(!!0); // false - двойное отрицание
 
//  console.log(!"cat"); // false
 
//  // приоритет выполнения логических операторов
//  const quantity = 50;
 
//  // && выше приоритет, чем у ||
//  console.log((false && true) || true); // true
//  //                  (false) || true
//  console.log(false && (true || true)); // false
//  //          false && (true); // false
//  // если || - true, то && НЕ вычисляется
//  console.log((quantity > 39 && quantity < 49) || quantity > 48); // true
//  //                           (true && false) || true; // true
//  //                                     false || true; // true
//  console.log((true && false) || "parrot"); // parrot
//  //                    false || parrot; // parrot
//  console.log((quantity > 51 && quantity < 53) || quantity > 48); // true
//  //                             false && true || true; // true
//  //                                     false || true; // true
//  console.log((quantity > 51 && quantity < 49) || quantity > 49); // true
//  //                            false && false || true; // true
//  //                                     false || true; // true
//  // если || - false, то && вычисляется
//  // при этом, если && тоже false - возвращается значение ||
//  // при этом, если && тоже true - возвращается значение &&
//  console.log((quantity > 51 && quantity < 51) || quantity > 52); // false
//  //                             false && true || false; // false
//  //                                     false || false; // false
//  console.log((quantity > 39 && quantity < 49) || quantity > 51); // false
//  //                             true && false || false; // false
//  //                                     false || false; // false
//  console.log((quantity > 39 && quantity > 49) || quantity > 51); // false
//                               true && true || false; // true
//  //                                      true || false; // true
//  console.log((quantity > 51 && quantity < 49) || quantity > 52); // false
//  //                            false && false || false; // false
//  // //                                     false || false; // false
//  console.log((false && true) || NaN); // NaN
//  //                    false || NaN; // NaN
//  console.log((false && false) || NaN); // NaN
//  //                     false || NaN; // NaN
//  console.log((true && true) || NaN); // true
//  //                    true || NaN; // true
//  console.log(NaN || (true && true) );
 
//  // ВЕТВЛЕНИЯ управляют потоком выполнения программы
 
//  // IF
//  // если условие выполняется (true), то код внутри {} выполнится
//  let cost;
//  const subscription = "pr";
 
//  if (subscription === "pro") {
//    cost = 100;
//  }
 
//  if (subscription === "pr") {
//    cost = 0;
//  }
 
//  if (subscription === "pr") {
//    cost = 34;
//  }
 
//  console.log(cost); // 100 || 0
 
// //  // IF ELSE
// //  let day = prompt("Enter today day please");
// //  let weekday;
 
// //  if (day === String("Saturday") || day === String("Sunday")) {
// //    weekday = "holiday";
// //  } else {
// //    weekday = "workday";
// //  }
// //  console.log(weekday);
 
// //  let value = prompt("Boolean value");
// //  let bool;
 
// //  if (value === "true" || value === "false") {
// //    bool = "Boolean";
// //  } else {
// //    bool = "It's not a Boolean";
// //  }
// //  console.log(value);
// //  console.log(bool);
 
//  // ELSE IF
//  // example 1 ---------
// //  let day = prompt("Enter today day please");
// //  let weekday;
 
// //  if (day === "Saturday" || day === "Sunday") {
// //    weekday = "holiday";
// //  } else if (
// //    day === "Monday" ||
// //    day === "Tuesday" ||
// //    day === "Wednesday" ||
// //    day === "Thursday" ||
// //    day === "Friday"
// //  ) {
// //    weekday = "workday";
// //  } else {
// //    weekday = "Invalid entered data";
// //  }
// //  console.log(day);
// //  console.log(weekday);
 
//  // example 2 ---------
//  let studentAge = prompt("Enter your age please");
//  let group;
 
//  if (studentAge > 11 && studenAge < 15) {
//    group = "Junior";
//  } else if (studentAge > 14 && studentAge < 18) {
//    group = "Middle";
//  } else {
//    group = "Your age is not valid for children group. Please apply to manager.";
//  }
//  console.log(studentAge);
//  console.log(group);
 
//  // ТЕРНАРНЫЙ ОПЕРАТОР == IF ELSE
// //  example 1 ---------
// //  let answer;
// //  let question = confirm("Are you student?");
 
// //  if (question === true) {
// //    answer = "yes";
// //  } else {
// //    answer = "no";
// // //  }
 
// //  answer = question === true ? "yes" : "no";
 
// //  console.log(answer);
 
//  // SWITCH для множества вариантов ответов
 
// //  let day = prompt("Enter today day please");
// //  let weekday;
 
// //  switch (day) {
// //    case "Monday":
// //      weekday = "the worst workday at week";
// //      break;
 
// //    case "Tuesday":
// //      weekday = "a bit better workday";
// //      break;
 
// //    case "Wednesday":
// //      weekday = "a workday and so it`s a small Friday)";
// //      break;
 
// //    case "Thursday":
// //      weekday = "a strange workday";
// //      break;
 
// //    case "Friday":
// //      weekday = "the best workday";
// //      break;
 
// //    case "Saturday":
// //      weekday = "holiday";
// //      break;
 
// //    case "Sunday":
// //      weekday = "holiday";
// //      break;
 
// //    default:
// //      alert("Invalid entered data");
// //      weekday = "invalid data";
// //  }
// //  console.log(`${day} is ${weekday}`); // undefined, если ввели невалидный день
 
//  // ОБЛАСТЬ ВИДИМОСТИ === VARIABLE SCOPE
//  // 1. GLOBAL SCOPE (default)
//  // 2. BLOCK SCOPE
//  // example 1 ---------
// //  let myFirstName = "Sasha";
 
// //  if (true) {
// //    console.log("BLOCK scope:", myFirstName); // BLOCK scope: Sasha
// //  }
// //  console.log("GLOBAL scope:", myFirstName); // GLOBAL scope: Sasha
 
// //  if (true) {
// //    let mySecondName = "Hrevtsova";
// //    console.log("BLOCK scope:", mySecondName); // BLOCK scope: Hrevtsova
// //  }
// //  console.log("GLOBAL scope:", mySecondName); // GLOBAL scope: Uncaught ReferenceError: mySecondName is not defined
 
//  // example 2 ---------
// //  const global = "global!!!";
 
// //  if (true) {
// //    const blockA = "block A";
// //    console.log(blockA); // block A
// //    console.log(global); // global
// //     //  console.log(blockB); // Uncaught ReferenceError: blockB is not defined at module1.js:463
// //    //   console.log(blockC); // Uncaught ReferenceError: blockB is not defined at module1.js:464
 
// //    if (true) {
// //      const blockB = "block B";
// //      console.log(global); // global
// //      console.log(blockA); // block A
// //      console.log(blockB); // block B
//     //  console.log(blockC); // Uncaught ReferenceError: blockB is not defined at module1.js:471
// //    }
// //  }
 
// //  if (true) {
// //    const blockC = "block C";
// //    console.log(blockC); // block C
// //    console.log(global); // global
//     //  console.log(blockA); // ReferenceError: blockA is not defined
// //    //   console.log(blockB); // ReferenceError: blockB is not defined
// //  }
 
// //  console.log(global); // global
// //  console.log(blockA); // ReferenceError: blockA is not defined
// //  console.log(blockB); // ReferenceError: blockB is not defined
// //  console.log(blockC); // ReferenceError: blockC is not defined
 
//  // // 3. EVAL SCOPE
//  // // 4. FUNCTION SCOPE
 
//  // ЦИКЛЫ
 
//  // WHILE выполняется пока истинно условие, которое проверяется до выполнения тела цикла,
//  // если условие ложно изначально, тело цикла не выполнится ни разу
//  // example 1 ---------
// //  let counter = 0;
 
// //  while (counter <= 10) {
// //    console.log("counter: ", counter);
// //    counter += 1;
// //  }
 
//  // example 2 ---------
// //  let clientCounter = 18;
// //  const maxClients = 25;
 
// //  while (clientCounter <= maxClients) {
// //    console.log(clientCounter);
// //    clientCounter += 1;
// //  }
 
//  // DO WHILE условие проверяется после выполнения тела цикла, всегда минимум 1 итерация
// //  let password = "";
 
// //  do {
// //    password = prompt("Введите пароль длиннее 4-х символов", "");
// //  } while (password.length < 5);
 
// //  console.log("Ввели пароль: ", password);
 
// //  FOR цикл со счетчиком
// //  example 1 ---------
// //  const max = 100;
 
// //  for (let i = 10; i <= max; i += 5) {
// //    console.log(i);
// //  }
 
//  // example 2 ---------
//  // посчитаем сумму чисел до определенного значения
// //  const target = 4;
// //  let sum = 0;
 
// //  for (let i = 0; i <= target; i += 1) {
// //    console.log(i);
// //    sum += i;
// //  }
// //  console.log(sum);
 
//  // example 3 ---------
// //  выведем остаток от деления
// //  const max = 10;
 
// //  for (let i = 0; i < max; i += 1) {
// //    console.log(`${max} % ${i} = `, max % i);
// //  }
 
//  // BREAK полностью выходит из цикла
// //  for (let i = 0; i < 10; i += 1) {
// //    if (i === 5) {
// //      console.log("Дошли до 5-й итерации, прерываем цикл!");
// //      break;
// //    }
// //  }
 
//  // CONTINUE только прерывает исполнение текущей итерации
//  const number = 10;
 
//  for (let i = 0; i < number; i += 1) {
//    if (i % 2 === 0) {
//      continue;
//    }
 
//    console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
//  }
 




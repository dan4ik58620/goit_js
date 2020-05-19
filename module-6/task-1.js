"use strict"

import * as allUsers from "/users.js";
let users = allUsers.default;
console.log("массив объектов пользователей", users);

// ================ 1====================

const getUserNames = (users) => {
    return users.map(user => user.name);
  };

  console.log(getUserNames(users));
[
  "Moore Hensley",
  "Sharlene Bush",
  "Ross Vazquez",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
];
// ================ 2 ====================

const getUsersWithEyeColor = (users, color) => {
return users.filter(user => user.eyeColor === color);
};
console.log(getUsersWithEyeColor(users, "blue"));

// ================ 3 ====================

const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender).map(user => user.name);
};
console.log(getUsersWithGender(users, "male"));

// ================ 4 ====================

const getInactiveUsers = (users) => {
  return users.filter(user => !user.isActive);
};
console.log(getInactiveUsers(users));

// ================ 5 ====================
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email)
};
 
console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
 
// ================ 6 ====================
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
 
const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => users.age >= min && users.age < mac)
};
 
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
 
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
 
// ================ 7 ====================
// Получить общую сумму баланса (поле balance) всех пользователей.
 
const calculateTotalBalance = (users) => {
return users.reduce((acc, user) => acc + user.balance, 0);
};
 
console.log(calculateTotalBalance(users)); // 20916
 
// ================ 8 ====================
// Массив имен всех пользователей у которых есть друг с указанным именем.
 
const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => user.friends.indexOf(friendName) !== -1).map(user => user.name);
};
 
console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
 
// ================ 9 ====================
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
 
const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
};

console.log("task 9: ", getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
 
// ================ 10 ====================
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
 
const getSortedUniqueSkills = (users) => {
  return users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .filter((user, index, arr) => arr.indexOf(user) === index)
    .sort();
};
 
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]













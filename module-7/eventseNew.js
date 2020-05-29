"use strict";

const btn1 = document.querySelector("#single");
console.log(btn1);

const btn2 = document.querySelector("#multiple");
console.log(btn2);

function onClick() {
  alert("Вы нажали на кнопку!");
}

btn1.addEventListener("click", onClick);

function firstClick() {
  btn2.style.color = "red";
}

function secondClick() {
  btn2.style.border = "1px solid red";
}

function thirdClick() {
  alert("Вы нажали на вторую кнопку!");
}

// btn2.addEventListener("click", firstClick);

// btn2.addEventListener("click", secondClick);

// btn2.addEventListener("click", thirdClick);

btn2.addEventListener("click", () => {
  firstClick();
  secondClick();
  thirdClick();
});

//СЛУШАТЕЛЬ СОБЫТИЙ В КОНТЕКСТЕ this

const user = {
  name: "Dan",
  showName() {
    console.log(this);
    alert(`my Name is ${this.name}`);
  },
};
// user.showName();

btn2.addEventListener("click", user.showName.bind(user));

//ОТМЕНА ДЕЙСТВИЙ БРАУЗЕРА ПО УМОЛЧАНИЮ

const form = document.querySelector(".form");
const loginInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');

console.log(form, loginInput, passwordInput);

function getForm(formSubmit) {
  formSubmit.preventDefault();

  console.dir("Разметка инпута", loginInput);
  console.log("Значение из инпута:", loginInput.value);
  console.log("Значение из инпутов без пробелов", loginInput.value.trim());

  const login = loginInput.value.trim(); //убирает пробелы
  const password = passwordInput.value.trim();

  if (login === "" || password === "") {
    return alert("Заполните оба поля!");
  }
  form.reset();
  alert("Спасибо за рег!");
  console.log(login, password);
}

form.addEventListener("submit", getForm);

// СВОСЙСТВА key(значение клавиши) и code(имя клавиши)

const btn3 = document.querySelector('button[data-action="clear"]');
const logList = document.querySelector(".log-list");
console.log(btn3);

function logMsg({ type, key, code }) {
  const msg = document.createElement("div");

  const title = document.createElement("h2");
  title.textContent = `${type} событие`;
  const content = document.createElement("p");
  content.textContent = `значение key ${key}, а значение code ${code}`;

  msg.append(title, content);
  logList.append(msg);
}

btn3.addEventListener("click", () => {
  logList.innerHTML = "";
});

window.addEventListener("keydown", logMsg);
window.addEventListener("keyup", logMsg);
console.log(btn3, logList);

function showGreet() {
  const modalGreet = document.createElement("h2");
  modalGreet.textContent = "добро пожаловать!";
  modalGreet.classList.add("modalGreet");
}

document.addEventListener("DOMContentLoadef", showGreet);

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const innerChild = document.querySelector("#innerChild");

function parentClickHandler() {
  alert("parent click");
}

function childClickHandler() {
  alert("child click");
}

function innerChildClickHandler() {
  alert("innerChild click");
}

parent.addEventListener("click", parentClickHandler);
child.addEventListener("click", childClickHandler);
innerChild.addEventListener("click", innerChildClickHandler);

const objectClick = (event) => {
  console.log(event);
  console.log(event.type);
  console.log(this);
  console.log(event.target);
  console.log(event.curentTarget);
};

innerChild.addEventListener("click", objectClick);

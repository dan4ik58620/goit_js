"use strict";

// Document Object Model, сокращённо DOM – объектная модель документа,
// которая представляет все содержимое страницы в виде объектов,
// которые можно менять.

// BOM (Browser Object Model, Объектная модель браузера) — межплатформенный,
// независимый от языка интерфейс для работы с окном браузера.

// Объект document – основная «входная точка».
// С его помощью мы можем что-то создавать или менять на странице.

console.log("HTML разметка", document); // html
console.dir(document); // object

// Типы элементов:
// узел-элемент (тег) - element node
// текстовый узел (текст внутри и между тегами) - text node
// узел-комментарий

// ИЕРАРХИЯ УЗЛОВ
// root node - корневой узел
// ansector - предок
// descendant - потомок
// parent - родитель
// child - ребенок
// sibling - брат, узел с общим родителем

// ОБРАЩЕНИЕ к узлам

// document.querySelector - до первого совпадения, используется для уникальных элементов
const homeMenuItem = document.querySelector("li");
console.log(homeMenuItem); // один (первый) элемент li

// document.querySelectorAll - выбор ВСЕХ элементов списка с указанным селектором
const menuItems = document.querySelectorAll("li");
console.dir(menuItems); // псевдомассив элементов списка

// НАВИГАЦИЯ по DOM

// document.parentNode - - выберет родителя elem
console.log(homeMenuItem.parentNode); // ul

// document.childNodes - псевдо-массив хранит все дочерние элементы, включая текстовые.
console.log(homeMenuItem.childNodes); // NodeList [a]

// document.children - псевдо-массив хранит только дочерние узлы-элементы, то есть соответствующие тегам.
console.log(homeMenuItem.children); // HTMLCollection [a]

// document.firstChild - выберет первый дочерний элемент внутри elem, включая текстовые узлы.
console.log(homeMenuItem.firstChild); // a

// document.firstElementChild - выберет первый дочерний узел-элемент внутри elem.
console.log(homeMenuItem.firstElementChild); // a

// document.lastChild - выберет последний дочерний элемент внутри elem, включая текстовые узлы.
console.log(homeMenuItem.lastChild); // a

// document.lastElementChild - выберет последний дочерний узел-элемент внутри elem.
console.log(homeMenuItem.lastElementChild); // a

// document.previousSibling - выберет элемент "слева" от elem (его предыдущего соседа)
console.log(homeMenuItem.previousSibling); // #text

// document.previousElementSibling - выберет узел-элемент "слева" от elem (его предыдущего соседа)
console.log(homeMenuItem.previousElementSibling); // null

// document.nextSibling - выберет элемент "справа" от elem (его следующего соседа)
console.log(homeMenuItem.nextSibling); // #text

// document.nextElementSibling - выберет узел-элемент "справа" от elem (его предыдущего соседа)
console.log(homeMenuItem.nextElementSibling); // li

// 1 обращение к элементу через класс
// const button = document.querySelector(".js-btn"); // получаем доступ к узлу-элементу (тег <р>)
// console.log("HTML разметка", button);
// console.dir(button);

// 2 HTM5 data-атрибуты
const button = document.querySelector('button[data-action="action"]');
console.log("button data-action: ", button.dataset.action);
console.log("button data-random: ", button.dataset.random);

// свойство element.textContent
button.textContent = "Hello, WORLD!!!";

// свойство element.style
button.style.backgroundColor = "red";
button.style.width = "300px";
button.style.fontSize = "28px";

// свойство element.classList
console.log("массив классов узла: ", button.classList);

// методы массива классов узла

// contains(cls) - возвращает true или false, в зависимости от того, есть ли у элемента класс cls
console.log(button.classList.contains("js-list_btn")); // false
console.log(button.classList.contains("p")); // true
console.log(button.classList.contains("text")); // true

// add(cls) - добавляет класс cls в список классов элемента
button.classList.add("js-list_btn");
console.log(button.classList); // ["p", "text", "js-list_content", (value: "p text js-list_content")];
console.log(button.classList.contains("js-list_btn")); // true

// remove(cls) - удаляет класс cls из списка классов элемента
button.classList.remove("text");

//replace(oldClass, newClass) - заменяет текущийкласс на новый
button.classList.replace("js-list_content", "js-item_text");

// toggle(cls) - если класса cls нет, добавляет его, если есть, удаляет
button.classList.toggle("js-item_text");

// АТРИБУТЫ
const image = document.querySelector(".js-img");
console.dir(image);
// 1
// image.alt = "picture";
// image.width = image.width / 1.5;
// image.height = image.height / 1.5;
// image.name = "Beautiful"; // добавлен новый итрибут
// image.src = "./img/2.jpeg";

console.log(image.attributes);
// 2
image.setAttribute("alt", "item image");
image.setAttribute("src", "./img/4.jpeg");

console.log(image.hasAttribute("name")); // false
console.log(image.getAttribute("src")); // ./img/4.jpeg
image.removeAttribute("alt");

// Создание и добавление элемента
const menu = document.querySelector(".menu");
console.log(menu);
menu.style.border = "3px solid yellow";

// 1 - createElement()
const headerNavItem = document.createElement("li");
// console.log(headerNavItem);
headerNavItem.classList.add("menu-item");

const navItemLink = document.createElement("a");
// console.log(navItemLink);
navItemLink.setAttribute("href", "#");
navItemLink.textContent = "news";
navItemLink.style.color = "red";

const insertBefore = document.createElement("p");
// console.log(text);
insertBefore.textContent = "<p> insertBefore li";
insertBefore.style.color = "green";

// appendChild() - метод добавления 1 элемента в конец родителя
headerNavItem.appendChild(navItemLink);
menu.appendChild(headerNavItem);

// insertBefore(elem, nextSibling) - добавит элемент перед указанным
menu.insertBefore(insertBefore, headerNavItem);

const appendItem = document.createElement("p");
console.log(appendItem);
appendItem.textContent = "appendItem";
appendItem.style.textTransform = "camelcase";
appendItem.style.color = "violet";

// append() - метод добавления 1 или нескольких элементов в конец родителя
menu.append(appendItem);

const prependItem = document.createElement("p");
console.log(prependItem);
prependItem.textContent = "prependItem";
prependItem.style.textTransform = "camelcase";
prependItem.style.color = "violet";

// prepend() - метод добавления 1 или нескольких элементов в начало родителя
menu.prepend(prependItem);

const beforeItem = document.createElement("p");
console.log(beforeItem);
beforeItem.textContent = "before Item";
beforeItem.style.textTransform = "uppercase";
beforeItem.style.color = "violet";
// before() - добавляет nodes перед узлом elem
menu.before(beforeItem);

const afterItem = document.createElement("p");
console.log(afterItem);
afterItem.textContent = "after Item";
afterItem.style.textTransform = "uppercase";
afterItem.style.color = "violet";
// after() - добавляет nodes после узла elem
menu.after(afterItem);

const headerBottom = document.querySelector(".center");
console.log(headerBottom);

const nav = document.querySelector(".nav");
console.log(nav);

const replaceNav = document.createElement("h2");
console.log(replaceNav);
replaceNav.textContent = "New Title replace nav list";
replaceNav.style.fontSize = "36px";
replaceNav.style.textAlign = "center";
// replaceWith() - замена элемента
nav.replaceWith(replaceNav);

// Удаление элемента

// // старый способ - через родителя
menu.removeChild(prependItem);
menu.removeChild(appendItem);
menu.removeChild(insertBefore);

// // новый способ - напрямую через элемент
beforeItem.remove();
afterItem.remove();

// КЛОНИРОВАНИЕ
const header = document.querySelector("header");
const fullClone = menu.cloneNode(true);
header.prepend(fullClone);

const emptyClone = menu.cloneNode(false);
header.append(emptyClone);

// innerHTML - плохая практика!
console.log(header.innerHTML); // вернет разметку хэдэра

const blog = '<li class="menu-item"><a href="#">blog</a></li>';
// console.log(blog);
// header.innerHTML = blog; // заменит собой весь header
header.innerHTML += blog; // добавит элемент в header
// insertAdjacentHTML() - парсит строку как HTML и добавляет элемент
const insertHTMLtList = document.createElement("ul");
insertHTMLtList.classList.add("menu");
insertHTMLtList.style.border = "2px solid green";

const insertHTMLTitle = document.createElement("h2");
insertHTMLTitle.textContent = "method insertAdjacentHTML()";
insertHTMLTitle.style.textAlign = "center";

const insertELEMENTList = document.createElement("ul");
insertELEMENTList.classList.add("menu");
insertELEMENTList.style.border = "2px solid blue";

const insertELEMENTTitle = document.createElement("h2");
insertELEMENTTitle.textContent = "method insertAdjacentElement()";
insertELEMENTTitle.style.textAlign = "center";

const beforeBegin = document.createElement("p");
beforeBegin.textContent = "BEFORE BEGIN";
const afterBegin = document.createElement("p");
afterBegin.textContent = "AFTER BEGIN";
const beforeEnd = document.createElement("p");
beforeEnd.textContent = "BEFORE END";
const afterEnd = document.createElement("p");
afterEnd.textContent = "AFTER END";

header.append(
  insertHTMLTitle,
  insertHTMLtList,
  insertELEMENTTitle,
  insertELEMENTList
);

insertHTMLtList.insertAdjacentHTML("beforebegin", "<p>BEFORE BEGIN</p>");
insertHTMLtList.insertAdjacentHTML("afterbegin", "<p>AFTER BEGIN</p>");
insertHTMLtList.insertAdjacentHTML("beforeend", "<p>BEFORE END</p>");
insertHTMLtList.insertAdjacentHTML("afterend", "<p>AFTER END</p>");

insertELEMENTList.insertAdjacentElement("beforebegin", beforeBegin);
insertELEMENTList.insertAdjacentElement("afterbegin", afterBegin);
insertELEMENTList.insertAdjacentElement("beforeend", beforeEnd);
insertELEMENTList.insertAdjacentElement("afterend", afterEnd);

// insertAdjacentText(position, text)
insertHTMLtList.insertAdjacentText("beforebegin", "added text node");
insertHTMLtList.insertAdjacentText("afterbegin", "added text node");

insertELEMENTList.insertAdjacentText("beforeend", "added text node");
insertELEMENTList.insertAdjacentText("afterend", "added text node");

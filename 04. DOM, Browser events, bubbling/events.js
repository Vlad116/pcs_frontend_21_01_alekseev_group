"use strict";
let previousScrollY = 0;

// window.addEventListener('scroll', (event) => {
//     console.log(window.scrollY);
//     const header = document.getElementById('header');
//
//     if (window.scrollY > previousScrollY && window.scrollY > 50) {
//         header.style.display = 'none';
//     } else {
//         if (window.scrollY < previousScrollY) {
//             header.style.display = '';
//         }
//     }
//
//     previousScrollY = window.scrollY;
// });

const square1 = document.querySelector(".square-1");
const square2 = document.querySelector(".square-2");
const square3 = document.querySelector(".square-3");

square1.addEventListener(
  "click",
  () => {
    console.log("square-1 click погружение");
  },
  true
);

square2.addEventListener(
  "click",
  () => {
    console.log("square-2 click погружение");
  },
  true
);

square3.addEventListener(
  "click",
  () => {
    console.log("square-3 click погружение");
  },
  true
);

document.addEventListener(
  "click",
  () => {
    console.log("click anywhere погружение");
  },
  true
);

square1.addEventListener("click", () => {
  console.log("square-1 click всплытие");
});

square2.addEventListener("click", () => {
  console.log("square-2 click всплытие");
});

square3.addEventListener("click", () => {
  console.log("square-3 click всплытие");
});

document.addEventListener("click", () => {
  console.log("click anywhere всплытие");
});

// https://learn.javascript.ru/event-bubbling#prekraschenie-vsplytiya
// stopPropagation();
// 	Для остановки всплытия нужно вызвать метод event.stopPropagation().
// stopImmediatePropagation();
// 	Для того, чтобы полностью остановить обработку, современные браузеры поддерживают метод event.stopImmediatePropagation().
// 	Он не только предотвращает всплытие, но и останавливает обработку событий на текущем элементе.

const button = document.querySelector(".button");

button.addEventListener("click", (event) => {
  console.log(event.currentTarget);
  console.log("Кнопка клик 1");
  event.preventDefault();
  //   event.stopPropagation();
  // event.stopImmediatePropagation();
});

// Многие события автоматически влекут за собой действие браузера.
//
// Например:
//
// Клик по ссылке инициирует переход на новый URL.
// 	- Нажатие на кнопку «отправить» в форме – отсылку её на сервер.
// 	- Зажатие кнопки мыши над текстом и её движение в таком состоянии – инициирует его выделение.
// 	- Если мы обрабатываем событие в JavaScript, то зачастую такое действие браузера нам не нужно. К счастью, его можно отменить.
//((!) Для отмены действия браузера существует стандартный метод event.preventDefault().

button.addEventListener(
  "click",
  (event) => {
    event.preventDefault();
    console.log("Кнопка клик 2");
    event.stopImmediatePropagation();
  },
  true
);

const input = document.querySelector("[name=input]");
console.log({ input });

function inputHandler(event) {
  console.log(event.target.value);
  if (event.target.value === "red") {
    input.style.border = "1px solid green";
    event.target.value = "green";
  }
}

input.addEventListener("input", inputHandler);
input.addEventListener("input", () => console.log("Анонимная функция"));

// input.oninput = () => {console.log('oninput');}

input.removeEventListener("input", inputHandler);
input.removeEventListener("input", () => console.log("Анонимная функция"));

window.addEventListener("mousedown", (event) => {
  console.log(event.offsetX, event.offsetY);
});

window.addEventListener("mouseup", (event) => {
  console.log(event.offsetX, event.offsetY);
});

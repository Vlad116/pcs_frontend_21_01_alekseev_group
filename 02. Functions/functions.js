
// +, -, *, /
// isNaN() - функция для проверки на NaN значение
const firstValue = 4;
const secondValue = 6;
const mathOperator = prompt('Введите знак!');

// Получение буквы из строки по индексу, по факту строка это как массив символов
// const someString = 'TestString';
// console.log(someString[2])

// Объект в котором по значению получаем функцию выполняющую нужную арифметическую операцию.
const mathOperators = {
    '+': (a,b) => { return a + b },
    '-': (a,b) => { return a - b },
    '*': (a,b) => { return a * b },
    '/': (a,b) => { return a / b }
}

/* 
   Применяем встроенный метод keys Object'a для получения массива всех ключей объекта
   У самоого массива ключей применили стандартный метод includes() - 
   который вернет значение (boolean типа) в зависимости от того,
   содержиж ли массив проверяемое значение 
*/

if(Object.keys(mathOperators).includes(mathOperator)) {
    const result = mathOperators[mathOperator](firstValue, secondValue);
    console.log(result);
}

function sayHello(message) {
    console.log(`Hello ${message}!`)
}

const sayHelloArrowFunction = (message = 'world') => {
    console.log(`Hello ${message}!`);
    return `Hello ${message}!`;
}

const newMessage = sayHello('Denis');

// IIFE
// (() => {
// })()
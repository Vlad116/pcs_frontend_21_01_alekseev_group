
// +, -, *, /
// isNaN() - функция для проверки на NaN значение
// const firstValue = 4;
const secondValue = 6;
const mathOperator = prompt('Введите знак!');

// Получение буквы из строки по индексу, по факту строка это как массив символов
const someString = 'TestString';
console.log(someString[2])

// Объект в котором по значению получаем функцию выполняющую нужную арифметическую операцию.
const mathOperators = {
    '+': (a,b) => { return a + b },
    '-': (a,b) => { return a - b },
    '*': (a,b) => { return a * b },
    '/': (a,b) => { return a / b }
}

// /* 
//    Применяем встроенный метод keys Object'a для получения массива всех ключей объекта
//    У самоого массива ключей применили стандартный метод includes() - 
//    который вернет значение (boolean типа) в зависимости от того,
//    содержиж ли массив проверяемое значение 
// */

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

// const newMessage = sayHello('Denis');

// IIFE
(() => {
})()

// function makeFibonacciFunction() {
//     // реализация функции-помощника
// }

// const fibonacci = (() => {
// 	let a,b,c;
// 	return function () {
// 		// console.log(c)
// 	}
// })() // some magic...
// 
// fibonacci(); // Вывод в консоль: 1
// fibonacci(); // Вывод в консоль: 1
// fibonacci(); // Вывод в консоль: 2
// fibonacci(); // Вывод в консоль: 3
// fibonacci(); // Вывод в консоль: 5
// a=0,b=1;

const counter = (function() {
	let count = 0;
	return function() {
		count += 1;
		console.log(count);
		return count;
	}
})() 





counter(); 
counter();
counter(); 
counter();

const person = {
    name: 'Andrew',
    lastName: 'Gulin',
    body: {
        height: 175,
        age: 25
    }
};

let person1 = {
    name: 'Andrew',
    lastName: 'Gulin',
    body: {
        height: 175,
    }
};

person1 = person

console.log(person === person1)
console.log(person.name)
console.log(person.body.age)
// ошибку Cannot read property age of undefined
console.log(person1.body?.age)

person.body.age = 18;
person.city = 'Berlin';
console.log(person)
// let obj = new Object();
// obj = {}
let arr = [];
arr = ['яблоко', 'банан', 'персик']; // массив строк

console.log(arr.indexOf('банан'))

const index = arr.findIndex((item) => {
    // Если длина элемента равна 4.
    // Ищем первый такой и возвращаем его index
    return item.length === 5;
})

console.log(index)

// Массив объектов
const objectsList = [
    {
        name: 'Andrew',
        lastName: 'Gulin'
    },
    {
        name: 'Boris',
        lastName: 'Ivanov'
    },
    {
        name: 'Alexey',
        lastName: 'Petrov'
    }
]

console.log(objectsList[1]['name'])
console.log(objectsList.length - 1)

arr.forEach(function(item, index, arr) {
	console.log(index + ": " + item + " (массив:" + arr + ")");
})

arr.push('помидор');

const onlyFruits = arr.filter(function(value) {
	return value !== 'помидор';
})

console.log(onlyFruits)

const lengths = arr.map(function(value) {
	return value.length
})

console.log(lengths)

arr = [1, -1, 2, -2, 3];


function isPositive(number) {
	return number > 0;
}

console.log(arr.every(isPositive))
console.log(arr.some(isPositive))

arr = [1, 2, 3, 4, 5]

// для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее
let result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);

const objectsList1 = [
    {
        name: 'Andrew',
        lastName: 'Gulin',
		age: 34,
    },
    {
        name: 'Boris',
        lastName: 'Ivanov',
		age: 18
    },
    {
        name: 'Alexey',
        lastName: 'Petrov',
		age: 40
    }
]

const newObj = objectsList1.reduce(function(acc, current) {
	acc[current.name] = current.age;
	return acc
}, {})

console.log(newObj)

const lastElem = onlyFruits.pop()

// new Array()

// Массив (Array)

// Set

// Map
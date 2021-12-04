// Колбэки

// Многие действия в JavaScript асинхронные.
// Например, рассмотрим функцию loadScript(src):

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`));
  document.head.append(script);
}

loadScript('/my/script.js', () => { 
	newFunction()
	loadScript('/my/script1.js', function(error, script) {
		if (error) {
		  // обрабатываем ошибку
		} else {
			console.log("script1")
			loadScript('/my/scrip3.js', function(error, script) {
				if (error) {
				  // обрабатываем ошибку
				} else {
					console.log("script3 loaded!")
				  // скрипт успешно загружен
				}
			  });
		  // скрипт успешно загружен
		}
	  });
	return
});

const promise = new Promise ((resolve, reject) => {
	loadScript('/my/script.js')
})

promise.then(() => { 
	newFunction()
	loadScript('/my/script1.js')
}).then(() => {

})




loadScript('/my/script.js', function(error, script) {
	if (error) {
	  // обрабатываем ошибку
	} else {
	  // скрипт успешно загружен
	}
  });

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Здорово, скрипт ${script.src} загрузился`);
  alert( _ ); // функция, объявленная в загруженном скрипте
});

// Promise
let promise = new Promise(function(resolve, reject) {
	// эта функция выполнится автоматически, при вызове new Promise
  
	// через 1 секунду сигнализировать, что задача выполнена с результатом "done"
	setTimeout(() => resolve("done"), 1000);
});

let promise = new Promise(function(resolve, reject) {
	// эта функция выполнится автоматически, при вызове new Promise
  
	// через 1 секунду сигнализировать, что задача выполнена с результатом "done"
	setTimeout(() => resolve("done"), 1000);
  });

// Такие функции называют «асинхронными», потому что действие (загрузка скрипта) 
// будет завершено не сейчас, а потом.
// код, написанный после вызова функции loadScript,
// не будет дожидаться полной загрузки скрипта

// ...

// Async/await
// Существует специальный синтаксис для работы с промисами, 
// который называется «async/await». 
// Он удивительно прост для понимания и использования.

async function f() {
	return 1;
}

f().then(alert);

// У слова async один простой смысл: эта функция всегда возвращает промис. 
// Значения других типов оборачиваются в завершившийся успешно промис автоматически.

// работает только внутри async–функций
let value = await promise;

/* await заставит интерпретатор JavaScript ждать до тех пор, 
пока промис справа от await не выполнится. 
После чего оно вернёт его результат, и выполнение кода продолжится. */

async function f() {

	let promise = new Promise((resolve, reject) => {
	  setTimeout(() => resolve("Изучаем промисы!"), 1000)
	});
  
	let result = await promise; // будет ждать, пока промис не выполнится (*)
  
	alert(result); // "готово!"
  }
  
  f();

fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then((data) => {
        console.log(data.data);
		console.log(data.data.reduce((accumulator, item, index) => {
			accumulator += `${item.first_name} ${item.last_name} ${index !== data.length ? ',' : '.'}`;
			baseDataUsers = baseDataUsers + accumulator;
			return accumulator;
		}, 'Наша база содержит данные следующих пользователей: ')) 
    });
	
// https://gitlab.com/maxima-it-school/pcs_frontend_21_01/-/tree/master/Lectures/22.%20Arrays,%20Set,%20Map,%20Objects%20methods

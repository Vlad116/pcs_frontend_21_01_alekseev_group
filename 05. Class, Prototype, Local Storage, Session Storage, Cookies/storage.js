/*
	sessionStorage – очень волатильное хранилище. 
	Оно не хранится долго. К нему можно относиться, как к текстовому документу без кнопки "Сохранить". 
	Все в нем хранящееся превратится в прах, стоит вам закрыть вкладку браузера. 
	Ну, почти. Чисто технически кое-какой JavaScript может перед этим отослать данные на удаленный сервер, который запомнит их для вас.
*/

sessionStorage.setItem("name", "Jonathan");
let data = sessionStorage.getItem("name");
console.log(data);

/* 
	Если вы хотите удалить сохраненную переменную, то можете использовать 
	  sessionStorage.removeItem('name') или просто sessionStorage.clear();.
*/

/*
	Давайте поговорим о чем-нибудь более занимательном: localStorage. 
	В отличие от sessionStorage оно сохраняет свои данные для всего приложения, т.е. вашего сайта. 
	С целью безопасности браузер прикрепляет записи к домену сайта, так что вы можете хранить там относительно секретную информацию. 
	Другие сайты не смогут её прочитать.
*/
// const toogleBtn = document.querySelector('#toggleDark');
//
// toogleBtn.addEventListener('click', () => {
//
// });

// jQuery("#toggleDark").click(function () {
// 	jQuery("body").toggleClass("dark");
// 	if (jQuery(this).text() == "Тёмная тема") {
// 		jQuery(this).text("Светлая тема")
// 		localStorage.setItem("darkTheme", true);
// 	}
// 	else {
// 		jQuery(this).text("Тёмная тема");
// 		localStorage.setItem("darkTheme", false);
// 	}
// });
//
// if (localStorage.getItem("darkTheme") === "true") {
// 	jQuery("body").toggleClass("dark");
// 	jQuery("#toggleDark").text("Светлая тема");
// }

/*
	Cookies стали привычным объектом ограничений законов о приватности и используются на всех сайтах с авторизацией по логину и паролю. 
	Cookies тоже являются domain specific, то есть привязаны только к конкретному домену, могут храниться очень долго. 
	Но, в отличие от прошлых хранилищ, они отправляются с каждым HTTP/HTTPS запросом на сервер. 
	Их можно читать и записывать со стороны сервера. При записи они будут добавлены в HTTP ответ, чтобы браузер пользователя их запомнил.
*/

// Во фронтенде вы будете работать с cookies через объект document.cookie. Давайте попробуем поработать с cookies.

document.cookie = "my_favourite_ice_cream" + "=" + "vanilla";
document.cookie = "my_favourite_burger" + "=" + "cheeseburger";
console.log(document.cookie);
// my_favourite_ice_cream=vanilla;
// my_favourite_burger=cheeseburger

/*
	Cookies могут быть также заданы и сервером, т.е. вам не нужно пересылать данные с сервера, чтобы потом выполнить JS на клиенте. 
	Для передачи Cookies клиенту можно просто включить в ответ HTTP заголовки:

		HTTP/2.0 200 OK
		Content-type: text/html
		Set-Cookie: favourite_hero=aquaman
		Set-Cookie: favourite_khal=drogo

	Даже если вы можете работать напрямую с HTTP заголовками с вашим web фреймворком, не стоит этого делать. Обычно для работы с cookies есть заранее спроектированные функции.

	Или res.cookie в Express:

		// express
		res.cookie("cookieName", "cookieValue", { maxAge: 50000 });
*/

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## JSON Server

npm install -g json-server

### Файл данных

Cоздаем в корне проекта файл db.json:

- В нем ключи обьекта будут являться роутами api и отдавать данные по данной сущности

`{
    "products": [
		 {
			"id": 0,
			"title": "Происхождение",
			"author": "Дэн Браун",
			"image": "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
			"price": 710,
			"rating": 3
		}, 
		...
  	],
  	"users": [
      {
	  	"id": 0,
       	"email": ...,
        "passwordHash": ...,
        "login": ...,
        "name": "Дэн Браун",
      },
  	]
}`

GET    /products - получение всех товаров 
GET    /products/1 - получение данных о товаре с id - 0 
(в структуре обьекта обязательно поле id должно быть:
		
`{
	"id": 0, (!!!)
	"title": "Происхождение",
	"author": "Дэн Браун",
	"image": "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
	"price": 710,
	"rating": 3
},`
    ...

POST   /products - добавление товаров списком
PUT    /products/1 - изменение опредленного товара в бд
PATCH  /products/1
DELETE /products/1 - удаление товара из бд

https://www.npmjs.com/package/json-server - подробнее информация о возможных функциях

### Создаем скрипт сервера

Тоже в корне проекта создаем файл json-server.js

для дефолтного сервера:
`
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json') // тут путь к вашему json в котором данные хранятся или их структура просто, если нет предзаполненных
const middleware = jsonServer.defaults()

server.use((req, res, next) => {
	setTimeout(next, 1000)
})
server.use(middleware)
server.use(router)
server.listen(3000, () => {
	console.log(`JSON Server is running...`)
})
`

### Запуск

открываем вторую консоль и вводим:
  
  `json-server --watch db.json --port 4000` ( по факту любой свободный порт не 3000 прописываете просто, 3000 для самого реакт приложения занят будет)
  

  --id, -i           Set database id property (e.g. _id)         [default: "id"] - можно указать как id сущности и другое поле, если у вас не id а uuid например или ещее по другому как-нибудь, но лучше просто везде "id" присваивать

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

import React, { useState, useEffect } from 'react';
import { Card, Container } from 'semantic-ui-react';
import Menu from '../components/Menu/Menu'
import Filter from '../components/Product/Filter/Filter';
import ProductCard from '../components/Product/ProductCard/ProductCard'
import { getData } from '../utils/api.js'

const Shop = () => {
	const [totalPrice, setTotalPrice] = useState(0)
	const [count, setCount] = useState(0)
	const [filterBy, setFilter] = useState("all")
	const [searchQuery, setSearchQuery] = useState('')
	const [items, setItems] = useState([{
		"title": "Девушка в тумане", 
		"id": "1",
		"image": "https://cv0.litres.ru/sbc/30804904_cover_185-elektronnaya-kniga-mihail-zygar-imperiya-dolzhna-umeret.jpg" 
	}])

	console.log(filterBy)
	console.log(searchQuery)

	const [books, setBooks] = useState([])
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		if(isLoading) {
			console.log(getData("http://localhost:3005/products"))
			setBooks(
				getData("http://localhost:3005/products")
			)
		}
	}, [])

	console.log(books)

	// const [books, setBooks] = useState([
		// {
		// 	"id": 0,
		// 	"title": "Происхождение",
		// 	"author": "Дэн Браун",
		// 	"image": "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
		// 	"price": 710,
		// 	"rating": 3
		// },
		// {
		// 	"id": 1,
		// 	"title": "1984",
		// 	"author": "Джордж Оруэлл",
		// 	"image": "https://cv0.litres.ru/sbc/09233908_cover_185-elektronnaya-kniga--.jpg",
		// 	"price": 415,
		// 	"rating": 5
		// },
	// ])

	const [isReady, setIsReady] = useState(false)
	
	const onAddToCartHandler = () => {
		// setCount()
		// setTotalPrice()
	}

    return (
		<Container>
			<Menu totalPrice={totalPrice} count={count} items={items}/>
			<Filter setFilter={setFilter} filterBy={filterBy} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
			{/* <Card.Group itemsPerRow={4}>
				{
				// !isReady
				// 	? 'Загрузка...'
				// 	: 
				books.map((book, i) => <ProductCard key={i} 
					title={book.title} 
					author={book.author} 
					price={book.price} 
					image={book.image} 
					// addToCart={addToCart} 
					// addedCount={addedCount} 
				/>
				)}
			</Card.Group> */}
      	</Container>
    )
}

export default Shop;

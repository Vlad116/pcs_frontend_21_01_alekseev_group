import React, { useState, useEffect } from 'react';
import { Card, Container } from 'semantic-ui-react';
import Menu from '../components/Menu/Menu'
import Filter from '../components/Product/Filter/Filter';
import ProductCard from '../components/Product/ProductCard/ProductCard'

const Shop = () => {

	const [totalPrice, setTotalPrice] = useState(0)
	const [count, setCount] = useState(0)
	const [items, setItems] = useState([{
		"title": "Девушка в тумане", 
		"id": "1",
		"image": "https://cv0.litres.ru/sbc/30804904_cover_185-elektronnaya-kniga-mihail-zygar-imperiya-dolzhna-umeret.jpg" 
	}])

	const [books, setBooks] = useState([])
	const [isReady, setIsReady] = useState(false)
	
	const onAddToCartHandler = () => {
		// setCount()
		// setTotalPrice()
	}

    return (
		<Container>
			<Menu totalPrice={totalPrice} count={count} items={items}/>
			{/* <Filter /> */}
			{/* <Card.Group itemsPerRow={4}>
				{!isReady
					? 'Загрузка...'
					: books.map((book, i) => <ProductCard key={i} {...book} />)}
			</Card.Group> */}
      	</Container>
    )
}

export default Shop;

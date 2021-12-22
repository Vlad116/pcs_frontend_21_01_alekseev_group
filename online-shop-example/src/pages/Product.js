import React, { useState, useEffect } from 'react';
import { 
	Link as RouterLink,
	useParams 
} from "react-router-dom"
import Grid from "@mui/material/Grid";
import MaterialLink from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProductCard from '../components/Product/ProductCard/ProductCard'
import { getData } from '../utils/api.js'
import { host } from '../constants'

const Product = () => {
	const { productId } = useParams();
	const [product, setProduct] = useState({})
	const [isLoading, setLoading] = useState(false)
	console.log(productId)

	useEffect(() => {
		if(!isLoading) {
			setLoading(true)
			getData(`${host}/products/${productId}`).then((json) => {
				console.log(json)
				setProduct(json)
				setLoading(false)
			})
		}
	}, [])

    return (
        <div>
			<Grid item xs={12} sm={12} md={12} sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100%',
				paddingTop: '2vw',
				backgroundColor: '#03aaf9'
			}}>
				<Card sx={{ maxWidth: 345 }}>
					<MaterialLink component={RouterLink} to={`/product/${product.id}`}>
						<CardMedia
							component="img"
							height="140"
							image={product.image}
							alt="Card image"
						/>
					</MaterialLink>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div" className="ProductTitle">
							{product.title}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{product.author} {product.price}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="big" >Добавить в корзину</Button>
					</CardActions>
				</Card>
				{/* <ProductCard
					id={product.id}
					title={product.title} 
					author={product.author} 
					price={product.price} 
					image={product.image}/> */}
				</Grid>
        </div>
    )
}

export default Product;

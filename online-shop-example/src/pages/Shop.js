import React, { useState, useEffect } from 'react';
// import { Card, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Menu from '../components/Menu/Menu'
import Filter from '../components/Product/Filter/Filter';
import ProductCard from '../components/Product/ProductCard/ProductCard'
import { getData } from '../utils/api.js'
import { searchBooks } from '../utils/productsHelper'
import { host } from '../constants'

// function ScrollTop(props) {
// 	const { children, window } = props;
// 	// Note that you normally won't need to set the window ref as useScrollTrigger
// 	// will default to window.
// 	// This is only being set here because the demo is in an iframe.
// 	const trigger = useScrollTrigger({
// 	  target: window ? window() : undefined,
// 	  disableHysteresis: true,
// 	  threshold: 100,
// 	});
//   
// 	const handleClick = (event) => {
// 	  const anchor = (event.target.ownerDocument || document).querySelector(
// 		'#back-to-top-anchor',
// 	  );
//   
// 	  if (anchor) {
// 		anchor.scrollIntoView({
// 		  behavior: 'smooth',
// 		  block: 'center',
// 		});
// 	  }
// 	};
//   
// 	return (
// 	  <Zoom in={trigger}>
// 		<Box
// 		  onClick={handleClick}
// 		  role="presentation"
// 		  sx={{ position: 'fixed', bottom: 16, right: 16 }}
// 		>
// 		  {children}
// 		</Box>
// 	  </Zoom>
// 	);
// }
//   
// ScrollTop.propTypes = {
// 	children: PropTypes.element.isRequired,
// 	/**
// 	 * Injected by the documentation to work in an iframe.
// 	 * You won't need it on your project.
// 	 */
// 	window: PropTypes.func,
// };

const useStyles = makeStyles({
	gridContainer: {
	  paddingLeft: "10vw",
	  paddingRight: "10vw"
	}
  });

const Shop = (props) => {
	const classes = useStyles();
	
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
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		if(!isLoading) {
			setLoading(true)
			getData(`${host}/products`).then((json) => {
				setBooks(json)
				setLoading(false)
			})
		}
	}, [])
	
	const onAddToCartHandler = () => {
		// setCount()
		// setTotalPrice()
	}

	const handleChangeFilter = (event, newFilter) => {
		setFilter(newFilter);
	};

    return (
		<>
			<Menu totalPrice={totalPrice} count={count} items={items}/>
			<Filter setFilter={handleChangeFilter} filterBy={filterBy} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
			<Grid
				container
				spacing={8}
				className={classes.gridContainer}
				justify="center"
				alignItems="center"
			>
				{ isLoading
					? <Grid item 
							xs={12}
							sm={12} 
							md={12} 
							sx={{marginTop: 10}}
						>
							{'Загрузка...'}
						</Grid>
					: searchBooks(books, filterBy, searchQuery).map((book, i) => 
						<Grid item xs={12} sm={6} md={4}>
							<ProductCard key={i} 
								title={book.title} 
									author={book.author} 
									price={book.price} 
									image={book.image}/>
						</Grid>
					)
				}
			</Grid>
			{/* <ScrollTop {...props}>
				<Fab color="secondary" size="small" aria-label="scroll back to top">
				<KeyboardArrowUpIcon />
				</Fab>
      		</ScrollTop> */}
		</>
    )
}

export default Shop;

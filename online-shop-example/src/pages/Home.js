import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Menu from '../components/Menu/Menu'



const Shop = () => {
    return (
		<>
			<Menu />
			<Typography>
				Магазин книг с лучшими ценами и подробным описанием товаров!
			</Typography>
		</>
    )
}

export default Shop;

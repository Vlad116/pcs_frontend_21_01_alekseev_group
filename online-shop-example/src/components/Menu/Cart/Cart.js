import React from "react";
// import { List, Button, Image } from "semantic-ui-react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function generate(element) {
	return [0, 1, 2].map((value) =>
	  React.cloneElement(element, {
		key: value,
	  }),
	);
}

const CartComponent = ({ title, id, image, removeFromCart }) => {
	return(
		<List>
		{generate(
		  <ListItem
			secondaryAction={
			  <IconButton 
			  	edge="end"
				aria-label="delete"
				onClick={() => console.log(id)}
				>
				
				<DeleteIcon />
			  </IconButton>
			}
		  >
			<ListItemAvatar>
			<Avatar
				alt="Book image"
				src={image}
				sx={{ width: 24, height: 24 }}
			/>
			</ListItemAvatar>
			<ListItemText
			  primary={title}
			/>
		  </ListItem>,
		)}
	  </List>
	);
}


export default CartComponent
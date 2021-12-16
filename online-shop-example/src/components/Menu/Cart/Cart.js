import React from "react";
import { List, Button, Image } from "semantic-ui-react"

const CartComponent = ({ title, id, image, removeFromCart }) => (
	<List selection divided verticalAlign="middle">
	  <List.Item>
		<List.Content floated="right">
		  <Button onClick={() => {
			  console.log('Remove from cart')
		  }} color="red">
			Удалить
		  </Button>
		</List.Content>
		<Image avatar src={image} />
		<List.Content>{title}</List.Content>
	  </List.Item>
	</List>
);

export default CartComponent
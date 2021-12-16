import React from "react";
import { Menu, Popup } from "semantic-ui-react"
import CartComponent from "./Cart/Cart";

const MenuComponent = ({ totalPrice, count, items }) => (
	<Menu>
	  <Menu.Item name="browse">Пример главной магазина</Menu.Item>
	  <Menu.Menu position="right">
		<Menu.Item name="signup">
		  Итого: &nbsp; <b>{totalPrice}</b>&nbsp;руб.
		</Menu.Item>
  
		<Popup
		  trigger={
			<Menu.Item name="help">
			  Корзина (<b>{count}</b>)
			</Menu.Item>
		  }
		  content={items.map(book => (
			<CartComponent {...book} />
		  ))}
		  on="click"
		  hideOnScroll
		/>
	  </Menu.Menu>
	</Menu>
);

export default MenuComponent
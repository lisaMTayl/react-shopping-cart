import React, { useContext } from 'react';

// contexts
import { CartContext } from "../contexts/CartContext";


const Item = props => {
	// add removeItem to remove item from cart
	const { removeItem } = useContext(CartContext);
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />

			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				{/*add onClick to remove Item -- not working*/}
				<button onClick={ () => removeItem(props.id)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;

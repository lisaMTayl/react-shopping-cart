import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// contexts
import { CartContext } from '../contexts/CartContext';

// remove all instances of props
const Navigation = () => {
	// pass CartContext  to the useContext hook and assign it to a variable named cart
	const cart = useContext(CartContext);

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;

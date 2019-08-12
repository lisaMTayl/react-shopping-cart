import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Contexts
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	// wrap with components/routes with ProductContext
	return (
		<div className="App">
		// Pass in products state and addItem function
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={cart}>
			<Navigation cart={cart} />

			{/* Update Routes */}
			<Route exact path="/" component = {Products} />
{/*			<Route
				exact
				path="/"
				render={() => (
					<Products
						products={products}
						addItem={addItem}
					/>*/}

					{/*Updated shopping cart route*/}
			<Route path="/cart" component = {ShoppingCart} />

			</CartContext.Provider>
		</ProductContext.Provider>
		</div>

		// cleaned up code and moved everything inside div tags
	);
}

export default App;

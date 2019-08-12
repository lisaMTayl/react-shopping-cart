import React, { useContext } from 'react';

// contexts
import { ProductContext } from "../contexts/ProductContext";

// Components
import Product from './Product';

const Products = () => {
	// ProductContext into useContext with products and addItem
	const {products, addItem } = useContext(ProductContext);

	// Remove all instances of props
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;

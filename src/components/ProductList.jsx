import React from 'react';
import Product from './Product';

const ProductList = ({products, count}) => {
	return (
		<div 
			className='mx-auto' 
			style={{
				width: '600px'

			}}>
			{count ? <small className="mb-2">{count} products result.</small> : <></>}
			{products.map((item) => (
				<Product key={item.id} item={item}/>
			))}
		</div>
	);
}

export default ProductList;
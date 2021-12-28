import React from 'react';
import StarRating from './StarRating';

const Product = ({item}) => {
	return (
		<div className="list-group my-2">
		  <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
		  	<img 
		  		className="flex-shrink-0" 
		  		src={item.img_url} alt={item.name}
		  		width="100" height="100"
		  	/>
		  	<div className="d-flex gap-2 w-100 justify-content-between">
		  		<div>
		  			<a 
		  				href={item.link} 
		  				className="text-decoration-none"
		  				target="_blank" rel="noopener noreferrer"
		  			>
		  				<h6 className="text-break">{item.name}</h6>
		  			</a>
		  			<small>{item.price}</small>
		  			<div className="d-flex align-items-center">
		  				<StarRating rating={item.ratings_avg} />
		  				<p className="m-0">{item.ratings_avg} ({item.ratings_count} reviews)</p>
		  			</div>
		  		</div>
		  		<img 
			  		className="flex-shrink-0" 
			  		src={`${item.source}/favicon.ico`} alt={item.name}
			  		width="24" height="24"
			  	/>
		  	</div>
		  </div>
		</div>

	)
};

export default Product;
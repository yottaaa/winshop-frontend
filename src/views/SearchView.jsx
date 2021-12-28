import React from 'react';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import ProductList from '../components/ProductList';
// import {data} from '../assets/dummydata.js';

const SearchView = () => {
	const [searchKey, setSearchKey] = React.useState('');
	const [products, setProducts] = React.useState([]);
	const [count, setCount] = React.useState(0);
	const [isLoading, setIsLoading] = React.useState(false);

	const apiUrl = 'https://winshop-api.herokuapp.com'

	const handleInputChange = (e) => {
		console.log(e.target.value);
		setSearchKey(e.target.value);
	}

	const handleSearch = (e) => {
		e.preventDefault();
		setProducts([]);
		console.log(`Searching "${searchKey}"...`);
		setIsLoading(true);
		axios.get(`${apiUrl}/search_product/${searchKey}`)
		  .then(function (response) {
		    // handle success
		    setProducts(response.data['products']);
		    setCount(response.data['count']);
		    setIsLoading(false);
		    console.log(products);
		  })
		  .catch(function (error) {
		    // handle error
		    console.log(error);
		    setIsLoading(false);
		  })
	}

	return (
		<div className='container search-view'>
			<h1 className='header-title'>Window Shopping</h1>
			<SearchForm 
				handleInputChange={handleInputChange}
				handleSearch={handleSearch}
			/>
			{
				isLoading ?
					<h4 className="text-center">Searching please wait...</h4>
					:
					<ProductList products={products} count={count}/>

			}
		</div>
	);
}

export default SearchView;
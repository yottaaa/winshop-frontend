import React from 'react';

const SearchForm = ({handleSearch,handleInputChange}) => {
	return (
		<div className="search_wrap search_wrap_3">
			<div className="search_box">
				<input 
					type="text" 
					className="input" 
					placeholder="Enter product..."
					onChange={handleInputChange}
				/>
				<div 
					className="btn btn_common"
					onClick={handleSearch}
				>
					<i className="fas fa-search"></i>
				</div>
			</div>
		</div>
	);
}

export default SearchForm;
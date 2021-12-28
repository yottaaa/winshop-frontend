import React from 'react';

const StarRating = ({rating}) => {

	const setStarWidth = (starRating) => {
		let strRating = rating.toString().split(".");
		let starWidth = [0,0,0,0,0];

		for (let i=0; i<5; i++) {
			if (i === parseInt(strRating[0])) {
				starWidth[i] = parseFloat(`0.${strRating[1]}`) * 100;
				break;
			} else {
				starWidth[i] = 100;
			}
		}

		console.log(starWidth);
		return starWidth;
	};


	return (
		<>
			{
				setStarWidth(rating).map((w,idx) => (
					<div key={idx} style={{
						position: 'relative'
					}}>
						<div style={{
							width: `${w}%`,
							height: '100%',
							position: 'absolute',
							left: '0',
							top: '0',
							zIndex: '1',
							overflow: 'hidden'
						}}>
							<svg 
								enableBackground="new 0 0 15 15" 
								viewBox="0 0 15 15" x="0" y="0" 
								className=""
								fill="currentColor"
								style={{
									display: 'inline-block',
									position: 'relative',
									width: '1.5em',
									height: '1.5em',
									color: '#FF7800'
								}}
							>
								<polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" 
								strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
								</polygon>
							</svg>
						</div>
						<svg 
							enableBackground="new 0 0 15 15" 
							viewBox="0 0 15 15" x="0" y="0" 
							className=""
							fill="currentColor"
							style={{
								width: '1.5em',
								height: '1.5em',
								color: '#EEF2FF'
							}}
						>
							<polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" 
							strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
							</polygon>
						</svg>
					</div>
				))
			}
		</>
	)
};

export default StarRating;
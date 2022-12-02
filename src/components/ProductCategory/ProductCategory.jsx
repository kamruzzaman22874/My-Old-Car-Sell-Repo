import React from 'react';
import CorollaCategory from './CorollaCategory/CorollaCategory';
import PajarooCategory from './PajarooCategory/PajarooCategory';
import TeslaCategory from './TeslaCategory/TeslaCategory';

const ProductCategory = () => {
	return (
		<div>
			<h2 className='lg:text-3xl lg:py-10 font-bold italic text-center'>CAR HOUSE CATEGORY</h2>
		<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mt-10 lg:ml-32'>
			<CorollaCategory></CorollaCategory>
			<PajarooCategory></PajarooCategory>
			<TeslaCategory></TeslaCategory>
		</div>
		</div>
	);
};

export default ProductCategory;
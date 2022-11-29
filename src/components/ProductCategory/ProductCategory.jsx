import React from 'react';
import CorollaCategory from './CorollaCategory/CorollaCategory';
import PajarooCategory from './PajarooCategory/PajarooCategory';
import TeslaCategory from './TeslaCategory/TeslaCategory';

const ProductCategory = () => {
	return (
		<div className='w-full grid grid-cols-1 lg:grid-cols-3 lg:mx-24 mt-4'>
			<CorollaCategory></CorollaCategory>
			<PajarooCategory></PajarooCategory>
			<TeslaCategory></TeslaCategory>
		</div>
	);
};

export default ProductCategory;
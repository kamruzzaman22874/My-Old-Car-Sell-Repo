import React from 'react';
import Corrolla from '../CarInfo/Corrolla';
import Pajeroo from '../CarInfo/Pajeroo';
import Tesla from '../CarInfo/Tesla';

const ProductCategory = () => {
	return (
		<div className='w-full lg:mx-24'>
			<Corrolla></Corrolla>
			<Pajeroo></Pajeroo>
			<Tesla></Tesla>
		</div>
	);
};

export default ProductCategory;
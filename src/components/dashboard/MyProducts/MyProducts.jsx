import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyProducts = () => {
    const { user, loading } = useContext(AuthContext);
	//! fetch for getting products data from mongodb.....

	const url = `http://localhost:5000/products?email=${user?.email}`;

	const { data: products = [] } = useQuery({
		queryKey: ['products', user?.email],
		queryFn: async () => {
			const res = await fetch(url);
			const data = await res.json();
			return data;
		},
	});

	// console.log(products);

	const handleAdvertise = (id) => {
		// console.log('hhhh', id);
		fetch(`https://old-car-sell-server.vercel.app/productById/${id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				toast.success('Added advertisement')
				if (data) {
					fetch('https://old-car-sell-server.vercel.app/advertisement', {
						method: 'POST',
						headers: {
							'content-type': 'application/json',
						},
						body: JSON.stringify(data),
					})
						.then((res) => res.json())
						.then((ad) => {
							console.log(ad);
						});
				}
			});
	};

	if (loading) {
		
	}
    return (
        <div className='mx-12'>
			<h1 className='lg:text-3xl text-center font-bold lg:mt-4'>My Products</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
				{products?.map((product) => (
					<div key={product._id} className='card  bg-base-100 shadow-xl'>
						<figure>
							<img
								src={product.image}
								className='w-full h-[250px]'
								alt='Shoes'
							/>
						</figure>
						<div className='card-body'>
							<h2 className='card-title'>{product.title}</h2>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Category :
								</span>
								{product.name}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Location :
								</span>
								{product.location}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Original Price :
								</span>
								{product.original}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Resale Price :
								</span>
								{product.resale}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Years of use :
								</span>
								{product.year}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Year of Purchase :
								</span>
								{product.purchase}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Description :
								</span>
								{product.description}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl '>
									Post Time :
								</span>
								<span className='text-blue-600'> {product.time}</span>
							</p>
							{product.author && (
								<p className='text-start'>
									<span className='text-bold text-gray-800 text-xl'>
										Seller :
									</span>
									{product.author}
								</p>
							)}
							<div className='flex'>
								<button
									onClick={() => handleAdvertise(product?._id)}
									className='btn btn-sm mx-2 bg-green-500 hover:bg-green-600 border-0 text-white'
								>
									Advertise Now
								</button>
								<button className='btn btn-sm mx-2 bg-amber-500 hover:bg-amber-600 border-0 text-gray-600 hover:text-white'>
									Available
								</button>
								{/*<button className='btn btn-sm mx-2 text-white'>Sold</button>*/}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
    );
};

export default MyProducts;
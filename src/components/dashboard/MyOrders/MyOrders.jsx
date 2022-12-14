import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const MyOrders = () => {
	const { user, loading } = useContext(AuthContext);
	const [orders, setOrders] = useState();

	useEffect(() => {
		axios.get(`https://old-car-sell-server.vercel.app/myorders?email=${user?.email}`)
			.then((data) => setOrders(data.data));
	}, [user?.email]);
	console.log(orders);
 
    return (
      <div className='mx-12 bg-transparent'>
			<h1 className='lg:my-5 text-2xl text-center font-bold italic'>MY ORDERS</h1>

			{orders?.map((order) => (
				<div key={order?._id} className='card  bg-base-100 shadow-xl'>
					<div className='card lg:card-side my-5 bg-base-100 shadow-xl'>
						<img src={order?.image} className='lg:w-[50%]' alt='Album' />

						<div className='card-body'>
							<div className='card-body '>
								<h2 className='card-title'>
									<span className='text-bold text-gray-800 lg:text-lg'>
										Brand :
									</span>
									{order?.name}
								</h2>
								<p className='text-start'>
									<span className='text-bold text-gray-800 lg:text-lg'>
										Location :
									</span>
									{order?.location}
								</p>
								<p className='text-start'>
									<span className='text-bold text-gray-800 lg:text-lg'>
										Resell Price :
									</span>
									{order?.resale}
								</p>
								<p className='text-start'>
									<span className='text-bold text-gray-800 lg:text-lg'>
										Seller Name :
									</span>
									{order?.name}
								</p>
								<p className='text-start'>
									<span className='text-bold text-gray-800 lg:text-lg'>
										Seller Email :
									</span>
									{order?.email}
								</p>
								<p className='text-start'>
									<span className='text-bold text-gray-800 lg:text-lg'>
										Seller Location :
									</span>
									{order?.number}
								</p>
								<p className='text-start'>
									<span className='text-bold text-gray-800 lg:text-lg'>
										Meeting Date :
									</span>
									{order?.meetingDate}
								</p>
								<p className='text-start'>
									<span className='text-bold text-gray-800 lg:text-lg'>
										Buyer Number :
									</span>
									{order?.number}
								</p>
								<div className='card-actions lg:justify-end'>
									<button className='btn border-0 bg-green-500 hover:bg-green-600 text-white'>
										Buy Now
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div> 
    
    );
};

export default MyOrders;
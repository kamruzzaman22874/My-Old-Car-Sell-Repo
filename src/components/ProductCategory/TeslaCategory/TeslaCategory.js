import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const TeslaCategory = () => {
    const { data: teslacategory } = useQuery({
        queryKey: ['teslacategory'],
        queryFn: async () => {
            try {
                const res = await fetch('https://old-car-sell-server.vercel.app/teslacategory');
                const data = await res.json();
                return data;
            } catch (err) {
                console.error(err);
            }
        },
    });
    return (
        <div>
            <h className='lg:text-2xl lg:px-20 font-bold'>Tesla Category</h>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-6'>
			{
				teslacategory?.map(data => 
					
				<div className="card w-96 bg-base-100 shadow-xl">
				<figure><img src={data?.image} alt="Shoes" /></figure>
				<div className="card-body">
					<h2 className="card-title flex justify-between">
					Brand : {data.name}
					<div className="badge badge-secondary">Location : {data.location}</div>
					</h2>
					<p>Resale Price: ${data.resale}</p>
					<p>Original Price: ${data.original}</p>
					<p>Purchase: {data.purchase}</p>
					<div className="card-actions">
                        <Link to='/tesla' className='btn btn-info w-full text-white'>Show Details</Link>
					</div>
				</div>
				</div>
					
				)
			}
		</div>
        </div>
    );
};

export default TeslaCategory;
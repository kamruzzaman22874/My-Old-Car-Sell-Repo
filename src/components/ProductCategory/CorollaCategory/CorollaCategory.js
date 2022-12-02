import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const CorollaCategory = () => {
    const { data: corollacategory } = useQuery({
        queryKey: ['corollacategory'],
        queryFn: async () => {
            try {
                const res = await fetch('https://old-car-sell-server.vercel.app/corollacategory');
                const data = await res.json();
                return data;
            } catch (err) {
                console.error(err);
            }
        },
    });
    return (
        <div className='lg:ml-5'>
            <h1 className='lg:text-2xl lg:px-20 font-bold'>Corolla Category</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-6'>
			{
				corollacategory?.map(data => 
					
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
                        <Link to='/Corrolla' className='btn btn-info w-full text-white'>Show Details
                        </Link>
					</div>
				</div>
				</div>
					
				)
			}
		</div>
        </div>
    );
};

export default CorollaCategory;
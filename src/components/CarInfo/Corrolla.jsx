import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Corrolla = () => {
		const { data: corollagroup } = useQuery({
			queryKey: ['corollagroup'],
			queryFn: async () => {
				try {
					const res = await fetch('http://localhost:5000/corollagroup');
					const data = await res.json();
					return data;
				} catch (err) {
					console.error(err);
				}
			},
		});
		console.log(corollagroup);
	return (
		<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-6'>
			{
				corollagroup?.map(data => 
					
				<div className="card w-96 bg-base-100 shadow-xl">
				<figure><img src={data?.image} alt="Shoes" /></figure>
				<div className="card-body">
					<h2 className="card-title flex justify-between">
					Brand : {data.name}
					<div className="badge badge-secondary">Location: {data.location}</div>
					</h2>
					<p>Resale Price: ${data.resale}</p>
					<p>Original Price: ${data.original}</p>
					<p>Years of Use: {data.purchase}</p>
					<div className="card-actions w-full text-center">
						<Link to='/corollagroups' className='btn btn-info w-full text-white'>Show Details</Link>
					</div>
				</div>
				</div>
					
				)
			}
		</div>
	);
};

export default Corrolla;
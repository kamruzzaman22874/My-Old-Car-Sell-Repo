import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Tesla = () => {
	const { data: teslagroup } = useQuery({
        queryKey: ['teslagroup'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/teslagroup');
                const data = await res.json();
                return data;
            } catch (err) {
                console.error(err);
            }
        },
    });
	return (
		<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-6 mx-auto'>
		{
			teslagroup?.map(data => 
				
			<div className="card w-96 bg-base-100 shadow-xl">
			<figure><img src={data?.image} alt="Shoes" /></figure>
			<div className="card-body">
				<h2 className="card-title flex justify-between">
				Brand : {data.name}
				<div className="badge badge-secondary">{data.location}</div>
				</h2>
				<p>Resale Price: ${data.resale}</p>
					<p>Original Price: ${data.original}</p>
					<p>Years of Use: {data.purchase}</p>
				<div className="card-actions">
                  <button className='btn btn-info w-full'>Show Details</button>
				</div>
			</div>
			</div>
				
			)
		}
	</div>
	);
};

export default Tesla;
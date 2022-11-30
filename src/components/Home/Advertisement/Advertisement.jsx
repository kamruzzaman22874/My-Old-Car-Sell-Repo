import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advertisement = () => {
    	// //! fetch for getting products data from mongodb.....
	const { data: categories } = useQuery({
		queryKey: ['categories'],
		queryFn: async () => {
			try {
				const res = await fetch(
					'https://old-car-sell-server.vercel.app/advertisement/categories'
				);
				const data = await res.json();
				return data;
			} catch (err) {
				console.error(err);
			}
		},
	});
	console.log(categories);
    return (
      <div className='lg:mt-10 lg:ml-6'>
        <h2 className='lg:text-2xl text-center font-bold italic'>Advertisement</h2>
        {
            categories?.map(category =>   <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={category.image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Brand :{category.name}</h2>
              <p>Email : {category.email}</p>
              <p>Location : {category.location}</p>
              <p>Resale : {category.resale}</p>
              <p>Previous Price :{category.original}</p>
              <p>Year Of Buy: {category.purchase}</p>
             
              
              <div className="card-actions justify-end">
                <button className='btn btn-info w-full text-white'>Visit</button>
              </div>
            </div>
          </div>)
        }
      </div>
    );
};

export default Advertisement;
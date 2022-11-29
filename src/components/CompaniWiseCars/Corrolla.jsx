import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Corrolla = () => {
		const {user} = useContext(AuthContext)
		console.log(user);
		const { data: corollagroup } = useQuery({
			queryKey: ['corollacategory'],
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

		const handleBooking = (event) => {
			event.preventDefault();
			const form = event.target;
	
			const userName = form.userName.value;
			const email = form.email.value;
			const location = form.location.value;
			const price = form.price.value;
			const ProductName = form.ProductName.value;
	
			const booking = {
				userName: userName,
				email: email,
				address: location,
				ProductName: ProductName,
				price: price,
			}
			console.log(booking);
			fetch('http://localhost:5000/booking' ,{
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body:JSON.stringify(booking)

			})
			.then(res => res.json())
			.then(data => {
				if(data.acknowledged){
					toast.success('Booking Success')
				}
			})
			.catch(err => console.log(err))

		}
		// console.log(corollacategory);
	return (
		<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-6'>
			
			{
				corollagroup?.map(data => 
					
				<div className="card w-96 bg-base-100 shadow-xl">
				<img className='w-full h-72 rounded' src={data?.image} alt="img" />
				<div className="card-body">
					<h2 className="card-title flex justify-between">
					Brand : {data.name}
					<div className="badge badge-secondary">Location: {data.location}</div>
					</h2>
					<p>Resale Price: ${data.resale}</p>
					<p>Original Price: ${data.original}</p>
					<p>Years of Use: {data.purchase}</p>
					{/* The button to open modal */}
					<label htmlFor="my-modal-3" className="btn btn-info w-full text-white">Booking Now</label>

					{/* Put this part before </body> tag */}
					<input type="checkbox" id="my-modal-3" className="modal-toggle" />
					<div className="modal">
					<div className="modal-box relative">
						<label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
						<form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>

                        <input name="userName" type="text"
                            defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email"
                            defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered"
                            defaultValue={data?.location} required />
                        <input name='ProductName' type="text" className="input w-full input-bordered "
                            defaultValue={data?.name} disabled />
                        <input name='price' type="text" className="input w-full input-bordered "
                            defaultValue={data?.resale} disabled />
                        <br />
                        <input disableded
                            className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
					</div>
					</div>
				</div>
				</div>
					
				)
			}
		</div>
	);
};

export default Corrolla;
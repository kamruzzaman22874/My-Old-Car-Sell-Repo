import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Tesla = () => {
	const [bookingData,setBookingData] = useState()
	console.log('bookingData',bookingData);
	const {user} = useContext(AuthContext)
	const navigate = useNavigate()
	const { data: teslagroup } = useQuery({
        queryKey: ['teslacategory'],
        queryFn: async () => {
            try {
                const res = await fetch('https://old-car-sell-server.vercel.app/teslagroup');
                const data = await res.json();
                return data;
            } catch (err) {
                console.error(err);
            }
        },
    });

	const handleModal = (event,data) => {
		event.preventDefault();
		const form = event.target;
		const number = form.number.value;
		const meetingDate = form.meetingDate.value;
		const email = form.email.value;
		const location = form.location.value;
		const resale = form.resale.value;
		const purchase = form.purchase.value;
		const name = form.title.value;
		const image = form.img.value;
		console.log('location', location);
console.log('img', data);

		const booking = {
			name,
			location,
			purchase,
			resale,
			image,
			email, 
			meetingDate,
			number
		}
		console.log('xyz',booking);
		fetch('https://old-car-sell-server.vercel.app/booking' ,{
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
				navigate('/dashboard/myorders')
			}
		})
		.catch(err => console.log(err))

	}

	return (
		<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 my-6 lg:mx-36'>
		{
			teslagroup?.map(data => 
				
			<div className="card w-full bg-base-100 shadow-xl">
			<figure><img name='img' src={data?.image} alt="Shoes" /></figure>
			<div className="card-body">
				<h2 className="card-title flex justify-between">
				Brand : {data.name}
				<div className="badge badge-secondary">{data.location}</div>
				</h2>
				<p>Resale Price: ${data.resale}</p>
					<p>Original Price: ${data.original}</p>
					<p>Years of Use: {data.purchase}</p>
					
					
					<label htmlFor="my-modal-3" onClick={()=>setBookingData(data)} className="btn btn-info w-full text-white">Booking Now</label>

					
					<input type="checkbox" id="my-modal-3" className="modal-toggle" />
					<div className="modal">
					<div className="modal-box relative">
						<label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">???</label>
						<form  onSubmit={handleModal} className='grid grid-cols-1 gap-3 mt-10'>
						<input name="name" type="text"
                            defaultValue={user?.displayName} disabled placeholder="name" className="input w-full input-bordered" />
                        <input name="email" type="text"
                            defaultValue={user?.email} disabled placeholder="email" className="input w-full input-bordered" />
                        <input name="img" type="text"
                            defaultValue={bookingData?.image} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="title" type="text"
                            defaultValue={bookingData?.name} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="number" type="number"
                             placeholder="Mobile number" className="input w-full input-bordered" />
                        <input name="meetingDate" type="text"
                             placeholder="Meeting Date" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered"
                            defaultValue={bookingData?.location} readOnly required />
                        <input name='resale' type="text" className="input w-full input-bordered "
                            defaultValue={bookingData?.resale} disabled />
                        <input name='purchase' type="text" className="input w-full input-bordered "
                            defaultValue={bookingData?.purchase} disabled />
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

export default Tesla;
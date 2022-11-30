import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyOrders = () => {
  const {user} = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`
  console.log(url);

  const {data : bookings , refetch , isLoading} = useQuery({
    queryKey:['bookings' , user?.email],
    queryFn : async ()=>{
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }
  })
  const handleCancel =(id)=>{
      fetch(`http://localhost:5000/bookings/${id}` ,{
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(data=> {
        console.log(data);
        if(data.acknowledged){
          toast.success('Delete Successfully')
          refetch()
        }
      })

  }
 
    return (
    <div>
        <h2 className='text-center text-4xl font-bold italic text-blue-500 lg:mt-6'>My Orders</h2>
     <div className='grid grid-cols-1 grid-cols-3 gap-6 lg:mt-6 lg:mb-6'>
       { bookings?.length > 0 ?
        bookings.map(book=> <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={book.image} /></figure>
        <div className="card-body">
          <div className='flex justify-between'>
          <h2 className="card-title">
           {book.name}
          </h2>
            <div className="badge badge-secondary">{book.location}</div>
          </div>
         
          <p>Purchase : {book.purchase}</p>
          <p>Resale : {book.resale}</p>
          <p>Booking Date : {book.meetingDate}</p>
          <p>Number : {book.number}</p>
          <div className="card-actions justify-around">
            <button className='btn btn-info text-white'>Confirm</button> 
            <button onClick={()=> handleCancel(book._id)} className='btn btn-info text-white'>Cancel</button> 
            
          </div>
        </div>
      </div>)
      :
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      
      <div className="badge badge-secondary"></div>
    </h2>
    <p>There are no order vailable</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  }
</div>
</div> 
    
    );
};

export default MyOrders;
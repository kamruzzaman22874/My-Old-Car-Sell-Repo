import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({data , setViewCar}) => {

   const {name , description , img , category_id} = data
   console.log(category_id);



   
    return (
        <div className="card w-full bg-base-100 shadow-xl">
        <figure><img className='w-full h-full'  src={img} alt="img"  /></figure>
        <div className="card-body ">
          <h2 className="card-title w-full">
            {name}
            
          </h2>
          <p className=''>{description}</p>
          <Link to={`/category/${category_id}`} className='btn btn-info'>See Details</Link>


         
        {/* <label 
        htmlFor="category-modal" 
        className="btn btn-info text-white"
        onClick={()=>setViewCar(data)}
        >View Details</label> */}
        </div>
      </div>
    );
};

export default Category;
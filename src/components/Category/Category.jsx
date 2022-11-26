import React from 'react';

const Category = ({data}) => {

   const {id , name , description , img} = data
    return (
        <div className="card w-full bg-base-100 shadow-xl">
        <figure><img className='w-full h-full'  src={img} alt="img"  /></figure>
        <div className="card-body">
          <h2 className="card-title w-full">
            {name}
            
          </h2>
          <p className=''>{description}</p>
          {/* <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div> 
            <div className="badge badge-outline">Products</div>
          </div> */}
        <button className='btn'>Details</button>
        </div>
      </div>
    );
};

export default Category;
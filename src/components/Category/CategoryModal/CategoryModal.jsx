import React from 'react';

const CategoryModal = ({viewCar}) => {
    const {name, img , description} = viewCar; 
    return (
        <>
            <input type="checkbox" id="category-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="category-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{name}</h3>
                <form className='grid grid-cols-1 gap-3 mt-10'>
                <img src={img} alt="" />
                <input type="text" value={name} disabled className="input input-bordered w-full" />
                <p>{description}</p>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                <br />
                <input className='btn btn-info w-full' type="submit" value='Submit' />
                </form>
            </div>
            </div>
        </>
    );
};

export default CategoryModal;
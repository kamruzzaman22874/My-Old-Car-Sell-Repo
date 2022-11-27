import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const AddProduct = () => {

	const {user} = useContext(AuthContext)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const time = String(new Date()).slice(0, 21);

	const navigate = useNavigate();
	//! from .env.local file====>
	const imgHostKey = 'cd464a04ac53e69e3e8ecd326727cf71';
	// console.log(imgHostKey);

	const handleAddedProduct = (data) => {
		const image = data?.img[0];
		// console.log(image);
		const formData = new FormData();
		formData.append('image', image);
		const url = `https://i.ibb.co/mTYyBhL/corolla5.jpg?key=${imgHostKey}`;
		fetch(url, {
			method: 'POST',
			body: formData,
		})
			.then((res) => res.json())
			.then((imgData) => {
				// console.log(imgData);
				if (imgData.success) {
					// console.log(imgData.data.url)

					const addedProduct = {
						author: user?.displayName,
						title: data.title,
						location: data.location,
						category: data.category,
						resalePrice: data.resalePrice,
						originalPrice: data.originalPrice,
						yearsOfUse: data.yearsOfUse,
						yearOfPurchase: data.yearOfPurchase,
						description: data.description,
						image: imgData.data.url,
						time,
					};
                    
					console.log(addedProduct);


					//! Save addedProducts info to the database....
					fetch('http://localhost:5000/oldcars', {
						method: 'POST',
						headers: {
							'content-type': 'application/json',
						},
						body: JSON.stringify(addedProduct),
					})
						.then((res) => res.json())
						.then((result) => {
							console.log(result);
							toast.success('Successfully created a new Product!!');
							navigate('/dashboard/myProduct');
						});					
				}
			});
	};


    return (
        <div className=''>
        <br />
        <h1 className='mb-5 text-2xl'>Add Your Product</h1>
        <div className='hero mb-4'>
            <div className='hero-content grid grid-cols-1 lg:grid-cols-2-col shadow-2xl rounded-lg'>
                <div className='card grid grid-cols-1 lg:grid-cols-2-shrink-0 w-full rounded-md max-w-sm bg-base-100'>
                    <form
                        onSubmit={handleSubmit(handleAddedProduct)}
                        className='card-body'
                    >
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                            <div className='form-control w-full'>
                                <label className='label'>
                                    <span className='label-text'>Product Title</span>
                                </label>
                                <input 
                                    type='text'
                                    {...register('title', {
                                        required: 'Title is Required',
                                    })}
                                    className='input input-bordered w-full max-w-xs bg-base-200'
                                />
                                {errors.title && (
                                    <p className='text-red-500'>{errors.title?.message}</p>
                                )}
                            </div>
                            <div className='form-control  w-full max-w-xs'>{user?.displayName}</div>
                        </div>
                            <div className='form-control w-full max-w-xs'>
                                <label className='label'>
                                    <span className='label-text'>Seller Location</span>
                                </label>
                                <input
                                    type='text'
                                    {...register('location', {
                                        required: true,
                                    })}
                                    className='input input-bordered w-full max-w-xs bg-base-200'
                                />
                                {errors.location && (
                                    <p className='text-red-500'>{errors.location.message}</p>
                                )}
                            </div>
                            <div className='form-control w-full max-w-xs'>
                                <label className='label'>
                                    <span className='label-text'>Categories</span>
                                </label>
                                <select
                                    {...register('category', {
                                        required: true,
                                    })}
                                    className='select input-bordered w-full max-w-xs bg-base-200'
                                >
                                    <option>Tesla</option>
                                    <option>Mercedes_Benz</option>
                                    <option>Rolls_Royce</option>
                                </select>
                                {errors.category && (
                                    <p className='text-red-500'>{errors.category.message}</p>
                                )}
                            </div>
                        
                        
                            <div className='form-control w-full max-w-xs'>
                                <label className='label'>
                                    <span className='label-text'>Resale Price</span>
                                </label>
                                <input
                                    type='number'
                                    {...register('resalePrice', {
                                        required: true,
                                    })}
                                    className='input input-bordered w-full max-w-xs bg-base-200'
                                />
                                {errors.resalePrice && (
                                    <p className='text-red-500'>{errors.resalePrice.message}</p>
                                )}
                            </div>
                            <div className='form-control w-full max-w-xs'>
                                <label className='label'>
                                    <span className='label-text'>Original Price</span>
                                </label>
                                <input
                                    type='number'
                                    {...register('originalPrice', {
                                        required: true,
                                    })}
                                    className='input input-bordered w-full max-w-xs bg-base-200'
                                />
                                {errors.originalPrice && (
                                    <p className='text-red-500'>
                                        {errors.originalPrice.message}
                                    </p>
                                )}
                            </div>
                       
                            <div className='form-control w-full max-w-xs'>
                                <label className='label'>
                                    <span className='label-text'>Years of use</span>
                                </label>
                                <input
                                    type='number'
                                    {...register('yearsOfUse', {
                                        required: true,
                                    })}
                                    className='input input-bordered w-full max-w-xs bg-base-200'
                                />
                                {errors.yearsOfUse && (
                                    <p className='text-red-500'>{errors.yearsOfUse.message}</p>
                                )}
                            </div>
                            <div className='form-control w-full max-w-xs'>
                                <label className='label'>
                                    <span className='label-text'>Year of purchase</span>
                                </label>
                                <input
                                    type='number'
                                    {...register('yearOfPurchase', {
                                        required: true,
                                    })}
                                    className='input input-bordered w-full max-w-xs bg-base-200'
                                />
                                {errors.yearOfPurchase && (
                                    <p className='text-red-500'>
                                        {errors.yearOfPurchase.message}
                                    </p>
                                )}
                            </div>
                        <div className='form-control w-full max-w-xs'>
                            <label className='label'>
                                <span className='label-text'>Description</span>
                            </label>
                            <input
                                type='text'
                                {...register('description', {
                                    required: true,
                                })}
                                className='input input-bordered w-full max-w-xs bg-base-200'
                            />
                            {errors.description && (
                                <p className='text-red-500'>{errors.description.message}</p>
                            )}
                        </div>
                        <div className='form-control w-full max-w-xs'>
                            <label className='label'>
                                <span className='label-text'>Photo</span>
                            </label>
                            <input
                                type='file'
                                {...register('img', {
                                    required: 'Photo is Required',
                                })}
                                className='input input-bordered w-full max-w-xs bg-base-200'
                            />
                            {errors.img && (
                                <p className='text-red-500'>{errors.img.message}</p>
                            )}
                        </div>
                        <input
                            className='btn bg-green-500 hover:bg-green-600 border-0 text-white w-full mt-4'
                            value='Add product'
                            type='submit'
                        />
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AddProduct;
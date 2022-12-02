import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
// import Loading from '../../Loading/Loading';

const AddProduct = () => {
    const {user} = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_Imgbb_key;
    const navigate = useNavigate()
    const time = String(new Date()).slice(0, 21);
    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData()
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        console.log(url);

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData);
                console.log(imgData.data.url);
                if (imgData.success) {
                    const addProduct = {
                        title:data.title,
                        name: data.name,
                        location: data.location,
                        resale: data.resale,
                        original: data.original,
                        email:user.email,
                        year: data.year,
                        purchase: data.purchase,
                        image: imgData.data.url,
                        time,
                    }
                    console.log(addProduct);
                    fetch('https://old-car-sell-server.vercel.app/addproducts',{
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            //  authorization : `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(addProduct)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`)
                            navigate('/dashboard/myproducts')
                        })
                }
            })
        
    }
    return (
        <div className='w-96 p-7 mx-auto'>
            <h2 className='text-4xl'>Add Product</h2>
                 <form onSubmit={handleSubmit(handleAddProduct)}>
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Title</span></label>  
                        <input type="text" {...register("title", {
                    required: "name is required"
                        })} className="input input-bordered w-full max-w-xs" />    
                    {errors.email && <p> {errors.email.message} </p>}               
            </div>
            <div className="form-control w-full max-w-xs">

            <label className="label"><span className="label-text">Name</span></label>
            <select {...register("name", {
                    required: "name is required"
                        })} className="select select-bordered w-full max-w-xs">
            <option selected>Corolla</option>
            <option>Tesla</option>
            <option>Pajeroo</option>
            </select>
   
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Location</span></label>  
                        <input type="text" {...register("location", {
                            required: true,
                        })} className="input input-bordered w-full max-w-xs" />
                {errors.email && <p>{errors.email.message}</p>}        
            </div>
            <div className='lg:flex'>
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Resale Price</span></label>  
                        <input type="number" {...register("resale", {
                            required: true,
                        })} className="input input-bordered w-full max-w-xs mr-2" />
                {errors.email && <p>{errors.email.message}</p>}        
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Original Price</span></label>  
                        <input type="number" {...register("original", {
                            required: true,
                        })} className="input input-bordered w-full max-w-xs" />
                {errors.email && <p>{errors.email.message}</p>}        
            </div>
            </div>
            <div className='lg:flex'>
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Years of Use</span></label>  
                        <input type="number" {...register("year", {
                            required: true,
                            
                        })} className="input input-bordered w-full max-w-xs" />
                {errors.email && <p>{errors.email.message}</p>}        
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Purchase</span></label>  
                        <input type="number" {...register("purchase", {
                            required: true,
                        })} className="input input-bordered w-full max-w-xs" />
                {errors.email && <p>{errors.email.message}</p>}        
            </div>
            </div>
                <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Photo</span></label>  
                        <input type="file" {...register("image", {
                    required: "Photo is required"
                        })} className="input input-bordered w-full max-w-xs" />    
                    {errors.img && <p> {errors.img.message} </p>}               
                </div>
                <input className='btn btn-accent w-full mt-4' value='Add Product' type="submit"/>
            </form>
        </div>
    );
};

export default AddProduct;
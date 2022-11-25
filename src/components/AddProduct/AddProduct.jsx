import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {


    const {register , formState : {error} , handleSubmit} = useForm()



    const handleAddProduct =event=>{
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const title = form.title.value;
        const location = form.location.value;
        const resaleprice = form.resaleprice.value;
        const price = form.price.value;
        const year = form.year.value;
        const time = form.time.value;
        const name = form.name.value;

        console.log(photo, title , location , resaleprice, price , year , time , name);


    }

    return (
        <div className="hero min-h-screen w-full bg-base-200">
        <div className="hero-content flex-col">
          <form onSubmit={handleAddProduct} className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Picture</span>
                </label>
                <input type="file" name='photo' placeholder="picture" className="input input-bordered" />
              </div>
              <div className='md:flex'>
              <div className="form-control mr-2">
                <label className="label">
                  <span className="label-text">Ttitle</span>
                </label>
                <input type="text" name='title' placeholder="title" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input type="text" name='location' placeholder="location" className="input input-bordered" />
              </div>
              </div>
              <div className='md:flex'>
              <div className="form-control mr-2">
                <label className="label">
                  <span className="label-text">Resale Price</span>
                </label>
                <input type="number" name='resaleprice' placeholder="resale price" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Original Price</span>
                </label>
                <input type="number" name='price' placeholder="original price" className="input input-bordered" />
              </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Years Of Use</span>
                </label>
                <input type="number" name='year' placeholder="years of use" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Time</span>
                </label>
                <input type="number" name='time' placeholder="time" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <input type="text" name='name' placeholder="seller name" className="input input-bordered" />
             
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-500 border-0">Add Product</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddProduct;
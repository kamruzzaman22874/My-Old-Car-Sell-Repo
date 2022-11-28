import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

	// const navigate = useNavigate();
	//! from .env.local file====>
	const imageHostKey = process.env.REACT_APP_Imgbb_key;
    console.log(imageHostKey);

    const haandleSubmit = event=>{
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const name = form.name.value;
        const location = form.location.value;
        const resale = form.resale.value;
        const original = form.original.value;
        const year = form.year.value;
        const purchase = form.purchase.value;
        const image = form.image.value;
        // form.reset()
        // console.log(title,name,location,resale,original,year,purchase,image);
        // "expiration=600&YOUR_CLIENT_API_KEY"
        // const img = event.image[0];
        const formData = new FormData();
		formData.append('image', image);
		const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        console.log(url);
		fetch(url, {
			method: 'POST',
			body: formData
		})
			.then((res) => res.json())
			.then((imgData) => {
				// console.log(imgData);
				if (imgData.success) {
					console.log(imgData.data.url)




        const addProduct = {
            title,
            name,
            location,
            resale,
            original,
            year,
            purchase,
            image
        }
    
        // console.log(addProduct);



        	//! Save addedProducts info to the database....
					fetch('http://localhost:5000/addedproducts', {
						method: 'POST',
						headers: {
							'content-type': 'application/json',
						},
						body: JSON.stringify(addProduct),
					})
						.then((res) => res.json())
						.then((result) => {
                            alert('added successfully !!')
							// console.log(result);
							// navigate('/dashboard/myProduct');
							// toast.success('Successfully created a new Product!!');
						});


                } })
       

    }


    return (
        <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <form onSubmit={haandleSubmit} className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" name='title' placeholder="title" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input type="text" name='location' placeholder="location" className="input input-bordered" />
        </div>
        <div className='lg:flex'>
        <div className="form-control mr-2">
          <label className="label">
            <span className="label-text">Resale Price</span>
          </label>
          <input type="text" name='resale' placeholder="resale price" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Original Price</span>
          </label>
          <input type="text" name='original' placeholder="original price" className="input input-bordered" />
        </div>
        </div>
        <div className='lg:flex'>
        <div className="form-control mr-2">
          <label className="label">
            <span className="label-text">Year Of Use</span>
          </label>
          <input type="text" name='year' placeholder="year of use" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Purchase</span>
          </label>
          <input type="text" name='purchase' placeholder="year of use" className="input input-bordered" />
        </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Choose Image</span>
          </label>
          <input type="file" name='image' placeholder="year of use" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-info">Add Product</button>
        </div>
      </div>
    </form>
  </div>
</div>


    );
};

export default AddProduct;
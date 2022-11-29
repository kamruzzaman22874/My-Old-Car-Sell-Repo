import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {
    const {userCreate,userProfile} = useContext(AuthContext)
    const handleCreateUser =  event =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        console.log(name, email , password);

        userCreate(email , password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            updateUserDetails(name)
            toast.success('user create successfully')
            form.reset()
        })
        .catch(error => console.error(error))
    }
    const updateUserDetails = (name)=>{
      userProfile(name)
      .then(()=>{
        
      })
      .catch(err =>{
        console.log(err)
      })
    }

    return (
        <div className="hero">
  <div className="hero-content flex-col">
    <form onSubmit={handleCreateUser} className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
      <div  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller/Byer</span>
          </label>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>Please Select</option>
            <option>Seller</option>
            <option>Byer</option>
        </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="link link-hover">Forgot password?</a>
          </label>
          <div className='flex'>
          <p className='mr-2'>Already have an account? please</p>
          <Link to='/login' className='underline'> Login</Link>
          </div>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-green-500 hover:bg-green-600 border-0">Sign Up</button>
        </div>
      </div>
    </form>
  </div>
</div>
    );
};

export default SignUp;
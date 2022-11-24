import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col">
    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="link link-hover">Forgot password?</a>
          </label>
          <div className='flex'>
          <p className='mr-2'>Create a new account</p>
          <Link to='/signup' className='underline'>Sign Up</Link>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-info">Login</button>
          <button className="btn btn-info mt-2">Google Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;
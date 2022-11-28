import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
const {userLogin , googleSignIn,loading} = useContext(AuthContext)
const [user , setUser] = useState()
const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
	

// if(loading){
// 	return <progress className="progress w-56"></progress>
// }

const handleLogin =  event =>{
	event.preventDefault()
	const form = event.target
	console.log(form);
	const email = form.email.value;
	const password = form.password.value
	console.log( email , password);

	userLogin(email , password)
	.then(result =>{
		navigateNow()
		const user = result.user;
		console.log(user);
		toast.success('user login successfully')
		form.reset()
	})
	.catch(error => console.error(error))
}

 const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result=>{
			navigateNow()
            const user = result.user;
            console.log(user);
            toast.success('Login Successfull')
			
        })
    }

	const navigateNow = () => {
        setTimeout(() => { navigate(from, { replace: true }) }, 1);
    }

    return (
        <div className="hero  py-10">
  <div className="hero-content flex-col">
    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
      <div  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
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
          <p className='mr-2'>Create a new account please</p>
          <Link to='/signup' className='underline'>SignUp</Link>
          </div>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-info hover:bg-green-600 border-0">Login</button>
        </div>
        <div className="form-control mt-6">
			
          <button onClick={handleGoogleSignIn} className="btn btn-info hover:bg-green-600 border-0">
		  <FcGoogle className='text-xl mr-2'></FcGoogle>
			<span>Google Login</span>
			</button>
        </div>
      </div>
    </form>
  </div>
</div>
    );
};

export default Login;
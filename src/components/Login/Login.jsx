import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
const {userLogin , googleSignIn} = useContext(AuthContext)

const handleLogin =  event =>{
	event.preventDefault()
	const form = event.target
	const email = form.email.value;
	const password = form.password.value
	console.log( email , password);

	userLogin(email , password)
	.then(result =>{
		const user = result.user;
		console.log(user);
		toast.success('user create successfully')
		form.reset()
	})
	.catch(error => console.error(error))
}


    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user);
            toast.success('Login Successfull')
			
        })
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
          <p className='mr-2'>Already have an account? please</p>
          <Link to='/login' className='underline'> Login</Link>
          </div>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="form-control mt-6">
			
          <button onClick={handleGoogleSignIn} className="btn btn-primary">
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
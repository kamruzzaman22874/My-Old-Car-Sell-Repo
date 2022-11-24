import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
const {userLogin} = useContext(AuthContext)

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.vlaue;
        const password = form.password.vlaue;
        console.log(email , password);

        userLogin(email , password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success('Login Successfull')
            // form.reset()

        })
        .catch(err => console.error(err))
    }
    return (
        <div className='hero  bg-gray-300'>
				<div className='hero-content flex-col'>
					
					<form
						onSubmit={handleLogin}
						className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300'
					>
						<div className='card-body'>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									type='email'
									name='email'
									placeholder='email'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Password</span>
								</label>
								<input
									type='password'
									name='password'
									placeholder='password'
									className='input input-bordered'
								/>
								<label className='label'>
									<Link to='' className='label-text-alt link link-hover'>
										Forgot password?
									</Link>
								</label>
							</div>
							<div className='form-control mt-2'>
								<button className='btn'>Login</button>
							</div>
							<p>
								Please Sign Up!! 
								<Link className='underline hover:text-pink-500' to='/signup'>
									 Sign Up
								</Link>
							</p>
							<button  className='btn btn-warning mb-2'>
								<span className='text-2xl'>
									<FcGoogle></FcGoogle>
								</span>
								<span className='px-2'>Google Sign In</span>
							</button>
							{/* <button onClick={githubSignIn} className='btn btn-warning'>
								<span className='text-2xl'>
									<BsGithub></BsGithub>
								</span>
								<span className='px-2'>Github Sign In</span>
							</button> */}
						</div>
					</form>
				</div>
			</div>
    );
};

export default Login;
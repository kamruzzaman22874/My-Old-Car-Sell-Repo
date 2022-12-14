import React, { useContext }  from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const {logOut , user} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogout=() => {
        navigate('/login')
        logOut()
        .then(() => {
            toast.error('Log Out')
            navigate('/login')
        }).catch(err => console.error(err))
    }
    // console.log(user);
    const menuItems = <React.Fragment>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            {
                user?
                <li><Link onClick={handleLogout}>Logout</Link></li>
                 :  
                 <li><Link to='/login'>Login</Link></li>
            }
           
            

            {/* <li><Link to='/dashboard'>Dashboard</Link></li> */}
            {/* <li><button onClick={handleLogout} >Sign Out</button></li> */}
      {/* {user?.uid ?
        <>
        
        </>
        :
        <li><Link to='/login'>Login</Link></li>
      } */}
    </React.Fragment>
    return (
        <section className='shadow-md'>
            <div className="navbar mt-2 rounded flex justify-around">
                <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                    </ul>
                </div>
                <div className='flex'>
                    <img className='w-[50px]' src='car-logo.png' alt="logo" />
                    <Link to='/' className="btn btn-ghost normal-case text-xl">CAR HOUSE</Link>
                </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
                </div>
                <label htmlFor='dashboard-drawer' tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>               
            </div>
        </section>
    );
};

export default Navbar;
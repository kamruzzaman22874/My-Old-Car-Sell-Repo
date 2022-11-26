import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import { AuthContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {
    const {logOut , user} = useContext(AuthContext)
    console.log(user?.email);
    const menuItems = <React.Fragment>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/faq'>FAQ</Link></li>
            <li><Link to='/addproduct'>Add Product</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link onClick={()=>logOut()}>Logout</Link></li>

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
        <section className='shadow-lg'>
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
                    <Link to='/' className="btn btn-ghost normal-case text-xl">OLD CAR SELL</Link>
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
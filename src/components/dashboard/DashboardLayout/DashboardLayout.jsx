import React from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Navbar from '../../Navbar/Navbar';

const DashboardLayout = () => {
    const {logUser} = useContext(AuthContext)
console.log(logUser);
    
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile mx-auto">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div> 
            <div className="drawer-side lg:px-8 lg:my-36">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-8 w-80 rounded text-base-content">
                        <li><Link className='text-white font-bold text-xl bg-blue-400 hover:bg-blue-600 mt-2 text-center' to='/dashboard/allsellers'><a>All Seller</a></Link></li>
                        <li><Link className='text-white font-bold text-xl bg-blue-400 hover:bg-blue-600 mt-2 text-center' to='/dashboard/allbyers'><a>All Byers</a></Link></li>
                      <li><Link className='text-white font-bold text-xl bg-blue-400 hover:bg-blue-600 mt-2 text-center' to='/dashboard/myproducts'><a>My Products</a></Link></li>
                        <li><Link className='text-white font-bold text-xl bg-blue-400 hover:bg-blue-600 mt-2 text-center' to='/dashboard/addproducts'><a>Add Products</a></Link></li>
                <li><Link className='text-white font-bold text-xl bg-blue-400 hover:bg-blue-600 mt-2 text-center' to='/dashboard/myorders'><a>My Orders</a></Link></li>
                </ul>
            
            </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
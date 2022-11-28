import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import Dashboard from '../Dashboard';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile mx-auto">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div> 
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                <ul className="menu  p-8 w-80 bg-base-100 text-base-content">
                <li><a>All Seller</a></li>
                <li><a>All Buyer</a></li>
                </ul>
            
            </div>
            </div>
        </div>
    );
};

export default DashboardLayout;

import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import Loader from '../../components/Loader/Loader';



const PrivateRoute = ({ children }) => {
    const { user , loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }
    if (user && user.uid) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace ></Navigate>
};


export default PrivateRoute;
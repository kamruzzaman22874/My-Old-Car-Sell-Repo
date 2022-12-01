import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../components/AddProduct/AddProduct";
import Corrolla from "../components/CompaniWiseCars/Corrolla";
import Pajeroo from "../components/CompaniWiseCars/Pajeroo";
import Tesla from "../components/CompaniWiseCars/Tesla";
import AllSeller from "../components/dashboard/AllSeller/AllSeller";
import AllByers from "../components/dashboard/DashboardLayout/AllByers/AllByers";
import DashboardLayout from "../components/dashboard/DashboardLayout/DashboardLayout";
import MyOrders from "../components/dashboard/MyOrders/MyOrders";
import MyProducts from "../components/dashboard/MyProducts/MyProducts";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/Login/SignUp";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoutes/PrivateRoutes";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<FAQ></FAQ>
            },
            
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/Corrolla',
                element: <Corrolla></Corrolla>
            },
            {
                path: '/tesla',
                element: <Tesla></Tesla>
            },
            {
                path: '/pajeroo',
                element: <Pajeroo></Pajeroo>
            },
           
        ]
    },
    {
        path: '/dashboard',
        element : <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children :[
            {
                path: '/dashboard/allseller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/allbyer',
                element: <AllByers></AllByers>
            },
            {
                path:'/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path:'/dashboard/addproducts',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:'/dashboard/myproducts',
                element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>
            },
            {
                path:'/dashboard/allsellers',
                element: <PrivateRoute><AllSeller></AllSeller></PrivateRoute>
            },
            {
                path:'/dashboard/allbyers',
                element: <PrivateRoute><AllByers></AllByers></PrivateRoute>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])
export default router;
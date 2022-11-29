import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../components/AddProduct/AddProduct";
import Corrolla from "../components/CompaniWiseCars/Corrolla";
import Pajeroo from "../components/CompaniWiseCars/Pajeroo";
import Tesla from "../components/CompaniWiseCars/Tesla";
import AllSeller from "../components/dashboard/AllSeller/AllSeller";
import DashboardLayout from "../components/dashboard/DashboardLayout/DashboardLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/Login/SignUp";
import Main from "../Layout/Main";
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
                element:<PrivateRoutes><FAQ></FAQ></PrivateRoutes>
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
            {
                path:'/addproduct',
                element:<AddProduct></AddProduct>
            },
        ]
    },
    {
        path: '/dashboard',
        element : <DashboardLayout></DashboardLayout>,
        children :[
            {
                path:'/dashboard',
                element: <AllSeller></AllSeller>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])
export default router;
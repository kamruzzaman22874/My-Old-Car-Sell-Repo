import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../components/AddProduct/AddProduct";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import AllByers from "../components/dashboard/AllByers";
import AllSeller from "../components/dashboard/AllSeller/AllSeller";
import Dashboard from "../components/dashboard/Dashboard";
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
                path:'/addproduct',
                element:<AddProduct></AddProduct>
            },
            
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/allbyers',
                element: <AllByers></AllByers>
            },
            {

            },
            {
                path: '/category/:id',
                element: <CategoryCard></CategoryCard>,
                // loader: ({ params }) =>
                // fetch(`http://localhost:5000/category/${params.id}`)
            },
            {

            },
            {
                path: '/allsellers',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
           
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
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
    }
])
export default router;
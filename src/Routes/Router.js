import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home.jsx";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Login/Singup";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                path:'/',
                element : <Home/>
            },
            {
                path:'/login',
                element:<Login/>
            }
            ,
            {
                path:'/singup',
                element:<Singup/>

            },
            {
                path:'/blog',
                element: <ProtectedRoute><Blog/></ProtectedRoute>
            }

        ]
    }

])
export default router
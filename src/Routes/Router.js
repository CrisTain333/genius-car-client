import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home.jsx";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Login/Singup";

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

            }

        ]
    }

])
export default router
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Blog from "../Pages/Blog/Blog";
import DetailBlog from "../Pages/Blog/DetailBlog";
import BlogPost from "../Pages/BlogPost/BlogPost";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home/Home.jsx";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Login/Singup";
import Orders from "../Pages/Orders/Orders";
import ServiceDetails from "../Pages/Service Details/ServiceDetails";
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
                loader: async ()=>fetch(` https://genius-car-server-nine-pi.vercel.app/blogs`),
                element: <Blog/>
            },
            {
                path:'/service/:id',
                loader: async ({params})=>fetch(` https://genius-car-server-nine-pi.vercel.app/services/${params.id}`),
                element:<ServiceDetails/>
            },
            {
                path:'/checkout/:id',
                loader: async ({params})=>fetch(` https://genius-car-server-nine-pi.vercel.app/services/${params.id}`),
                element: <ProtectedRoute><Checkout/></ProtectedRoute>
            },
            {
                path:'/orders',
                element: <ProtectedRoute><Orders/></ProtectedRoute>
            },
            {
                path:'/blog/Post',
                element: <BlogPost/>

            },
            {
                path:'/blog/:id',
                loader: async ({params})=>fetch(` https://genius-car-server-nine-pi.vercel.app/blog/${params.id}`),
                element: <DetailBlog/>

            }


        ]
    }

])
export default router
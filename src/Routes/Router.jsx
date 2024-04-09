import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";

const Router =createBrowserRouter([
    {
        path:"/",
        element: <Layout></Layout>,
        children:[
            {
                path:"/",
                element: <Home/>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])

export default Router;
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import UpdateProfile from "../Pages/UpdateProfile";
import PrivateRoute from "../Component/PrivateRoute";

const Router =createBrowserRouter([
    {
        path:"/",
        element: <Layout></Layout>,
        children:[
            {
                path:"/",
                element: <Home/>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/profile',
                element: <PrivateRoute><UpdateProfile/></PrivateRoute>
            }
        ]
    }
])

export default Router;
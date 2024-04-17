import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import UpdateProfile from "../Pages/UpdateProfile";
import PrivateRoute from "../Component/PrivateRoute";
import EstatteDetails from "../Component/EstatteDetails";
import ErrorPage from "../Pages/ErrorPage";
import Favourites from "../Pages/Favourites";

const Router =createBrowserRouter([
    {
        path:"/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage/>,
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
            },
            {
                path: '/favourites',
                element: <Favourites/>
            },
            {
                path: '/estatedetails/:id',
                element: <PrivateRoute><EstatteDetails/></PrivateRoute>,
                loader: ()=>fetch('/data.json')
            }
        ]
    }
])

export default Router;
import { useContext } from "react";
import { MyContext } from "../Context/MyContext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Loading";

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(MyContext)
    const location = useLocation()
    console.log(user)
    if(loader){
        return <Loading></Loading>;
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
    
};

export default PrivateRoute;
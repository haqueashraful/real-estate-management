import { useContext } from "react";
import { MyContext } from "../Context/MyContext";
import { Navigate } from "react-router-dom";
import Loading from "./Loading";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(MyContext)
    if(loading){
        return <Loading></Loading>;
    }
    if(user){
        return children;
    }
    return (
       <Navigate to="/login"></Navigate>
    );
};

export default PrivateRoute;
import React, {useContext} from 'react';
import {AuthContext} from "../contexts/Auth.context";
import {Navigate, useLocation} from "react-router-dom";
import PublicRoute from "../routes/Public.route";

function RequireAuth({children}) {

    const {userAuth} =useContext(AuthContext);
    let location = useLocation();

    if(userAuth.isGuest){
        return <Navigate to="/login" state={{from: location}}/>;
    }
    return children;
}

export default RequireAuth;
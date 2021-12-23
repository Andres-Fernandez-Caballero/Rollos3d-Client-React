import React, {useContext} from 'react';
import {AuthContext} from "../contexts/Auth.context";
import {Navigate, useLocation} from "react-router-dom";

const NotRequireAuth = ({children}) => {

    const {userAuth} = useContext(AuthContext);
    let location = useLocation();

    if(!userAuth.isGuest){
        return <Navigate to="/rollos/lista" state={{from: location}} />;
    }

    return children;
};

export default NotRequireAuth;

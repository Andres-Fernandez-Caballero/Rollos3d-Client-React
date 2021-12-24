import React, {useContext} from 'react';
import GoogleButton from "react-google-button";
import {AuthContext} from "../contexts/Auth.context";
import {useGoogleAuth} from "../hooks/useGoogleAuth";
import {AuthActions} from "../actions/AuthActions";


const Login = () => {
    const {userAuth, dispatchAuthUserEvent} = useContext(AuthContext);


    console.log(userAuth);
    return (
        <>
         <GoogleButton onClick={() => {dispatchAuthUserEvent(AuthActions.LOGIN)}}/>
        </>
    );
};

export default Login;

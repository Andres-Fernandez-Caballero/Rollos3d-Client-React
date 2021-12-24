import {useEffect, useState} from "react";
import {firebase, googleAuthProvider} from "../firebase/config";
import {AuthActions} from "../actions/AuthActions";

export const useGoogleAuth = () => {

    let initState = {
        isGuest: true,
    }


    if(localStorage.getItem('auth') !== null ){
        initState = JSON.parse(localStorage.getItem('auth'));
    }

    const [userAuth, setUserAuth] = useState(initState);

    useEffect(() => {

        if(!userAuth.isGuest){
            localStorage.setItem('auth', JSON.stringify(userAuth));
        }


    }, [userAuth]);

    const login = async () => {

        try {
            const {user} = await firebase.auth().signInWithPopup((googleAuthProvider))

            setUserAuth({
                ...userAuth,
                isGuest: false,
                user,
            });
        } catch (err) {
            alert('no se pudo realizar la solicitud' + err)
        }

    }

    const logOut = () => {
        setUserAuth({
            ...userAuth,
            isGuest: true,
        });
        localStorage.removeItem('auth');
    }

    const dispatchAuthUserEvent = async (action) => {
        switch (action){
            case AuthActions.LOGIN:
                await login()
                return
            case AuthActions.LOGOUT:
                logOut()
                return
            default:
                return null;
        }
    }

    return {userAuth, dispatchAuthUserEvent}
}

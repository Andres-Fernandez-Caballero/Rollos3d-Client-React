import {createContext} from "react";

const initAuthContext = {
    userAuth: {
        isGuest: true
    },
    dispatchAuthUserEvent: () => {}
};

export const AuthContext = createContext(initAuthContext);
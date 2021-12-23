import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import {AuthContext} from "../contexts/Auth.context";
import {AuthActions} from "../actions/AuthActions";

const NavigationBar = () => {

    const {dispatchAuthUserEvent} = useContext(AuthContext);

    return (
        <nav>
            <ul>
                <li><Link to='/rollos/lista'>Lista</Link></li>
                <li><Link to='/rollos/lista'>Crear</Link></li>
                <li><Link to='/rollos/lista'>Detalle</Link></li>
                <li><button onClick={() => dispatchAuthUserEvent(AuthActions.LOGOUT)}>Logout</button></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;

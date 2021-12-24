import React, {useContext} from 'react';
import filament from '../assets/filament.png'
import Login from "../components/Login";
import {AuthContext} from "../contexts/Auth.context";

function LoginPage() {

    const {userAuth} = useContext(AuthContext)

    return (
        <>
            <main className="app-global-container app-container App-header">
                <img src={filament} className="App-logo" alt="logo" />

                <h1 role="title" className='App-title'>Gestor de rollos</h1>
                <p aria-label='auth-state'>{userAuth.isGuest? 'Visitante': 'usuario: ' + userAuth.user.displayName }</p>
                <br/>
                <Login/>
            </main>
        </>
    );
}

export default LoginPage;
import React, {useState} from 'react';
import rollo from './assets/rollo.svg';
import './App.css';
import {AuthContext} from "./contexts/Auth.context";
import Login from "./components/Login";
import {useGoogleAuth} from "./hooks/useGoogleAuth";
import LoginPage from "./pages/LoginPage";
import AppRoute from "./routes/App.route";

function App() {

   const {userAuth, dispatchAuthUserEvent} =  useGoogleAuth();

  return (
      <AuthContext.Provider value={{userAuth, dispatchAuthUserEvent}}>
        <div className="App">
            <AppRoute />
        </div>
      </AuthContext.Provider>
  );
}

export default App;

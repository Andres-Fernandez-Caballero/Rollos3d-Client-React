import React, {useState} from 'react';
import './ui/css/App.css';
import './ui/css/mui.css';
import {AuthContext} from "./contexts/Auth.context";
import Login from "./components/Login";
import {useGoogleAuth} from "./hooks/useGoogleAuth";
import LoginPage from "./pages/LoginPage";
import AppRoute from "./routes/App.route";
import Container from "@mui/material/Container";

function App() {

   const {userAuth, dispatchAuthUserEvent} =  useGoogleAuth();

  return(
      <Container maxWidth="xl" className='app-global-container'>
          <AuthContext.Provider value={{userAuth, dispatchAuthUserEvent}}>
            <div className="App">
                <AppRoute />
            </div>
          </AuthContext.Provider>
      </Container>
  );
}

export default App;

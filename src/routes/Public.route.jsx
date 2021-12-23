import React from 'react';
import {Route, Routes} from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const PublicRoute = (props) => {
    return (
        <Routes>
            <Route path="login" element={<LoginPage/>}/>
        </Routes>
    );
}

export default PublicRoute;
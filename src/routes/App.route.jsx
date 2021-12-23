import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import PublicRoute from "./Public.route";
import LoginPage from "../pages/LoginPage";
import ListRollsPage from "../pages/private/ListRollsPage";
import RequireAuth from "../components/RequireAuth";
import PrivateRoute from "./Private.route";
import NotRequireAuth from "../components/NotRequireAuth";

function AppRoute(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={
                <NotRequireAuth>
                    <PublicRoute/>
                </NotRequireAuth>
                } />
                <Route index path="/rollos/*" element={
                    <RequireAuth>
                        <PrivateRoute/>
                    </RequireAuth>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoute;
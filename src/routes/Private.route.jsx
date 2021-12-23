import React from 'react';
import {Routes, Route} from "react-router-dom";
import ListRollsPage from "../pages/private/ListRollsPage";
import { DatabaseContext } from '../contexts/Database.context';
import { useDatabase } from '../hooks/useDatabase';
import CreateRollsPage from "../pages/private/CreateRollsPage";


const PrivateRoute = () => {

    const {rollos, dispatchDatabaseEvent} = useDatabase();

    return (
        <DatabaseContext.Provider value={{rollos, dispatchDatabaseEvent}}>
            <Routes>
                <Route path="lista" element={<ListRollsPage/>}/>
                <Route path="crear" element={<CreateRollsPage/>}/>
            </Routes>
        </DatabaseContext.Provider>
        
    );
};

export default PrivateRoute;
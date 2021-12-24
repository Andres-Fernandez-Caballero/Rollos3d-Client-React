import React, {useContext} from 'react';
import NavigationBar from "../../components/NavigationBar";
import List from "../../components/rolls-crud/List";
import { useDatabase } from '../../hooks/useDatabase';
import {DatabaseContext} from "../../contexts/Database.context";
import {DatabaseActions} from "../../actions/DatabaseActions";
import {useNavigate} from "react-router-dom";
import { Fab } from '@mui/material';
import {Add} from '@mui/icons-material';

const  ListRollsPage = () => {

    const {dispatchDatabaseEvent} = useContext(DatabaseContext);

    const navigate = useNavigate();

    return (
        <main className="app-container">
            <NavigationBar/>
            <header>
                <h1 aria-label="list" >rollos en stock</h1>
            </header>
            <main>
                <List />
            </main>
            <Fab variant="extended" aria-label="fab-add"  className="fab" color="primary" onClick={(event) => {event.preventDefault(); navigate('/rollos/crear')}}><Add/><span>&nbsp;Crear</span></Fab>
        </main>
    );
}

export default ListRollsPage;
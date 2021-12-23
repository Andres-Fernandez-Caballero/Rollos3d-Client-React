import React, {useContext} from 'react';
import NavigationBar from "../../components/NavigationBar";
import List from "../../components/rolls-crud/List";
import { useDatabase } from '../../hooks/useDatabase';
import {DatabaseContext} from "../../contexts/Database.context";
import {DatabaseActions} from "../../actions/DatabaseActions";
import {useNavigate} from "react-router-dom";

const  ListRollsPage = () => {

    const {dispatchDatabaseEvent} = useContext(DatabaseContext);

    const navigate = useNavigate();

    return (
        <>
            <NavigationBar/>
            <header>
                <h1 aria-label="list" >rollos en stock</h1>
            </header>
            <main>
                <List />
            </main>
            <button onClick={(event) => {event.preventDefault(); navigate('/rollos/crear')}}>add</button>
        </>
    );
}

export default ListRollsPage;
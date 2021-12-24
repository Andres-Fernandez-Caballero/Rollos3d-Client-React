import {useState} from "react";
import {DatabaseActions} from '../actions/DatabaseActions';

export const useDatabase = () => {

    let initialstate = [
    ];

    if(localStorage.getItem('rolls') !== null){
        initialstate = JSON.parse(localStorage.getItem('rolls'));
    }

    const [rollos, setRollos] = useState(initialstate);



    const add = (rollo) => {
        console.log(rollo);
        setRollos( rollos => {
            const updateRollos = [...rollos, rollo];
            localStorage.setItem('rolls', JSON.stringify(updateRollos));

            return updateRollos
        }
        );
    };
/*
    const detail = (id) => {

    }

    const modify = (id, rollo) => {

    }

    const find = (query) => {

    }

    const remove = (rollo) => {

    }
*/
    const dispatchDatabaseEvent = (action, payload) => {
        switch(action){
            case DatabaseActions.ADD:
                add(payload);
                return

            default:
                return 
        }
    }

    return {rollos, dispatchDatabaseEvent}
}


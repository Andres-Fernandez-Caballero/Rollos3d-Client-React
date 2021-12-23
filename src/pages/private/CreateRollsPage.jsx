import React, {useContext, useState} from 'react';
import {DatabaseContext} from "../../contexts/Database.context";
import {DatabaseActions} from "../../actions/DatabaseActions";
import {useNavigate} from 'react-router-dom';

function CreateRollsPage() {

    const navigate = useNavigate();

    const [roll, setRoll] = useState({color_name:'void', color_hex:'#000', temperature:200});

    const {dispatchDatabaseEvent} = useContext(DatabaseContext);

    const handleChange = (event) => {
        setRoll({
            ...roll,
            [event.target.name]: event.target.value,
        });


    }

    const handleAdd = (event) => {
        event.preventDefault();
        alert('creado el rollo ' + roll.color_name)
        dispatchDatabaseEvent(DatabaseActions.ADD, roll);
        navigate('/rollos/lista');

    }

    return (
        <div>
            <form>
                <label htmlFor="color_name">Color<input type="text" id='color_name' name="color_name" onChange={handleChange}/></label>
                <label htmlFor="color_hex">codigo color<input type="text" id='color_hex' name="color_hex" onChange={handleChange}/></label>
                <label htmlFor="temperature">temperatura<input type="number" id='temperature' name="temperature" onChange={handleChange}/></label>
                <button onClick={handleAdd}>Agregar</button>
            </form>
        </div>
    );
}

export default CreateRollsPage;
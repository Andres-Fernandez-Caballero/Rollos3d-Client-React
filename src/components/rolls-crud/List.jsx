import React, {useContext} from 'react';
import { useDatabase } from '../../hooks/useDatabase';
import imgRollo2 from './../../assets/rollo_2.png';
import {DatabaseContext} from "../../contexts/Database.context";

const List = () => {

    const {rollos} = useContext(DatabaseContext);


    return(
        <>
            <ul>
                {rollos.map(
                    (rollo, index) => {
                        return (
                            <li key={index}>
                                <div>
                                    <div style={{backgroundColor: rollo.color_hex}} className='rollo-img' >
                                        <img src={imgRollo2} alt="rollo de impresora 3d" width={50}/>
                                        <p>{rollo.color_name}</p>
                                        
                                    </div>
                                </div>
                            </li>)
                    })}
            </ul>
        </>
    );
};

export default List;
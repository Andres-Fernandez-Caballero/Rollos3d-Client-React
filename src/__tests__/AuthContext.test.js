import {AuthContext} from "../contexts/Auth.context";
import React, {useContext} from "react";
import {render, screen} from "@testing-library/react";
import {useGoogleAuth} from "../hooks/useGoogleAuth";

describe('Context AuthContext', () => {



    it('create a authContext with isAuth flag on false', () => {

        const ComponentTest = () => {

            const {userAuth} = useGoogleAuth();

            return (
                <AuthContext.Provider value={userAuth}>
                    <div>
                        <p aria-label='contenedor'>{userAuth.isGuest? 'visitante': 'usuario'}</p>
                    </div>
                </AuthContext.Provider>
            );
        }

        render(<ComponentTest/>);

        expect(screen.getByLabelText('contenedor').textContent).toBe("visitante");
   });
});
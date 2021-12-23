import {render, screen} from "@testing-library/react";
import React from "react";
import LoginPage from "../pages/LoginPage";
import Login from "../components/Login";

describe('Page login', () => {
    it('Login Page sould exist', () => {
        render(<LoginPage />);
        const title = screen.getByRole('title');
        expect(title).toBeInTheDocument();
    });
    it('flag isGuest at begin sould be false and localstorage auth most be null', () => {
        render(<LoginPage/>);
        expect(screen.getByLabelText('auth-state').textContent).toBe('Visitante')
        expect(localStorage.getItem('auth')).toBeNull()
    })

})
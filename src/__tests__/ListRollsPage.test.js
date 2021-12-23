import {render, screen} from "@testing-library/react";
import ListRollsPage from "../pages/private/ListRollsPage";
import{Link, MemoryRouter as Router} from "react-router-dom";

describe("Page Lista de rollos", () => {
    it('should exist', function () {
        render(<Router><ListRollsPage/></Router>)
        expect(screen.getByLabelText('list')).toBeInTheDocument();
    });
})
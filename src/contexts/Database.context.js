import { createContext } from "react";

const iniDatabaseContext = {
    rollos: [],
    dispatchDatabaseEvent:() => {}
};

export const DatabaseContext = createContext(iniDatabaseContext);

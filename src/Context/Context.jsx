import { createContext, useState } from "react";

const REstate = createContext()
const Context = ({children}) => {
    const [data, setData] = useState([]);

    const value = {
        data,
        setData
    }
    return (
        <REstate.Provider value={value}>
            {children}
        </REstate.Provider>
    );
};

export default Context;
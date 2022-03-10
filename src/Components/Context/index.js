import { createContext, useContext } from "react";

const ThemeContext = createContext();

export default function Context() {
    return (
        <ThemeContext.Provider value={{ mode: 'dark' }}>
            <hr />
            <h4>useContext</h4>
            <Button/>

        </ThemeContext.Provider>
    )
}


function Button() {
    const theme = useContext(ThemeContext);

    return (
        <button>{theme.mode}</button>
    );
}
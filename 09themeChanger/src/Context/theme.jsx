import {createContext, useContext} from "react";


// this ia another way of writing context API
// here i want a default object to be present
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}

})

export const ThemeProvider= ThemeContext.Provider

export default function UseTheme (){
    return useContext(ThemeContext)
}
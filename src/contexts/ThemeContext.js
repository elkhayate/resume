import React,{createContext, useState} from 'react';



export const ThemeContext = createContext();


export default function ThemeContextProvider(props) {
    const [isLight, setLight] = useState(true);
    const [theme,] = useState({
        light : {syntax : "rgba(31, 46, 53, 0.8)" , bg : "white"},
        dark : {syntax : "white", bg : "black"}
    })
    const toggler = () => {
        setLight(!isLight);
    }
    return(
        <ThemeContext.Provider value={{isLight, toggler, light : theme.light, dark : theme.dark}} >
            {props.children}
        </ThemeContext.Provider>
    )
}

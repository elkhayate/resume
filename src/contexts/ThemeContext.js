import React,{createContext, useState} from 'react';



export const ThemeContext = createContext();


export default function ThemeContextProvider(props) {
    const [isLight, setLight] = useState(false);
    const [theme,] = useState({
        light : {syntax : "black" , bg : "#f3f3f3", bs : "0px 4px 12px black"},
        dark : {syntax : "white", bg : "black", bs :"0px 4px 12px white"},
        darkcard : {bg : "#282d35"},
        lightcard : {bg : "white"}
    })
    const toggler = () => {
        setLight(!isLight);
    }
    return(
        <ThemeContext.Provider value={{isLight, toggler, light : theme.light, dark : theme.dark, darkcard : theme.darkcard, lightcard : theme.lightcard}} >
            {props.children}
        </ThemeContext.Provider>
    )
}

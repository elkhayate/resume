import React,{createContext, useState} from 'react';



export const ThemeContext = createContext();


export default function ThemeContextProvider(props) {
    const [isLight, setLight] = useState(false);
    const [theme,] = useState({
        light : {syntax : "black" , bg : "#f3f3f3", bs : "0px 4px 12px black"},
        dark : {syntax : "white", bg : "black", bs :"0px 4px 12px white"},
        darkcard : {bg : "#282d35"},
        lightcard : {bg : "white"},
        ilight : {syntax : "black", bg : "#FFFFFF", br : "1px solid #7A7A7A"},
        idark : {syntax : "white", bg : "#54595F", br : "1px solid #6C5CCC"}
    })
    const toggler = () => {
        setLight(!isLight);
    }
    return(
        <ThemeContext.Provider value={{ilight : theme.ilight, idark : theme.idark, isLight, toggler, light : theme.light, dark : theme.dark, darkcard : theme.darkcard, lightcard : theme.lightcard}} >
            {props.children}
        </ThemeContext.Provider>
    )
}

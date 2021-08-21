import React,{useContext} from 'react';
import style from "./compo.module.css"
import on from "../img/logoon.png";
import off from "../img/logooff.png"
import { ThemeContext } from '../contexts/ThemeContext';
import night from "../img/night.png";
import sun from "../img/sun.png";
import{Link} from "react-router-dom";

function Navbar() {
    const {isLight, toggler, dark, light} = useContext(ThemeContext);
    const onOroff = isLight ? on : off;
    const theme = isLight ? light : dark;
    const offORon = isLight ? night : sun;
    const Style = {textDecoration: 'none', cursor: "pointer"};
    return(
        <div style = {{backgroundColor : theme.bg, color : theme.syntax}} className={style.container}>
        <div  className={style.navbar}>
            <div  className={style.logo}>
            <Link to ="/">
                <img src={onOroff} alt = "logo"/>
            </Link>    
            </div>
            <ul className={style.navlinks} >
                <Link style={Style} to="/">
                    <li style={{color : isLight?"" : theme.syntax}}>Home</li>
                </Link>
                <Link style={Style} to="/education">
                    <li style={{color : isLight?"" : theme.syntax}}>Education</li>
                </Link>
                <Link style={Style} to ="/projects">
                    <li style={{color : isLight?"" : theme.syntax}}>Projects</li>
                </Link>
                <Link style={Style} to ="contact">
                    <li style={{color : isLight?"" : theme.syntax}}>Contact</li>
                </Link>   
            </ul>
            <img className={style.theme} onClick={toggler} src={offORon} alt = "theme" />
        </div>
        </div>
    )
}

export default Navbar;
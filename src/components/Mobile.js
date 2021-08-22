import React,{useContext, useState} from 'react';
import on from "../img/logoon.png";
import off from "../img/logooff.png"
import black from "../img/menub.png";
import white from "../img/menuw.png";
import style from "../styles/nav.module.css";
import{Link} from "react-router-dom";
import { ThemeContext } from '../contexts/ThemeContext';
import night from "../img/night.png";
import sun from "../img/sun.png";

export default function Mobile() {
    const {isLight, toggler, dark, light} = useContext(ThemeContext)
    const [show, setShow] = useState(false);
    const onOroff = isLight ? on : off
    const offORon = isLight ? night : sun;
    const bORw = isLight ? black : white;
    const theme = isLight ? light : dark;
    const Style = {textDecoration: 'none', cursor: "pointer"};
    return (
        <div style = {{backgroundColor : theme.bg, color : theme.syntax}} className={style.cont}>
            <div className={style.mobile}>
            <div  className={style.logom}>
            <Link to ="/">
                <img src={onOroff} alt = "logo"/>
            </Link>    
            </div>
            <img className={style.themem} onClick={toggler} src={offORon} alt = "theme" />
            <img className={style.burger} style={{cursor:"pointer"}} src={bORw} onClick={() => {setShow(!show)}} alt ="hamburger menu"/>
            </div>
            {
                show && 
            <ul className={style.dropDown} >
                <Link style={Style} to="/">
                    <li style={{color : isLight?"" : theme.syntax, listStyle:"none"}} onClick={() => {setShow(false)}}>Home</li>
                </Link>
                <Link style={Style} to="/education">
                    <li style={{color : isLight?"" : theme.syntax, listStyle:"none"}} onClick={() => {setShow(false)}}>Education</li>
                </Link>
                <Link style={Style} to ="/projects">
                    <li style={{color : isLight?"" : theme.syntax, listStyle:"none"}} onClick={() => {setShow(false)}}>Projects</li>
                </Link>
                <Link style={Style} to ="contact">
                    <li style={{color : isLight?"" : theme.syntax, listStyle:"none"}} onClick={() => {setShow(false)}}>Contact</li>
                </Link>   
            </ul>
            }
        </div>
    )
}
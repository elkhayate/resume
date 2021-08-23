import React,{useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import style from "../styles/edu.module.css";


export default function Uni(props) {
    const {isLight, dark, light, darkcard, lightcard} = useContext(ThemeContext);
    const theme = isLight ? light : dark;
    const themem = isLight ? lightcard : darkcard;
    return(
        <div style = {{background: themem.bg, color : theme.syntax, boxShadow : theme.bs}} className={style.uni}>
            <h1>{props.title}</h1>
            <p>{props.semi}</p>
        </div>
    )
}
import React,{useContext} from 'react';
import style from "../styles/edu.module.css";
import { ThemeContext } from '../contexts/ThemeContext';

export default function Skill(props) {
    const {isLight, dark, light, darkcard, lightcard} = useContext(ThemeContext);
    const theme = isLight ? light : dark;
    const themem = isLight ? lightcard : darkcard;
    return (
        <div className={style.skill}>
            <img src={props.src} alt = {props.alt} />
            <h3>{props.title}</h3>
        </div>
    )
}
import React,{useContext} from 'react';
import style from "../styles/pro.module.css";
import { ThemeContext } from '../contexts/ThemeContext';

export default function Project(props) {
    const {isLight, dark, light} = useContext(ThemeContext);
    const theme = isLight ? light : dark;
    return(
        <div style = {{ color : theme.syntax}} className={style.container}>
            <h1>{props.title}</h1>
            <img src={props.src} alt = {props.alt} />
            <p>{props.descri}</p>
            <div className={style.links}>
                <a href={props.url}>See the project</a>
                <a href={props.github}>Browse the code</a>
            </div>
        </div>
    )
}
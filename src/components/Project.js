import React,{useContext} from 'react';
import style from "../styles/pro.module.css";
import { ThemeContext } from '../contexts/ThemeContext';
import ext from "../img/externalb.png"
import git from "../img/git.png"
import extl from "../img/extl.png";
import gitl from "../img/gitl.png";

export default function Project(props) {
    const {isLight, dark, light, darkcard, lightcard} = useContext(ThemeContext);
    const theme = isLight ? light : dark;
    const themem = isLight ? lightcard : darkcard;
    const onORoff = isLight ? git : gitl;
    const offORon = isLight ? ext : extl;
    return(
        <div style = {{background: themem.bg, color : theme.syntax, boxShadow : theme.bs}} className={style.container}>
            <h1>{props.title}</h1>
            <img className={style.proimg} src={props.src} alt = {props.alt} />
            <div className={style.links}>
                <a href={props.url}><img src={offORon} alt="visit link"/></a>
                <a href={props.github}><img src={onORoff} alt = "browse code"/></a>
            </div>
        </div>
    )
}
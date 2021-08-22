import React,{useContext} from 'react'
import style from "../styles/home.module.css";
import dev from "../img/dev.svg";
import { ThemeContext } from '../contexts/ThemeContext';

export default function Home() {
    const {isLight, dark, light} = useContext(ThemeContext);
    const theme = isLight ? light : dark;
    return (
        <div style = {{backgroundColor : theme.bg, color : theme.syntax}} className={style.container}>
            <div className={style.content}>
            
            <div className={style.info}>
                <h1>Hi, I'm Elkhayate</h1>
                <p>A passionate Web Developer, having an experience of building web applications, who love problem solving, discovering new technologies and use them to build multiple projects.</p>
            </div>
            <img src = {dev} alt ="web dev" />
            </div>
        </div>
    )
}
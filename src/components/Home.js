import React,{useContext} from 'react'
import style from "../styles/home.module.css";
import dev from "../img/dev.svg";
import { ThemeContext } from '../contexts/ThemeContext';
import {Link} from "react-router-dom"
import twitter from "../img/twitter.png"
import github from "../img/github.png";
import linkedin from "../img/linked.png"
export default function Home() {
    const {isLight, dark, light} = useContext(ThemeContext);
    const theme = isLight ? light : dark;
    const Style = {textDecoration: 'none'};
    return (
        <div style = {{backgroundColor : theme.bg, color : theme.syntax}} className={style.container}>
            <div className={style.content}>
            
            <div className={style.info}>
                <h1>Hi, I'm Elkhayate</h1>
                <p>A passionate Web Developer, having an experience of building web applications, who love problem solving, discovering and using new technologies to build multiple projects.</p>
                <Link style={Style} to="/files/myfile.pdf" target="_blank" download><button style={{backgroundColor:theme.bg, color : theme.syntax}} className={style.btn}>GET RESUME</button></Link>
            </div>
            <img src = {dev} alt ="web dev" />
            </div>
            <div className={style.social}>
                <h1>MY SOCIAL NETWORKS</h1>
                <div className={style.media}>
                    <a href="https://github.com/elkhayate"><img src = {github} alt = "git" /></a>
                    <a href="https://www.linkedin.com/in/mohamed-el-khayate-4535a91b6/"><img src={linkedin} alt= "linkedin" /></a>
                    <a href="https://www.twitter.com/mohamed73527524"><img src={twitter} alt = "twitter" /></a>
                </div>

            </div>
        </div>
    )
}


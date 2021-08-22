import React from 'react';
import style from "../styles/pro.module.css";

export default function Project(props) {
    return(
        <div className={style.container}>
            <h1>{props.title}</h1>
            <img src={props.src} alt = {props.alt} />
            <p>{props.descri}</p>
            <div className={style.links}>
                <a href={props.url}>See the project</a>
                <a href={props.github}>Browse the code.</a>
            </div>
        </div>
    )
}
import React from 'react';
import style from "../styles/edu.module.css";

export default function Skill(props) {

    return (
        <div className={style.skill}>
            <img src={props.src} alt = {props.alt} />
            <h3>{props.title}</h3>
        </div>
    )
}
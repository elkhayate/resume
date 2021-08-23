import React,{useState, useEffect, useContext} from 'react';
import sanityClient  from '../client';
import style from "../styles/edu.module.css";
import Skill from './Skill';
import Uni from './Uni';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Education() {
    const [uni, setUni] = useState([]);
    const [skill, setSkill] = useState([]);
    useEffect(() => { sanityClient.fetch('*[_type == "skill"]{title,mainImage{asset -> {_id, url}, alt}}').then((data) => setSkill(data)).catch(console.error)},[]);
    useEffect(() => { sanityClient.fetch('*[_type == "institute"]{ certificate, insti}').then((data) => setUni(data)).catch(console.error);
    },[])
    const {isLight, dark, light} = useContext(ThemeContext);
    const theme = isLight ? light : dark;
    return(
        <div style = {{backgroundColor : theme.bg, color : theme.syntax}} className={style.education}>
        <div className={style.container}>
            <div className={style.edu}>
                <h1>Education</h1>
            {
                uni.map((u) => <Uni title = {u.certificate} semi = {u.insti}  />)
            }
            </div>
            <div className={style.skillss}>
            <h1>Languagues and Frameworks</h1>
            <div className={style.skills}>
                
            {
                skill.map((s) => <Skill title = {s.title} src = {s.mainImage.asset.url} alt = {s.mainImage.asset.alt} />)
            }
            </div>
            </div>
            
        </div>
        </div>
    )
}
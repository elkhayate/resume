import React,{useState, useEffect, useContext} from 'react'
import sanityClient  from '../client';
import Project from './Project';
import style from "../styles/pro.module.css";
import { ThemeContext } from '../contexts/ThemeContext';
export default function Projects() {
    const [project, setProject] = useState([]);
    useEffect(() => {sanityClient.fetch('*[_type == "project"]{title, mainImage{asset -> {_id, url}, alt}, url, github}').then((data) => setProject(data)).catch(console.error)},[])
    const {isLight, dark, light} = useContext(ThemeContext);
    const theme = isLight ? light : dark;
    return (
            <div style = {{backgroundColor : theme.bg, color : theme.syntax}} className={style.projects}>
                <div className={style.test}/> 
            <div className={style.listt}>
        {
            project.map((pro) => <Project title = {pro.title} src = {pro.mainImage.asset.url} url = {pro.url} descri = {pro.description} github = {pro.github} alt = {pro.mainImage.url} />)
        }      
        </div>   
            </div>
    )
}
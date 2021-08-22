import React,{useState, useEffect} from 'react'
import sanityClient  from '../client';
import Project from './Project';


export default function Projects() {
    const [project, setProject] = useState([]);
    useEffect(() => {sanityClient.fetch('*[_type == "project"]{title, decription, mainImage{asset -> {_id, url}, alt}, url, github}').then((data) => setProject(data)).catch(console.error)},[])
    
    return (
        <>
        {
            project.map((pro) => <Project title = {pro.title} src = {pro.mainImage.asset.url} url = {pro.url} descri = {pro.description} github = {pro.github} alt = {pro.mainImage.url} />)
        }
        </>
    )
}
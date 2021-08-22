import React,{useState, useEffect} from 'react';
import sanityClient  from '../client';


export default function Education() {
    const [uni, setUni] = useState(null);
    const [skill, setSkill] = useState(null);
    useEffect(() => { sanityClient.fetch('*[_type == "skill"]{title, mainImage}').then((data) => setSkill(data)).catch(console.error)},[]);
    useEffect(() => { sanityClient.fetch('*[_type == "institute"]{ certificate, insti}').then((data) => setUni(data)).catch(console.error);
    },[])
    return(
        <div>

        </div>
    )
}
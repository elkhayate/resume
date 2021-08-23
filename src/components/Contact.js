import React,{useContext, useState} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import style from "../styles/con.module.css";
import contact from "../img/contact.svg";
import emailjs from 'emailjs-com';

function Contact() {
    const {ilight, idark, isLight, dark, light} = useContext(ThemeContext);
    const theme = isLight ? light : dark;
    const Theme = isLight ? ilight : idark;
    const [result, setResult] = useState(false) 
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0whlw9m', 'template_td8vw0s', e.target, 'user_zFHgQGxFSdfBy58bwTZuh')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          setResult(true)
      }
    return (
        <div style = {{backgroundColor : theme.bg, color : theme.syntax}} className={style.container}>
            <div className={style.contact}>
                <img src={contact} alt = "contact svg"/>
                <form className={style.form} onSubmit={sendEmail}>
                    <h1>Name :</h1>
                    <input style={{color : Theme.syntax, backgroundColor : Theme.bg, border : Theme.br}} type="text" name="name" required />
                    <h1>Mail :</h1>
                    <input style={{color : Theme.syntax, backgroundColor : Theme.bg, border : Theme.br}}type ="email" name="email" required  />
                    <h1>Message :</h1>
                    <textarea style={{color : Theme.syntax, backgroundColor : Theme.bg, border : Theme.br}} className={style.cmt} type="text" name = "message" required  />
                    <button style={{color : Theme.syntax}} className={style.send}>Send</button>
                    {result ? <p>Your message has been successfuly sent.</p> : null}
                </form>

            </div>
            
        </div>
    );
}

export default Contact;
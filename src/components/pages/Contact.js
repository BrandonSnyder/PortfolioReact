import React, {useState} from 'react';
import {
  BsGithub,
  BsLinkedin,
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
} from "react-icons/bs";

export default function Contact(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
       
        // Based on the input type, we set the state of either email, username, and password
        // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'
    
        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'name') {
          setName(inputValue);
        } else if (inputType === 'message') {
          setMessage(inputValue);
      };}
      const handleFormSubmit = (e) => {

        e.preventDefault()
        setName('');
        setEmail('');
        setMessage('');

        alert(`Thank you for your submission ${name}`);
      };

    


    return(
        <section className='contactContainer'>
          <p>Contact Me</p>
          <a href="mailto:Brandon.Snyder019@gmail.com? subject=Good Afternoon">
            {" "}
            <BsFillEnvelopeFill />  Brandon.Snyder019@gmail.com
          </a>
          <a href="tel:7576467117">
            {" "}
            <BsFillTelephoneFill />  757 646 7117
          </a>
          <p>Follow Me </p>
          <a href="https://www.linkedin.com/in/brandonlsnyder/">
            {" "}
            <BsLinkedin /> www.linkedin.com/in/brandonlsnyder
          </a>
          <a href="https://github.com/BrandonSnyder">
            {" "}
            <BsGithub /> github.com/BrandonSnyder
          </a>               
    </section>
  );
      }

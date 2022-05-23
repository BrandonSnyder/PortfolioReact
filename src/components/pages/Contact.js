import React, {useState} from 'react';

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
      <p>Hello {name}</p>
      <form className="form">
        <h1>Contact Me</h1>
            <div className='inputContainer'>
                    <div className='in1'>
                        <label for="name">Name</label>
                        <input 
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="name"
                    />
                    </div>
                    <div className='in1'>
                    <label for="name">Email</label>
                      <input 
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                    />  
                    </div>
                    <div className='in2'>
                        <label for="message">Message</label>
                      <input 
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="message"
                    />  
                    </div>
                    
            </div>
            
            
        {/* TODO Add a `onChange` attribute with a value of `handleInputChange` */}
        <button className='submitbtn' type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </section>
  );
      }

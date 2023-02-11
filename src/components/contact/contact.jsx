import React,{ useRef } from 'react'
import "./contact.css"
import { AiOutlineMail } from "react-icons/ai"
import { FaFacebookMessenger } from "react-icons/fa"
import { SiWhatsapp } from "react-icons/si"
import emailjs from "emailjs-com";

const Contact = () => {

 const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6a239jf', 'template_05h6nqu', form.current, 'MC7MBJpB87ngCYJdt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  
  return (
    <section id='contact' className='container'>
      <div className='contact__text-header'>
        <h4 className='text-light'>Get in Touch</h4>
        <h2>Contact Me</h2>
      </div>

      <div className='contact__section'>
        <div className='contact__cards'>
          <div className='contact__card'>
            <div className='contact__icons'>
              <AiOutlineMail />
              </div>
              <div className='contact_card-text'>
                <h3>Mail</h3>
                <h4 className='text-light'>MohammadNejat@Gmail.com</h4>
                <a href=""> Send Me Messge</a>
              </div>
            

          </div>
          <div className='contact__card'>
            <div className='contact__icons'>
              <FaFacebookMessenger />
            </div>
            <div className='contact_card-text'>
              <h3>Messenger</h3>
              <h4 className='text-light'>2Fast4U</h4>
              <a href=""> Send Me Messge</a>

            </div>
          </div>

          <div className='contact__card'>
            <div className='contact__icons'>
              <SiWhatsapp />
            </div>
            <div className='contact_card-text'>
              <h3>Whats App</h3>
              <h4 className='text-light'>09055098468</h4>
              <a href=""> Send Me Messge</a>
            </div>
          </div>  
        </div>
        <form className='contact__label' ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Enter Your Full Messge' id="" rows="7"></textarea>
          <button className='btn btn-primary' type="submit"> Submit </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
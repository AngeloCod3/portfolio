import './Contact.scss';
import Phone from '../../assets/phone.png'
import Email from '../../assets/email.png'
import Address from '../../assets/address.png'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'


const Contact = () => {

  const formRef = useRef();
  const [send,setSend] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e9sfac9', 'template_3fuucj9', formRef.current, 'b7c_0pqoX-zqK7K6I')
      .then((result) => {
          console.log(result.text);
          setSend(true);
      }, (error) => {
          console.log(error.text);
      });

  }



  return (
    <div className='contact-container'>
        <div className="contact-bg"></div>
        <div className="contact-wrapper">
          <div className="contact-left">
            <h2 className='contact-title'>Hit me up!</h2>
            <div className="c-info">
              <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
                +58 4123937431
                
                
              </div>
              <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
                contact@angelocode.com
              </div>
              <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              </div>
            </div>
          </div>
          <div className="contact-right">
            <p className="contact-descrip">
              <b>What can I do for you?</b> Let me know down below!
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input id='contactName' type="text" placeholder='Name' name='user_name' required/>
              <input type="text" placeholder='Subject' name='user_subject' required/>
              <input type="text" placeholder='Email' name='user_email' required/>
              <textarea name="message" cols="30" rows="10" placeholder='Write down your message or offer or whatever you want, this actually works!' required></textarea>
              <button>Submit</button>
              {send && <b>Thanks you, I'll texting you back!</b>}
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact
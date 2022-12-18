import './Contact.scss';
import Phone from '../../assets/phone.png'
import Email from '../../assets/email.png'
import Address from '../../assets/address.png'

const Contact = () => {
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
                contact@angelocode.co
              </div>
              <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              </div>
            </div>
          </div>
          <div className="contact-right">
            <p className="contact-descrip">
              What can I do for you? Let me know down below!
            </p>
            <form>
              
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact
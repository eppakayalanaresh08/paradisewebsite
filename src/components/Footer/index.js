import React from 'react'
import Logo from '../../images/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faYoutube, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import { FaUsers, FaLightbulb, FaShieldAlt, FaHandsHelping, FaHandshake, FaCertificate, FaTrophy } from 'react-icons/fa';
import "./index.css"

function Footer() {
  return (
    <div>
    <footer>
      <div className="footer-container">
        <div className='mainclass-div'>
          <div className='detail-div'>
              <div className='about-container'>
                <div className='about-card'>
                  <img src={Logo} alt='hdlogo' className='footer-logo'/>
                  <h1>HD Paradise</h1>
                </div>
                <div className='about-card2'>
                  <h2>Our Mission</h2>
                  <p>We strive to offer our customers the lowest possible price, the best available selection, and the utmost convenience.</p>
                  <h2>Our Vision</h2>
                  <p>To be earth's most customer-centric company where customers can find and discover anything they might want to buy online.</p>
                </div>
              </div>
              <div className='contact-div2'>
                    <div className='icons-div'>
                      <div>
                        <h2>Follow Us</h2>
                      </div>
                      <div className='icons-div-card'>
                        <a href="https://facebook.com" className='facebook'><FontAwesomeIcon icon={faFacebook} size='3x' style={{ color: 'rgb(237, 249, 236)' }}/></a>
                        <a href="https://twitter.com"><FontAwesomeIcon icon={faLinkedin}  size='3x' style={{ color: 'rgb(237, 249, 236)' }}/></a>
                        <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram}  size='3x' style={{ color: 'rgb(237, 249, 236)' }}/></a>
                        <a href="https://facebook.com" className='facebook'><FontAwesomeIcon icon={faYoutube} size='3x' style={{ color: 'rgb(237, 249, 236)' }}/></a>
                        <a href="https://twitter.com"><FontAwesomeIcon icon={faXTwitter}  size='3x' style={{ color: 'rgb(237, 249, 236)' }}/></a>
                      </div>
                    </div>
                    <div className='address-div'>
                      <h2>Contact Us</h2>
                      <address>
                        Your Company Address Here<br />
                        City, State, Zip Code<br />
                        Email: info@yourcompany.com<br />
                        Phone: (123) 456-7890
                      </address>
                    </div>
              </div>
          </div>
          <div className='hdvalues'>
            <h2>Our Values</h2>
            <div className='hadvalue-card'>
              <div>
                <span><FaUsers/> Customer Focus</span>
              </div>
              <div>
                <span><FaLightbulb/> Innovation</span>
              </div>
              <div>
                <span><FaShieldAlt/> Integrity</span>
              </div>
              <div>
                <span><FaHandsHelping/> Collaboration</span>
              </div>
              <div>
                <span><FaHandshake/> Respect</span>
              </div>
              <div>
                <span><FaCertificate/> Quality</span>
              </div>
              <div>
                <span><FaTrophy/> Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer;

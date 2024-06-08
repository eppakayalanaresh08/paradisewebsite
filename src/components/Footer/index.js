import React from 'react'
import "./index.css"

function Footer() {
  return (
    <div>
    <footer>
      <div className="footer-container">
        <div className="mission-vision">
          <h2>Our Mission</h2>
          <p>We strive to offer our customers the lowest possible price, the best available selection, and the utmost convenience.</p>
          <h2>Our Vision</h2>
          <p>To be earth's most customer-centric company where customers can find and discover anything they might want to buy online.</p>
        </div>
        <div className="values">
          <h2>Our Values</h2>
          <ul>
            <li>Customer Focus</li>
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Collaboration</li>
            <li>Respect</li>
            <li>Quality</li>
            <li>Excellence</li>
          </ul>
        </div>
        <div className="social-media">
          <h2>Follow Us</h2>
          <ul>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          </ul>
        </div>
        <div className="address">
          <h2>Contact Us</h2>
          <address>
            Your Company Address Here<br />
            City, State, Zip Code<br />
            Email: info@yourcompany.com<br />
            Phone: (123) 456-7890
          </address>
        </div>
      </div>
      
    </footer>
    </div>
  )
}

export default Footer;

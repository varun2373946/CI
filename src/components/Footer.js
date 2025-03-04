import React from 'react';
import './Footer.css';

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="App-footer">
      <div className="Footer-top">
        <div className="Footer-social">
          <h4>Follow Us On:</h4><br/>
          <a href="https://www.instagram.com/chennai_k_raja/?igsh=aTQ2Y2FoYzA4MWZ1" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.svg" alt="Instagram" className="Social-icon" />
          </a>
          <a href="https://www.youtube.com/@chennaikraja/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/youtube.svg" alt="YouTube" className="Social-icon" />
          </a>
        </div>
        <div className="Footer-contact">
          <h4>Contact Details:</h4><br/>
          <p><b>Address:</b> No 50 South Coovam River Road,<br/> Koomaleeswaranpet, <br/>Chennai - 600002</p>
          <p><b>Phone:</b>Phone: +91 9176194612  +91 9677166763<br/> +91 7358492977  +91 7550229637</p>
          <p><b>Email:</b> chennaikraja02@gmail.com</p>
        </div>
      </div>
      <div className="Footer-copyright">
        <p>&copy; {currentYear} CHENNAIKRAJA. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

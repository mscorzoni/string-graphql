import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';


const Footer = () => {
  return (
    <footer className="bck_b_dark">
      <div className="container">
        <div className="logo">
          Strings
        </div>
        <div className="wrapper">
          <div className="left">
            <h2>Contact information</h2>
            <div className="business_nfo">
              <div className="tag">
                <FontAwesomeIcon
                    icon={faCompass}
                    className="icon"
                 />
                 <div className="nfo">
                    <div>Adress</div>
                    <div>Kramer 2345</div>
                 </div>       
              </div>
              <div className="tag">
                <FontAwesomeIcon
                    icon={faPhone}
                    className="icon"
                 />
                 <div className="nfo">
                    <div>Phone</div>
                    <div>+77 5656565</div>
                 </div>     
              </div>
              <div className="tag">
                <FontAwesomeIcon
                    icon={faClock}
                    className="icon"
                 />
                 <div className="nfo">
                    <div>Working Hours</div>
                    <div>Mon-Sun/ 9am-8pm</div>
                 </div>     
              </div>
              <div className="tag">
                <FontAwesomeIcon
                    icon={faEnvelope}
                    className="icon"
                 />
                 <div className="nfo">
                    <div>Email</div>
                    <div>nfo@strings.com</div>
                 </div>     
              </div>
            </div>
          </div>
          <div className="left">
            <h2>Be the first to know</h2>
            <div>
              <div>
                Be the first to Know
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
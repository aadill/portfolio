import React, { memo } from "react";
import "./foooter.css";
import LinkedIn from '../assets/linkedin.png';
import Github from '../assets/github.png';
import Instagram from '../assets/instagram.png';
import Dark from '../assets/MainLogo.png';
const Footer = () => {
  return (
    <>
      <div className="footer wf-section">
        <div className="container-footer">
          <div className="footer-middle-wrap">
            <div className="footer-flex-wrap logo">
              <p className="footer-p">Made with lots of love and caffeine.</p>
              <div className="social-links-wrap">
                <a
                  href="https://www.linkedin.com/in/mohammed-adil-4565941a2/"
                  target="_blank"
                  className="social-link---light tum w-inline-block"
                >
                    <img src={LinkedIn} alt=""/>
                </a>
                <a
                  href="https://github.com/aadill"
                  target="_blank"
                  className="social-link---light tum w-inline-block"
                >
                   <img src={Github} alt=""/> 
                </a>
                <a
                  href="https://www.instagram.com/aadi__ll_/"
                  target="_blank"
                  className="social-link---light tum w-inline-block"
                >
                    <img src={Instagram} alt="" />
                </a>
              </div>
            </div>
            <div className="footer-col-grid">
              <div className="footer-col">
                <p className="mains">
                  Email
                </p>
                <p className="mains">
                  Phone
                </p>
                <p className="mains">
                  Address
                </p>
              </div>
              <div className="footer-col">
                <p>
                  madil9295@gmail.com
                </p>
                <p>
                  +91 8606794473
                </p>
                <p className="address">
                  Kerala,<br/>
                  Kozhikode,<br/>
                  India
                </p>
              </div>
            </div>
          </div>
          <div className="div-block-109"></div>
          <div className="footer-bottom-wrap">
            <div className="footer-flex-wrap first">
              <div className="legal">© Mohammed Adil 2024</div>
            </div>
            <div>
                <img className="darkLogo" src={Dark} alt=""/>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bottoms">
        <p>Information is the oil of the 21st century, and analytics is the combustion engine.</p>
      </div> */}
    </>
  );
};

export default Footer;

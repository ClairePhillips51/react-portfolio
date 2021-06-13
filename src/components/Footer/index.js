import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div>
                <ul className="navbar-nav">
                <li>
                    <a href="mailto:claireacam@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon title="Email Me: ClairePhillips712@gmail.com" icon={faEnvelope} size="2x" /></a>
                </li>
                <li>
                    <a href="/contact"><FontAwesomeIcon title= "(832)-741-8680" icon={faMobileAlt} size="2x"/></a>
                </li>
                <li>
                    <a href="https://github.com/ClairePhillips51" target="_blank" rel="noreferrer"><FontAwesomeIcon title="GitHub" icon={faGithub} size="2x" /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/claire-phillips-46baa062/" target="_blank" rel="noreferrer"><FontAwesomeIcon title="LinkedIn" icon={faLinkedin} size="2x" /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/clairecamerontv/?hl=en" target="_blank" rel="noreferrer"><FontAwesomeIcon title="Instagram" icon={faInstagram} size="2x" /></a>
                </li>
                </ul>
            </div>
        </nav>
    </footer>
  );
}

export default Footer;
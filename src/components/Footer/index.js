import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./style.css";

function Footer() {
    const linkStyle = {
        color: "#c1c8e4"
    };

    return (
        <footer id="footer">
            <nav className="navbar navbar-expand navbar-light d-flex justify-content-center">
                <div>
                    <ul className="navbar-nav">
                    <li>
                        <a href="mailto:claireacam@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon title="Email Me: ClairePhillips712@gmail.com" icon={faEnvelope} size="2x" style={linkStyle}/></a>
                    </li>
                    <li>
                        <a href="/contact"><FontAwesomeIcon title= "(832)-741-8680" icon={faMobileAlt} size="2x" style={linkStyle}/></a>
                    </li>
                    <li>
                        <a href="https://github.com/ClairePhillips51" target="_blank" rel="noreferrer"><FontAwesomeIcon title="GitHub" icon={faGithub} size="2x" style={linkStyle}/></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/claire-phillips-46baa062/" target="_blank" rel="noreferrer"><FontAwesomeIcon title="LinkedIn" icon={faLinkedin} size="2x" style={linkStyle}/></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/clairecam51/?hl=en" target="_blank" rel="noreferrer"><FontAwesomeIcon title="Instagram" icon={faInstagram} size="2x" style={linkStyle}/></a>
                    </li>
                    </ul>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;
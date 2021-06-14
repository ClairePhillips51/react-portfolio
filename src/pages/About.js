import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./about.css";

function About() {
    const linkStyle = {
        color: "#496ecc"
    };

    return (
        <div className="container">
            <div className="row">
                <div id="picLinks" className="col-12 col-lg-4 container">
                    <div className="row">
                        <div className="col-6 col-lg-12">
                            <img id="headshot" src ="./images/claire2.jpg" alt="A head shot of Claire Phillips" />
                        </div>
                        <div className="col-6 col-lg-12">
                            <a className="a" href="pictures/Claire_Phillips_Resume2.pdf" target="_blank" rel="noreferrer">My Resume</a>
                            <p id="connect">Connect with me:</p>
                            <div className="social-links">
                                <a href="https://github.com/ClairePhillips51" target="_blank" rel="noreferrer"><FontAwesomeIcon title="GitHub" icon={faGithub} size="2x" style={linkStyle}/></a>
                                <a href="https://www.linkedin.com/in/claire-phillips-46baa062/" target="_blank" rel="noreferrer"><FontAwesomeIcon title="LinkedIn" icon={faLinkedin} size="2x" style={linkStyle}/></a>
                                <a href="https://www.instagram.com/clairecam51/?hl=en" target="_blank" rel="noreferrer"><FontAwesomeIcon title="Instagram" icon={faInstagram} size="2x" style={linkStyle}/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-8">
                    <h2>About Me</h2>
                    <p>
                        I'm Claire Phillips. I am learning full stack web development and have experience in digital marketing and public relations. 
                        I am a digital marketing specialist at Dart Container corporation and am looking to take on the world of web developement. 
                        I recently completed a coding bootcamp through Michigan State Univeristy and am looking for a new adventure.
                        I have experience in both front-end and back-end development. I have a proven knowledge of database development, 
                        web programming, and web platform development. I aiming to leverage my skills to successfully fill the Web Developer role at your company. 
                        This protfolio will showcase some of the projects I've completed. You can find a full list of projects I'm working on or have
                        completed on my <a className="a" href="https://github.com/ClairePhillips51?tab=repositories" target="_blank" rel="noreferrer">GitHub</a>.
                        You can also find learn more about me in my <a className="a" href="pictures/Claire_Phillips_Resume2.pdf" target="_blank" rel="norfererrer">resume.</a>
                    </p>
                </div>
            </div>
        </div>

    );
}

export default About;
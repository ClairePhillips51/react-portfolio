import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function About() {
    return (
        <div id="main-container>">
        <h2> About Me: </h2>
            <div id="fancy_Circle">
                <img id="headshot" src ="./images/claire2.jpg" alt="A head shot of Claire Phillips" />
                <h3> Claire Phillips</h3>
                <a href="pictures/Claire_Phillips_Resume2.pdf" target="_blank" rel="noreferrer"> My Reusme</a>
                <p> Connect with me: </p>
                <div className="social-links">
                    <a href="mailto:claireacam@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon title="Email Me: ClairePhillips712@gmail.com" icon={faEnvelope} size="2x" /></a>
                    <a href="/contact"><FontAwesomeIcon title= "(832)-741-8680" icon={faMobileAlt} size="2x"/></a>
                    <a href="https://github.com/ClairePhillips51" target="_blank" rel="noreferrer"><FontAwesomeIcon title="GitHub" icon={faGithub} size="2x" /></a>
                    <a href="https://www.linkedin.com/in/claire-phillips-46baa062/" target="_blank" rel="noreferrer"><FontAwesomeIcon title="LinkedIn" icon={faLinkedin} size="2x" /></a>
                    <a href="https://www.instagram.com/clairecamerontv/?hl=en" target="_blank" rel="noreferrer"><FontAwesomeIcon title="Instagram" icon={faInstagram} size="2x" /></a>
                </div>
            </div>
                <p>
                    I'm Claire Phillips. I am learning full stack web development with experience in digital marketing and public relations. 
                    I am a digital marketing specialist at Dart Container corporation and am looking to take on the world of web developement. 
                    I recently completed a coding bootcamp through Michigan State Univeristy and am looking for a new adventure.
                    I have experience in both front-end and back-end development. I have a proven knowledge of database development, 
                    web programming, and web platform development. I aiming to leverage my skills to successfully fill the Web Developer role at your company. 
                    This protfolio will showcase some of the projects I've completed. You can find a full list of projects I'm working on or have completed on my 
                    <a href="https://github.com/ClairePhillips51?tab=repositories" target="_blank" rel="noreferrer"> GitHub page </a>
                    You can also find learn more about me in my <a href="pictures/Claire_Phillips_Resume2.pdf" target="_blank" rel="norfererrer"> resume.</a>
                </p>
        </div>

    );
}

export default About;
import React from "react";
import "./contact.css";

function Contact() {
    return (
        <div className="text-center">
            <h2> Contact Me </h2>
            <p> 
                Hello! Want to see more of my work? Reach out to me on my <a className="a" href="https://github.com/ClairePhillips51" target="_blank" rel="noreferrer">GitHub</a> profile.
            </p>
            <p>
                You can also connect with me on <a className="a" href="https://www.linkedin.com/in/claire-phillips-46baa062/" target="_blank" rel="noreferrer">LinkedIn</a>.
            </p>
            <p>
                Email me at <a className="a" href="mailto:claireacam@gmail.com" target="_blank" rel="noreferrer">ClairePhillips712@gmail.com</a> if you'd like to contact me directly.
            </p>
            <p>
                Reach me via cell phone at (832)-741-8680
            </p>
        </div>
    );
}

export default Contact;
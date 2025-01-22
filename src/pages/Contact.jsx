import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    return (
        <div className="contact-page">
            <h2>Contact Me!</h2>
            <p>
                <FontAwesomeIcon icon={faPhone} />  fr: +33 6 95 26 81 75
            </p>
            <p>
                <FontAwesomeIcon icon={faPhone} />  us: +1 240 242 5177
            </p>
            <p>
                <FontAwesomeIcon icon={faEnvelope} />  shaynambarclay@gmail.com
            </p>
            <p>
                <a href="https://www.linkedin.com/in/shaynambarclay/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
            </p>
            <p>
                <a href="https://github.com/ShaynaMBarclay" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
            </p>
        </div>
    );
}

export default Contact;
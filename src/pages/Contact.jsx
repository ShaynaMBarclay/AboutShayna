import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
          "service_f4sn5bj", 
          "template_ln6j7m4",
          formData,
          "B3sPGFgxCxjI0Tlbj"
        )
        .then(() => {
            setIsSent(true);
            setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
            console.error("Error sending message:", error);
        });
    };

    return (
        <div className="contact-page">
            <div className="contact-info">
            <h2>Contact Me!</h2>
            <p>For collaborations and business inquiries only.</p>
            <p>
                <FontAwesomeIcon icon={faPhone} />  us: +1 240 869 0958
            </p>
            <p>
                <FontAwesomeIcon icon={faEnvelope} />  shaynambarclay@gmail.com
            </p>
            <p>
                <a href="https://www.linkedin.com/in/shaynambarclay/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="social-icon" /> 
                </a>
            </p>
            <p>
                <a href="https://github.com/ShaynaMBarclay" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="social-icon" /> 
                </a>
            </p>
        
         </div>

         <div className="contact-form-container">
            <h3>Send Me a Message</h3>
            {isSent && <p className="success-message">Message sent Successfully!</p>}
            
            <form onSubmit={handleSubmit} className="contact-form">
                <label>Name:</label>
                <input
                   type="text"
                   name="name"
                   value={formData.name}
                   onChange={handleChange}
                   required
                   />

                   <label>Email:</label>
                   <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      />

              <label>Message:</label>
              <textarea
                 name="message"
                 value={formData.message}
                 onChange={handleChange}
                 required
                 ></textarea>

            <button type="submit">Send Message</button>
            </form>
        </div>

        </div>
    );
}

export default Contact;
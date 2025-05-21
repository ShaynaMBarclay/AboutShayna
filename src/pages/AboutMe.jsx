import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLightbulb, FaSyncAlt, FaHardHat, FaRocket } from "react-icons/fa";
import certificateImage from "../assets/IHCert.png";


function AboutMe() {
    const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation shortly after mount
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

    return (
        <div>
            <section className="about-me">
                  <div className="skills-section">
                    <div className="skills-boxes">
                        <div className="skill-box">
                        <FaLightbulb className="skill-icon" />
                        Creative
                        </div>
                        <div className="skill-box">
                        <FaSyncAlt className="skill-icon" />
                        Adaptability
                        </div>
                        <div className="skill-box">
                        <FaHardHat className="skill-icon" />
                            Hardworking
                            </div>
                        <div className="skill-box">
                        <FaRocket className="skill-icon" />
                            Dedicated
                       </div>
                        
                   <Link to="/contact" className="button-aboutme">Contact Me!</Link> 
                   
                    </div>
                    <a
                        href="https://www.credential.net/1d70bb7b-ad99-4375-8e86-382cce776203#acc.tWvdwRlS" 
                        target="_blank"
                         rel="noopener noreferrer"
                    >
                        <img
                        src={certificateImage}
                        alt="Ironhack Certification"
                       className={`certificate-image ${animate ? "pop-in" : ""}`}
                       />
                     </a>
                </div>
            
                <div className="divider"></div>
                    <div className="about-text">
             <p>Hello! I'm a Full-Stack Web Developer based in the United States, passionate about turning ideas into dynamic, real-world solutions. < br />
              My creative background has shaped my ability to approach coding with an intuitive sense of design, balance, and innovation. < br /> 
              I earned a certificate from Ironhack France, excelling in Frontend and Backend development while mastering remote collaboration across time zones. < br /> 
              My love for travel and diverse cultures has also taught me to embrace flexibility and teamwork. Let’s work together to bring your vision to life!
                </p>  
                </div>

           
            </section>
        </div>
        
    );
}

export default AboutMe;
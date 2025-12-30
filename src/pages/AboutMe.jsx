import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  FaLightbulb, 
  FaSyncAlt, 
  FaHardHat, 
  FaRocket, 
  FaBrain,            
  FaUsers,          
} from "react-icons/fa";
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
                       <div className="skill-box">
                         <FaBrain className="skill-icon" />
                              Curious
                          </div>
                        <div className="skill-box">
                        <FaUsers className="skill-icon" />
                             Collaborative
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
             <p>Hey, I’m Shayna! a U.S.-based freelance full-stack web developer helping individuals, creatives, and small businesses turn ideas into thoughtful, high-performing websites and web apps.

A graduate of Ironhack France, I combine strong technical foundations with a designer’s mindset to build clean, intuitive, and user-first digital experiences. I work primarily with JavaScript, React, Vite, Node.js, Firebase, and MongoDB, creating modern, scalable solutions that are easy to maintain and enjoyable to use.

My work ranges from immersive, concept-driven web experiences to practical tools like mood-tracking journals and lifestyle apps, all with one goal in mind: making your brand stand out and helping your online presence flourish.

I thrive in remote, collaborative environments and love working closely with clients who value clarity, creativity, and thoughtful execution. Whether you’re launching something new or refining what you already have, I’m here to help bring your vision to life, with clean code, intentional design, and coffee always in hand of course!

I can't wait to be apart of your journey. Let’s build something memorable ♡♡♡
                </p>  
                </div>

           
            </section>
        </div>
        
    );
}

export default AboutMe;
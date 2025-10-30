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
             <p>Full-Stack Web Developer | React & JavaScript Enthusiast | Creative Technologist (with coffee always in hand)

                Hey there! I’m Shayna, a U.S.-based full-stack web developer who loves bringing ideas to life through clean code, clever design, and a touch of creative chaos. A graduate of Ironhack France, I blend technical depth with a designer’s eye to craft digital experiences that actually feel good to use.

                I speak fluent JavaScript (and enough TypeScript to keep things civilized), and I build with tools like React, Vite, Node.js, and MongoDB, Firebase, plus a growing curiosity for all things AI.

               I’ve created everything from moon + tarot-inspired web experience that blends tech with intuition, to AI-powered mood tracking journal, to a skincare app that helps users understand their routine, each focused on one thing: making tech feel more human and solving the everyday problems we often overlook.

               I thrive in remote, collaborative environments where ideas bounce freely and good humor fuels great work. If you’re into building thoughtful, user-first digital experiences, let’s chat and make something people will remember.
                </p>  
                </div>

           
            </section>
        </div>
        
    );
}

export default AboutMe;
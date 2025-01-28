import { FaLightbulb, FaSyncAlt, FaHardHat, FaRocket } from "react-icons/fa";
function AboutMe() {
    return (
        <div>
            <section className="about-me">
                <div className="about-text">
             <p>Hello! I'm a Full-Stack Web Developer based in the United States, passionate about turning ideas into dynamic, real-world solutions. My creative background has shaped my ability to approach coding with an intuitive sense of design, balance, and innovation. I earned a certificate from Ironhack France, excelling in Frontend and Backend development while mastering remote collaboration across time zones. My love for travel and diverse cultures has also taught me to embrace flexibility and teamwork. Let’s work together to bring your vision to life!
                </p>  
                </div>
                <div className="divider"></div>
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
                    </div>
                </div>
            </section>
        </div>
        
    );
}

export default AboutMe;
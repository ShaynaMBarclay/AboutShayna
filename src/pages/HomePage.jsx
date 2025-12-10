import { Link } from "react-router-dom";
import pfp from '../assets/2026pfp.jpeg';
import resume from "../assets/SBResume.pdf"

function HomePage() {
    return (
        <div className="home-page">
            <section className="hero">
            <h1 className="typing-animation">Hello! I'm Shayna!👋</h1>
              
              <section className="middle-hero">
                <img src={pfp} alt="Shayna's Profile" className="profile-picture" />


                <h2>Full-Stack Web Developer | Code, creativity & caffeine powered ideas☕</h2>
                </section>

              <section className="buttons-homepage">
                   <Link to="/about-me" className="see-more-link"> About Me</Link> 
                   <a
                       href={resume}
                       download="ShaynaBarclay_Resume"
                       className="download-button"
                       >
                        Download my Resume
                       </a>
                       </section>
               
            </section>
            
        </div>
    );
}

export default HomePage;
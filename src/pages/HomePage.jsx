import { Link } from "react-router-dom";
import pfp from '../assets/pfpblacknwhite.jpg';
import resume from "../assets/resume.pdf";

function HomePage() {
    return (
        <div className="home-page">
            <section className="hero">
                <h1>Hello! I'm Shayna!👋</h1>
              
              <section className="middle-hero">
                <img src={pfp} alt="Shayna's Profile" className="profile-picture" />


                <h2> I am a Full-Stack Web Developer with a love for creativity and innovation.</h2>
                </section>

              <section className="buttons-homepage">
                   <Link to="/about-me" className="see-more-link"> About Me</Link> 
                   <a
                       href={resume}
                       download="Shayna_Resume"
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
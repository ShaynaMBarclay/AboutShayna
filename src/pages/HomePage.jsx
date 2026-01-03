import { Link } from "react-router-dom";
import pfp from '../assets/2026pfp.jpeg';
import resume from "../assets/SBResume.pdf"

function HomePage() {
    return (
        <div className="home-page">
            <section className="hero">
             <h1 className="sparkle-sweep">
             <span data-text="Hello! I'm Shayna!👋">Hello! I'm Shayna!👋</span>
             </h1>


              
              <section className="middle-hero">
                <img src={pfp} alt="Shayna's Profile" className="profile-picture" />


                <h2>Full-Stack Web Developer | Helping Small Businesses Build Their Brands Through Clean, Creative Websites</h2>
                </section>

              <section className="buttons-homepage">
                   <Link to="/about-me" className="see-more-link"> About Me</Link> 
                  <Link to="/projects" className="download-button"> View My Work</Link>
                       </section>
               
            </section> 
        </div>
    );
}

export default HomePage;
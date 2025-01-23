import { Link } from "react-router-dom";
import pfp from '../assets/pfpblacknwhite.jpg';

function HomePage() {
    return (
        <div className="home-page">
            <section className="hero">
                <h1>Hello! I'm Shayna!👋</h1>
              
              <section className="middle-hero">
                <img src={pfp} alt="Shayna's Profile" className="profile-picture" />

                <h2> I am a Full-Stack Web Developer with a love for creativity and innovation.</h2>
                </section>

                {/*<p>I'm a passionate Full-Stack Web Developer specializing in creating responsive and user-friendly web applications.
                   I enjoy turning ideas into interactive digital experiences, with strong communication and customer support. Let's build something amazing together!
                   </p>
                   <p> */}
                   <Link to="/about-me" className="see-more-link"> About Me</Link> 
               
            </section>
            
        </div>
    );
}

export default HomePage;
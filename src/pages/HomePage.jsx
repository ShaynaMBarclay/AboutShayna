import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="home-page">
            <section className="hero">
                <h1>Hello! I'm Shayna!👋</h1>
                <h2> I am a Full-Stack Web Developer with a love for creativity and innovation.</h2>
                <p>I'm a passionate Full-Stack Web Developer specializing in creating responsive and user-friendly web applications.
                   I enjoy turning ideas into interactive digital experiences, with strong communication and customer support. Let's build something amazing together!
                   </p>
                   <p>
                   <Link to="/about-me" className="see-more-link"> Read More→</Link> 
                </p>
            </section>
            
        </div>
    );
}

export default HomePage;
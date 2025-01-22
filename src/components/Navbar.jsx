import { Link } from "react-router-dom";
import pfp from '/src/assets/pfp.jpg';
import { FaHome, FaUser, FaEnvelope, FaProjectDiagram, FaTools } from "react-icons/fa";

function Navbar() {
    
    return (
        <nav className= "navbar">
            {/* Profile Picture*/}
            <div className="navbar-logo">
                <Link to="/">
                <img src={pfp} alt="Profile" />
                </Link>
                </div>

            <ul className= "navbar-links">
                
                
                    <Link to="/"><FaHome />Home</Link>
                
                    <Link to="about-me"><FaUser />About Me</Link>
                    
                    <Link to="/skills"><FaTools />Skills</Link>
                
                    <Link to="/contact"><FaEnvelope />Contact</Link>
                
                    <Link to="/projects"><FaProjectDiagram />Projects</Link>
                
                    
                
            </ul>
        </nav>
    );
}

export default Navbar;
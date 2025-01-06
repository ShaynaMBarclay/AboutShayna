import { Link } from "react-router-dom";

function Navbar() {
    
    return (
        <nav className= "navbar">
            <ul className= "navbar-links">
                
                    <Link to="/">Home</Link>
                
                    <Link to="about-me">About Me</Link>
                
                    <Link to="/blog">Blog</Link>
                
                    <Link to="/contact">Contact</Link>
                
                    <Link to="/projects">Projects</Link>
                
                    <Link to="/skills">Skills</Link>
                
            </ul>
        </nav>
    );
}

export default Navbar;
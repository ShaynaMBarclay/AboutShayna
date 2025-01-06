import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="about-me">About Me</Link>
                </li>

                <li>
                    <Link to="/blog">Blog</Link>
                </li>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>

                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                
                <li>
                    <Link to="/skills">Skills</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
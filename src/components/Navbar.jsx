import { Link, NavLink } from "react-router-dom";
import { FaHome, FaUser, FaEnvelope, FaProjectDiagram, FaTools } from "react-icons/fa";

function Navbar() {
    
    return (
        <nav className= "vertical-navbar">
            <ul className= "navbar-links">
              <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-link" : undefined
            }  
            >
               <FaHome />
               </NavLink>
               <NavLink
               to="/about-me"
               className={({ isActive }) =>
                  isActive ? "active-link" : undefined
            }
          >
            <FaUser />
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
            isActive ? "active-link" : undefined
            }
            >
                <FaTools />
            </NavLink>
            <NavLink 
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active-link" : undefined
            }
            >
             <FaEnvelope />
            </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
            isActive ? "active-link" : undefined
        }
        >
           <FaProjectDiagram />
        </NavLink>
        </ul>
       </nav>
    );
}

export default Navbar;
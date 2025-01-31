import { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import DomofSylv from "../assets/DomofSylv.png";
import adoptme from "../assets/adoptme.png";

function Projects() {

    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "The Dominator of Sylvariae",
            image: DomofSylv,
            description:`The Dominator of Sylvariae was my first project during my education at Ironhack, 
            designed to showcase my foundational skills in web development. This browser-based game demonstrates my 
            proficiency in HTML, CSS, JavaScript, DOM manipulation, and Object-Oriented Programming. 
            Players control a cat humanoid tasked with defeating creatures of the void.`,
            link: "https://shaynambarclay.github.io/The-Dominator-of-Sylvariae/"
        },
        {
            id: 2,
            title: "Adopt Me",
            image: adoptme,
            description: `Adopt Me was my second project at Ironhack, showcasing my expertise in web development. 
            This Single Page Application (SPA) is built using React with functional components and hooks, offering 
            a seamless and dynamic user experience across multiple views.`,
            link: "https://adoptmemeow.netlify.app/"
        }
    ];
    return (
        <div className="my-projects">
            <h2> My Projects</h2>
           <div className="projects-container">
            {projects.map((project) => (
                <div key={project.id} className="project-item" onClick={() => setSelectedProject(project)}>
                    <img src={project.image} alt={project.title} className="project-image" />
                    <h3>{project.title}</h3>
            </div>
            ))}
           </div>

           {/* Modal */}
           {selectedProject && (
            <ProjectModal
               project={selectedProject}
               onClose={() => setSelectedProject(null)}
               />
           )}
           </div>
        );
      }
              
export default Projects;
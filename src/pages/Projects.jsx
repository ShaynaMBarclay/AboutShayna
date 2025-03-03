import { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import DomofSylv from "../assets/DomofSylv.png";
import adoptme from "../assets/adoptme.png";
import portfolio from "../assets/portfolio.png";
import pixelpet from "../assets/pixelpet.png";
import frames from "../assets/Frames.png";

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
        },
        {
            id: 3,
            title: "My Website (WIP)",
            image: portfolio,
            description: `Welcome to my personal website! I'm Shayna, and this space showcases my experience, skills, and creative touch. 
            Built with React and functional components, this site is a continuous work in progress as I refine my abilities. 
            Thanks for stopping by! Feel free to reach out if you have any questions or want to connect.`,
            link: "https://aboutshayna.netlify.app/"
        },
        {
            id: 4,
            title: "Pixel Pet (WIP)",
            image: pixelpet,
            description: `Pixel Pet is a React-based browser game inspired by early 2000s Tamagotchi pets. 
            Players feed, pet, and bathe their pixel pet to keep it happy and healthy while managing its hunger, happiness, and health bars before they drop too low.
            Using useEffect and intervals, the pet's mood changes dynamically over time, becoming tired, stinky, and angry if neglected.
            I hand-drew the pet myself and am still refining the design, UI, and features to enhance the gameplay experience.
            PixelPet will be deployed soon!`,
        },
        {
            id: 4,
            title: "Frames & Levels",
            image: frames,
            description: `Frames & Levels is a MERN-stack gaming platform where users curate their game collections, track owned and wishlist titles, and share reviews and thoughts on each game. 
            The platform helps gamers rediscover old favorites and explore new adventures.
            Built as a Single Page Application (SPA) with React, it features a REST API backend using ExpressJS, MongoDB, and Mongoose, supporting full CRUD functionality across multiple database models. 
            Users can sign up, log in, and manage their collections securely with encrypted authentication.`,
            link: "https://frames-and-levels.netlify.app/"
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
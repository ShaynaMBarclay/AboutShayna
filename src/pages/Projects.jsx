import { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import DomofSylv from "../assets/DomofSylv.png";
import adoptme from "../assets/adoptme.png";
import portfolio from "../assets/portfolio.png";
import pixelpet from "../assets/pixelpet.png";
import frames from "../assets/Frames.png";
import crbarclay from "../assets/crbarclay.png";


function Projects() {

    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {

              id: 1,
              title: "Pixel Pet",
              image: pixelpet,
              description: `Pixel Pet is a A React-based browser game inspired by early 2000s Tamagotchi pets. 
              Players take care of their pixel pet Oliver by feeding, playing with, and bathing him, ensuring his hunger, happiness, and health stay high. 
              The game uses useEffect and setInterval to dynamically update the pet's mood over time, with Oliver becoming tired, stinky, and angry, if neglected. 
              As the player interacts with the pet, the mood and stats are constantly recalibrated, creating an evolving experience. 
              I hand-drew the pixel art for the pet, Oliver, giving it a unique, nostalgic charm. No ai generated art here!`,
              link: "https://pixeloliver.netlify.app/"
               },

        {
            id: 1.2,
            title: "CRBarclay Solutions (WIP)",
            image: crbarclay,
            description: `I designed and developed a responsive website for a real-world client in the ATM solutions industry. 
            The site features a custom image carousel, an engaging homepage layout with company branding, and dynamic routing with React Router. 
            Built using React and styled with CSS, the project showcases my ability to create functional and visually appealing web applications tailored to a client's specific needs. Permission to showcase WIP, Website will be deployed soon!`,
            link: ""
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
            link: "https://aboutshayna.dev/"
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
        },
         {
             id: 5,
             title: "The Dominator of Sylvariae",
             image: DomofSylv,
             description:`The Dominator of Sylvariae was my first project during my education at Ironhack, 
             designed to showcase my foundational skills in web development. This browser-based game demonstrates my 
             proficiency in HTML, CSS, JavaScript, DOM manipulation, and Object-Oriented Programming. 
             Players control a cat humanoid tasked with defeating creatures of the void.`,
             link: "https://shaynambarclay.github.io/The-Dominator-of-Sylvariae/"
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
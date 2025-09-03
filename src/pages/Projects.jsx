import { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import DomofSylv from "../assets/DomofSylv.png";
import adoptme from "../assets/adoptme.png";
import portfolio from "../assets/portfolio.png";
import pixelpet from "../assets/pixelpet.png";
import frames from "../assets/Frames.png";
import crbarclay from "../assets/crbarclay.png";
import journal from "../assets/journal.png";
import samport from "../assets/samport.png";
import angyportal from "../assets/angyportal.png";
import lillyport from "../assets/lillysport.png";
import colorfulcourt from "../assets/colorfulcourt.png";
import rikkiport from "../assets/rikkiport.png";
import skindex from "../assets/skin.png";
import recipe from "../assets/recipe.png";
import moon from "../assets/moon.png";
import crim from "../assets/crim.png";

function Projects() {

    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {

            id: 1.64543253,
            title: "Moon & Cards",
            image: moon,
            description: `Moon and Cards is a full-stack web app that lets users ask questions, draw tarot cards, and receive interactive readings. 
            Built with React (Vite) and an Express/Node.js API, it’s deployed on Netlify and Render, 
            showcasing my ability to design and deploy responsive, end-to-end applications.`,
            link: "https://lune.cards/"
             },
         {

            id: 1.6453,
            title: "The Skindex Analyzer",
            image: skindex,
            description: `Skindex Analyzer is a full-stack AI-powered skincare analysis web app built with React and Firebase, integrating Google's Gemini API for intelligent product evaluation. 
            Users input their skincare routine, and the app provides a personalized analysis, ideal usage times, potential ingredient conflicts, and AM/PM regimen suggestions. 
            Additional features include email export, emoji-enhanced summaries, and a mobile-first responsive design.`,
            link: "https://skindexanalyzer.com/"
             },
             {
            id: 1.3,
            title: "My Happy Little Journal",
            image: journal,
            description: `An interactive web app that helps users track their emotions by writing or speaking journal entries. 
            Users can choose or type their mood, receive AI-generated mental health tips or motivational quotes via Gemini AI integration, and save their reflections locally. 
            The app also supports importing and exporting journal entries for personal backups or cross-device use. 
            Built with React and React Router, it features clean user interface & smooth navigation between pages.`,
            link: "https://myhappylittlejournal.com/"
             },
              {
            id: 1.789,
            title: "La Cucina di Shay / Shay's Kitchen",
            image: recipe,
            description: `A responsive and dynamic full stack web application that allows users to explore, review, and see added recipes and restaurants categorized by country. The app includes an admin-only review form, image uploads via Firebase Storage, blog-style recipe posts, and a polished UI with mobile-first responsive design. 
            I implemented custom components for country filtering, dynamic star ratings, protected admin routes, and sleek UI animations using CSS. 
            Firebase handles authentication, real time data updates, and secure media storage.`,
            link: "https://lacucinadishay.com/"
             },
               {
             id: 2.6,
            title: "The Angy Portal",
            image: angyportal,
            description: `AngyPortal is a web-based communication platform designed to help people express grievances to their partners in a structured, emotionally safe way. 
            After a partner consents via a secure email verification process, users can submit feedback through a guided form. 
            The platform then sends this feedback directly to the partner via email. 
            Built with a React front end and a Firebase backend, AngyPortal emphasizes clarity, consent, and accountability in relationships,
             empowering users to voice their concerns while encouraging thoughtful dialogue.`,
            link: "https://angyportal.love/"
             },

               {
            id: 5,
            title: "Crimson Vial Commissions",
            image: crim,
            description: `This project is a responsive, React-based web application designed to handle complex commission requests for 3D artwork. 
            It features dynamic form fields, file uploads with live image previews, and integrates with Firebase Storage for secure image hosting. 
            The form submission is powered by EmailJS, allowing automated notifications with uploaded assets. 
            The UI is styled with custom fantasy-themed fonts, scrollbars, and interactive elements, with full mobile and tablet responsiveness. 
            Accessibility, usability, and visual hierarchy were carefully considered to provide a seamless experience for users submitting detailed creative requests.`,
            link: "https://crimson-vial-commissions.netlify.app/"
             },

            {
            id: 1.4,
            title: "Rikki's Digital Portfolio",
            image: rikkiport,
            description: `This responsive one-page React app was designed for a professional stylist to elegantly showcase their work and creative style. 
            Built with React (Vite) and styled using modern CSS techniques, the site blends soft visual elements, subtle animations, and a sleek, minimal layout. 
            Key features include a responsive image grid, a custom fade-in title animation, and a touch of personality through carefully selected fonts and shadows. 
            The project emphasizes clarity, visual flow, and an inviting user experience across all devices.`,
            link: "https://rikkisportfolio.netlify.app/"
             },
                {

            id: 1.4,
            title: "Samantha's Digital Portfolio",
            image: samport,
            description: `A sleek one-page React app designed to showcase a hairstylist’s work, personality, and booking info in a modern, animated format. 
            I built this portfolio with custom components, smooth transitions, and responsive styling to highlight the stylist’s brand while keeping the user experience bold and intuitive. 
            The navbar features the stylist's name and a "Book with Me" button that links directly to their Instagram, creating a seamless bridge between portfolio and bookings.`,
            link: "https://samanthakerivan.netlify.app/"
             },
        {
            id: 1.4,
            title: "LooksByLil Digital Portfolio",
            image: lillyport,
            description: `This portfolio is a vibrant one-page React app created for a barber/cosmetologist to showcase their work and style. 
            It blends retro neon aesthetics with modern web design principles.
            I crafted it with animated glowing effects, bold typography, and a fixed sidebar that channels a vintage arcade feel while ensuring smooth, responsive navigation across devices.
            The design highlights the client’s creativity and personality through eye-catching visuals, while keeping the user interface clean and easy to explore.`,
            link: "https://looksbylilportfolio.netlify.app/"
             },
           
             {
              id: 3.67,
            title: "Colorful.Court Portfolio",
            image: colorfulcourt,
            description: `This digital portfolio was built with React and Vite for a hairstylist whose brand blends edgy creativity with spooky, Halloween-inspired vibes.
            It features animated text, glowing effects, and eerie neon accents that reflect the stylist’s bold aesthetic and the unique atmosphere of their salon.
            Designed as a responsive one-page site, it captures the client’s personality through immersive visuals while keeping navigation smooth and user-friendly across all devices.`,
            link: "https://colorfulcourtportfolio.netlify.app/"
             }, 

        {
              id: 1,
              title: "Pixel Pet",
              image: pixelpet,
              description: `Pixel Pet is a React browser game inspired by Tamagotchi. 
              Players care for their pet, Oliver, by feeding, playing, and bathing him to maintain his mood and stats. 
              The game uses useEffect and setInterval to update Oliver’s emotions in real-time. 
              I hand-drew the pixel art to give it a nostalgic charm.`,
              link: "https://pixeloliver.netlify.app/"
               },

        {
            id: 1.2,
            title: "CRBarclay Solutions",
            image: crbarclay,
            description: `I designed and developed a responsive website for a real-world client in the ATM solutions industry. 
            The site features a custom image carousel, an engaging homepage layout with company branding, and dynamic routing with React Router. 
            Built using React and styled with CSS, the project showcases my ability to create functional and visually appealing web applications tailored to a client's specific needs.`,
            link: "https://crbarclaysolutions.com/"
        },
        {
            id: 2,
            title: "Adopt Me",
            image: adoptme,
            description: `Adopt Me was my second project at Ironhack, showcasing my expertise in web development. 
            This website is built using React with functional components and hooks, offering 
            a seamless and dynamic user experience across multiple views where Users can view pets for adoption, as well as add an animal that needs adopting.`,
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
              description: `Frames & Levels is my third project at Ironhack, a MERN-stack gaming platform where users curate their game collections, track owned and wishlist titles, and share reviews and thoughts on each game. 
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
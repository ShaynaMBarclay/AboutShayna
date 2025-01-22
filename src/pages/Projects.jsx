function Projects() {
    return (
        <div className="my-projects">
            <h2>Projects</h2>
            <p>
                <a href="https://shaynambarclay.github.io/The-Dominator-of-Sylvariae/"target="_blank" rel="noopener noreferrer">The Dominator of Sylvariae
                </a>
                <div className="sylv-video">
                    <video controls width="600">
                        <source src="domofsylv.mp4" type="video/mp4" />
                    
                    </video>
                </div>
            </p>
            <p>The Dominator of Sylvariae was my first project during my education at Ironhack, designed to showcase my foundational skills in web development. This browser-based game demonstrates my proficiency in HTML, CSS, JavaScript, DOM manipulation, and Object-Oriented Programming. Players control a cat humanoid tasked with defeating creatures of the void in a dynamic environment featuring win/lose mechanics. The game incorporates immersive elements like sound effects, music, and custom-commissioned artwork, enhancing the player's experience.
            The gameplay includes a three-strike system: if the player is hit three times, they lose. After each hit, a popup screen offers the choice to continue or sacrifice the character, ending the game. Additionally, the game features a fully functional restart option, along with a seamless flow through a Start screen, Game screen, and Game Over screen. This project reflects both my technical capabilities and creativity in crafting engaging user experiences.
            </p>
           
            <p>
                <a href="https://adoptmemeow.netlify.app/"target="_blank" rel="noopener noreferrer">AdoptMe
                </a>
                <div className="adoptme-video">
                    <video controls width="600">
                        <source src="adoptmevid.mp4" type="video/mp4" />
                    
                    </video>
                </div>
            </p>
            <p>
                Adopt Me was my second project during my education at Ironhack, showcasing my growing expertise in web development. This Single Page Application (SPA) is built using React with functional components and hooks, offering a seamless and dynamic user experience across multiple views. The application integrates with a mock backend and implements full CRUD (Create, Read, Update, Delete) functionality via an API.
                Adopt Me is an "e-commerce-like" adoption platform that features real animals in need of homes. Users can explore animal profiles with pictures, bios, and detailed information, filter animals to find their perfect match, and even submit adoption interest forms. Additional features include a chatbot to assist users with common questions and the ability to add or edit animal profiles. This project not only highlights my technical abilities but also reflects my dedication to building meaningful, user-friendly applications.
            </p>
        </div>
    );
}

export default Projects;
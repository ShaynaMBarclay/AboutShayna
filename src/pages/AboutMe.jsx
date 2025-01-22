import { Link } from "react-router-dom";

function AboutMe() {
    return (
        <div>
            <section className="about-me">
            <h2>About Me</h2>
            <p>Hello!
            I'm a dedicated Full-Stack Web Developer based in the United States, with extensive experience collaborating across multiple time zones, My passion for travel and exploring diverse cultures has taught me to embrace flexibility and collaboration, no matter the hour or location. I thrive on tackling challenges head-on and turning concepts into dynamic, real-world solutions. Let’s work together to make your vision a reality!</p>
            <p><Link to="/contact" className="contact-me">Lets get in Touch!</Link></p>
            <hr className="divider" />
            </section>

            <section className="longer-bio">
             <h3>How I Got Here</h3> 
             <p>From a young age, I was captivated by the internet and its endless possibilities. In the early 2000s, as the web began to flourish, I dreamed of creating my own website. By fifth grade, that dream became a reality when I built a simple HTML site for my friends. It was a space where we could share our love for Michael Jackson and connect about our passions even after school</p>  
             <p>That curiosity and excitement only grew during my high school years. I began creating blogs using HTML and CSS to share my interests and express my creativity. Coding wasn't just a skill—it became a hobby I was deeply proud of. However, my journey took a slight detour as I pursued a career in Cosmetology, channeling my creative energy into another form of design.</p>
             <h3>Why My Creativity Goes Above and Beyond</h3>
             <p>While studying to become a cosmetologist, I developed a deep appreciation for color theory. Understanding complementary colors and how different tones evoke unique emotions became second nature to me. Whether crafting a polished, professional look or something bold and edgy, I honed the ability to adapt designs to suit any vision.
                These experiences have shaped how I approach coding today. My love for design goes beyond aesthetics—I bring ideas to life with an intuitive sense of balance, adaptability, and innovation. Though my heart has always been with coding, my background in creative design gives me a unique edge, allowing me to craft digital experiences that truly stand out.</p>
             <h4>My Education</h4>
             <p>I hold a high school diploma and a degree in Cosmetology. While I no longer practice cosmetology, I value the importance of maintaining an up-to-date education, as many of the skills I honed—like creativity and attention to detail—directly complement my design abilities.
                To become the Full-Stack Web Developer I am today, I earned my certificate from Ironhack France, where I will graduate in February 2025, fully equipped to excel as both a Frontend and Backend Developer, with a particular passion for Frontend development.
                My journey into Web Development is as unique as it is rewarding. Not only was my coursework conducted entirely remotely, but I started my program (delivered in English) while living in the United States, working within a French time zone. I quickly adapted to this challenge, ensuring I completed all assignments on time and effectively collaborated with classmates across multiple time zones. Midway through the program, I moved to France for six months to immerse myself further while continuing to manage projects and communication across American time zones.
                During this time, I worked on small projects for friends, family, and small businesses, as well as personal endeavors. The experience of navigating remote work, different time zones, and cross-cultural collaboration has transformed what was once a challenge into one of my strengths. I approach these opportunities with excitement and passion, always ready to adapt and deliver results.</p>
             <hr className="divider" />
            </section>
        </div>
        
    );
}

export default AboutMe;
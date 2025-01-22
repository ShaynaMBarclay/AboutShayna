import SkillBadge from "../components/SkillBadge";

function Skills() {
    return (
        <div className="skill-badge">
            <h2>Skills</h2>
      <SkillBadge 
        label="JavaScript" 
        icon="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        level="Intermediate"
      />
      <SkillBadge 
        label="CSS" 
        icon="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
        level="Intermediate"
      />
      <SkillBadge 
        label="React" 
        icon="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        level="Intermediate"
      />
      <SkillBadge 
    label="Vite" 
    icon="https://vitejs.dev/logo.svg"
    level="Intermediate"
      />
     <SkillBadge 
    label="Express" 
    icon="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
    level="Intermediate"
/>
       
          <section className="skills-description">
          <p>
          I am a skilled Full-Stack Web Developer with proficiency in modern technologies including React, JavaScript, and CSS, which I use to build interactive, responsive, and visually engaging web applications. I have hands-on experience with Vite for fast, optimized builds, and npm for efficient package management. I am also well-versed in server-side development with Node.js and Express, creating robust APIs and handling token-based authentication for secure, scalable applications. Additionally, I am proficient in working with MongoDB and Mongoose to design and manage databases, ensuring seamless data interaction and storage. I am passionate about leveraging these tools to create innovative solutions and continuously stay updated with the latest advancements in web development.
          </p>
        </section>
      </div>
    );
}

export default Skills;
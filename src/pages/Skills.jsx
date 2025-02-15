import SkillBadge from "../components/SkillBadge";
import colorwheel from "../assets/color-wheel.png";
import frontend from "../assets/frontend.png";
import backend from "../assets/backend.png";

function Skills() {
    return (
      <div className="webdevskills">
        <h2> My Web Development Skills</h2>
        <div className="skill-badge">
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
    <SkillBadge 
  label="Photoshop" 
  icon="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
  level="Intermediate"
   />
   <SkillBadge 
  label="Color Theory" 
  icon={colorwheel}
  level="Expert"
  />
  <SkillBadge
  label="Frontend"
  icon={frontend}
  level="Intermediate"
  />
  <SkillBadge
  label="Backend"
  icon={backend}
  level="Intermediate"
  />
      </div>
      </div>
      
    );
}

export default Skills;
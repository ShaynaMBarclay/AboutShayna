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
          label="TypeScript" 
          icon="https://cdn.worldvectorlogo.com/logos/typescript.svg"
          level="Beginner"
        />
        <SkillBadge 
       label="HTML" 
       icon="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
       level="Expert"
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
  label="Firebase" 
  icon="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
  level="Intermediate"
/>
      <SkillBadge 
          label="MongoDB" 
          icon="https://webimages.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg"
          level="Intermediate"
        />
        <SkillBadge 
         label="RESTful APIs" 
         icon="https://cdn-icons-png.flaticon.com/512/2848/2848540.png"
         level="Intermediate"
       />
        <SkillBadge 
          label="AI Integration" 
          icon="https://cdn-icons-png.flaticon.com/512/4712/4712100.png"
          level="Beginner"
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
  label="Figma" 
  icon="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
  level="Beginner"
/>
<SkillBadge 
  label="Canva" 
  icon="https://cdn-icons-png.flaticon.com/512/5968/5968700.png"
  level="Intermediate"
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
  <SkillBadge 
  label="Git" 
  icon="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
  level="Intermediate"
/>
<SkillBadge 
  label="GitHub" 
  icon="https://cdn-icons-png.flaticon.com/512/25/25231.png"
  level="Intermediate"
/>
      </div>
      </div>
      
    );
}

export default Skills;
import SkillBadge from "../components/SkillBadge";

function Skills() {
    return (
        <div>
            <h2>Skills</h2>
            <SkillBadge 
        label="React" 
        icon="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        level="Advanced"
      />
      <SkillBadge 
        label="JavaScript" 
        icon="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        level="Intermediate"
      />
      <SkillBadge 
        label="CSS" 
        icon="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
        level="Advanced"
      />
        </div>
    );
}

export default Skills;
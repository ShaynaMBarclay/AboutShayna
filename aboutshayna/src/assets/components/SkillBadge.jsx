
import PropTypes from 'prop-types';

function SkillBadge({ label, icon, level, className }) {
  return (
    <div>
      {icon && <img src={icon} alt={`${label} icon`} />}
      <span>{label}</span>
      {level && <span>Level: {level}</span>}
    </div>
  );
}

SkillBadge.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  level: PropTypes.string,
  className: PropTypes.string,
};

export default SkillBadge;

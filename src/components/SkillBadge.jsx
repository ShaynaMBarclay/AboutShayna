
import PropTypes from 'prop-types';

function SkillBadge({ label, icon, level, className }) {
  return (
    <div className="badge">
      {icon && <img src={icon} alt={`${label} icon`} />}
      <span>{label}</span>
      <small>{level}</small>
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

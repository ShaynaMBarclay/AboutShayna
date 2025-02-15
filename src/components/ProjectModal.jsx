
function ProjectModal({ project, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a className="project-btn" href={project.link} target="_blank" rel="noopener noreferrer">Visit Project</a>
            </div>
        </div>
    );
}

export default ProjectModal;
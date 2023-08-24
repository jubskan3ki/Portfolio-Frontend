import React from 'react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    image: string;
    name: string;
    link: string;
    description: string;
    stack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, name, link, description, stack }) => {
    return (
        <div className={styles.projectCard}>
            {/* <img src={image} alt={name} className={styles.projectImage} /> */}
            <h3 className={styles.projectName}>{name}</h3>
            <p className={styles.projectDescription}>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Voir le projet</a>
            <div className={styles.projectStack}>
                {stack.map((item, index) => (
                    <span key={index} className={styles.stackItem}>{item}</span>
                ))}
            </div>
        </div>
    );
}

export default ProjectCard;

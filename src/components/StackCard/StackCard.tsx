import React from 'react';
import styles from './StackCard.module.css';

interface StackCardProps {
    image: string;
    name: string;
    description: string;
}

const StackCard: React.FC<StackCardProps> = ({ image, name, description }) => {
    return (
        <div className={styles.stackCard}>
            {/* <img src={image} alt={name} className={styles.stackImage} /> */}
            <h3 className={styles.stackName}>{name}</h3>
            <p className={styles.stackDescription}>{description}</p>
        </div>
    );
}

export default StackCard;

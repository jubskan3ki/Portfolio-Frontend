import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p>Contactez-moi à : contact@example.com</p>
            <div className={styles.socialLinks}>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </footer>
    );
}

export default Footer;

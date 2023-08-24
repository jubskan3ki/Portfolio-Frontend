import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    label: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', label, ...props }) => {
    const buttonClassName = variant === 'primary' ? styles.primaryButton : styles.secondaryButton;

    return (
        <button className={`${styles.button} ${buttonClassName}`} {...props}>
            {label}
        </button>
    );
}

export default Button;

import React from 'react';
import './Button.css';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}

/**
 * A reusable Button component with multiple variants and sizes
 * @param {ButtonProps} props - The button component props
 * @returns {JSX.Element} The rendered button component
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  children,
}) => {
  return (
    <button
      className={`btn btn--${variant} btn--${size}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children || label}
    </button>
  );
};

export default Button;

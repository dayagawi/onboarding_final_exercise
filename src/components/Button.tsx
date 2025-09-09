import React from 'react';
import './Button.css';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: 'neutral' | 'only-text' | 'filter';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'neutral',
  size = 'md',
  disabled = false,
  className = ''
}) => {
  return (
    <button
      className={`button button--${variant} button--${size} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
import React from 'react';
import './TextContainer.css';

interface TextContainerProps {
  text: string;
  className?: string;
  transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
}

export const TextContainer: React.FC<TextContainerProps> = ({
  text,
  className,
  transform = 'none'
}) => {
  const getTransformClass = () => {
    switch (transform) {
      case 'uppercase':
        return 'text-transform-uppercase';
      case 'lowercase':
        return 'text-transform-lowercase';
      case 'capitalize':
        return 'text-transform-capitalize';
      case 'none':
      default:
        return 'text-transform-none';
    }
  };

  return (
    <div className={`${className} ${getTransformClass()}`.trim()}>
      {text}
    </div>
  );
};
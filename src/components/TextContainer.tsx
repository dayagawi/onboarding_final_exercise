import React from 'react';

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
  const getTransformedText = () => {
    switch (transform) {
      case 'uppercase':
        return text.toUpperCase();
      case 'lowercase':
        return text.toLowerCase();
      case 'capitalize':
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      case 'none':
      default:
        return text;
    }
  };

  return (
    <div className={className}>
      {getTransformedText()}
    </div>
  );
};
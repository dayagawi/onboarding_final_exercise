import React from 'react';

interface ImageContainerProps {
  src: string;
  alt?: string;
  className?: string;
}

export const ImageContainer: React.FC<ImageContainerProps> = ({
  src,
  alt = "Image",
  className
}) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
    />
  );
};
import React from 'react';
import styles from './Avatar.module.css';
import Logo from "./logo.svg?react";
import ImageContainer from './ImageContainer';
import TextContainer from './TextContainer';

// Separate interfaces for each avatar type
type ImageAvatar = {
  type: 'image';
  src: string;
}

type InitialsAvatar = {
  type: 'initials';
  initials: string;
}

type IconAvatar = {
  type: 'icon';
}

type AvatarContent = ImageAvatar | InitialsAvatar | IconAvatar;

export interface AvatarProps {
  content: AvatarContent;
  size?: 'sm' | 'md' | 'lg' | 'xl'; // 32x32, 40x40, 80x80, 136x136
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  content,
  size = 'md',
  className = ''
}) => {
    
  // Validation for initials length (only when type is 'initials')
  if (content.type === 'initials' && content.initials.length !== 2) {
    console.error('Avatar: initials must be exactly 2 characters long');
  }

  const renderContent = () => {
    switch (content.type) {
        case 'image':
         return (
           <ImageContainer 
             src={content.src} 
             alt="User avatar" 
             className={styles['avatar__image']}
           />
         );
      
      case 'initials':
        return (
          <TextContainer 
            text={content.initials}
            className={styles['avatar__initials']}
            transform="uppercase"
          />
        );
      
      case 'icon':
        return (
          <Logo
            className={styles['avatar__icon']}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div 
      className={`${styles['avatar-wrapper']} ${className}`.trim()}
    >
      <div className={`${styles['type-wrapper']} ${styles[`avatar--${size}`]}`}>
        {renderContent()}
      </div>
    </div>
  );
};
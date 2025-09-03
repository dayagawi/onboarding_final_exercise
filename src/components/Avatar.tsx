import React from 'react';
import styles from './Avatar.module.css';
import Icon from "./icon.svg?react";
import { ImageContainer } from './ImageContainer';
import { TextContainer } from './TextContainer';

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

type AvatarProps = (ImageAvatar | InitialsAvatar | IconAvatar) & {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
};

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { type, size = 'md', className = '' } = props;
    
  // Get and trim initials (2 chars max) if they exist
  const getInitials = () => {
    if (type === 'initials') {
      const initials = props.initials;
      return initials.length > 2 ? initials.substring(0, 2) : initials;
    }
    return '';
  };

  const renderContent = () => {
    switch (type) {
        case 'image':
         return (
           <ImageContainer 
             src={props.src}
             alt="User avatar" 
             className={styles['avatar__image']}
           />
         );
      
      case 'initials':
        return (
          <TextContainer 
            text={getInitials()}
            className={styles['avatar__initials']}
            transform="uppercase"
          />
        );
      
      case 'icon':
        return (
          <Icon
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
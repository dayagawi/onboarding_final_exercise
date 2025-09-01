import React from 'react';
import './Avatar.css';

type AvatarType = 'image' | 'initials' | 'icon';

interface AvatarProps {
  // Avatar type content - only one can be active
  type: AvatarType;
  src?: string;           // Required when type is IMAGE
  initials?: string;       // Required when type is INITIALS (e.g., "JD")
  
  // Sizing
  size?: 'sm' | 'md' | 'lg' | 'xl'; // 32x32, 40x40, 80x80, 136x136
  
  // Positioning - will be used in creatorCard component
  position?: 'static' | 'absolute';
  absolutePosition?: {
    left?: string | number;
    bottom?: string | number;
    top?: string | number;
    right?: string | number;
  };
  
  // Styling
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  type,
  src,
  initials,
  size = 'md',
  position = 'static',
  absolutePosition,
  className = ''
}) => {
    
  // Avatar Type Validation
  if (type === 'image' && !src) {
    console.warn('Avatar: src is required when type is IMAGE');
  }
  
  if (type === 'initials' && !initials) {
    console.warn('Avatar: initials is required when type is INITIALS');
  }
  
  if (type === 'initials' && initials && initials.length !== 2) {
    console.warn('Avatar: initials must be exactly 2 characters long');
  }

  const renderContent = () => {
    switch (type) {
      case 'image':
        return (
          <img 
            src={src} 
            alt="User avatar" 
            className="avatar__image"
          />
        );
      
      case 'initials':
        return (
          <div className="avatar__initials">
            {initials?.toUpperCase()}
          </div>
        );
      
      case 'icon':
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
            <rect fill="var(--color-neutral)" fillOpacity="0.08"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M40.0002 23.3333C34.4773 23.3333 30.0002 27.8104 30.0002 33.3333C30.0002 38.8561 34.4773 43.3333 40.0002 43.3333C45.523 43.3333 50.0002 38.8561 50.0002 33.3333C50.0002 27.8104 45.523 23.3333 40.0002 23.3333ZM23.3335 33.3333C23.3335 24.1285 30.7954 16.6666 40.0002 16.6666C49.2049 16.6666 56.6668 24.1285 56.6668 33.3333C56.6668 42.538 49.2049 50 40.0002 50C30.7954 50 23.3335 42.538 23.3335 33.3333ZM24.8538 62.4214C21.3396 63.9819 20.0002 65.9527 20.0002 68.3333C20.0002 69.0788 20.1327 69.5007 20.3244 69.8065C20.5163 70.1125 20.974 70.6308 22.2075 71.1889C24.8439 72.3816 30.0538 73.3333 40.0002 73.3333C49.9465 73.3333 55.1564 72.3816 57.7929 71.1889C59.0264 70.6308 59.484 70.1125 59.6759 69.8065C59.8676 69.5007 60.0002 69.0788 60.0002 68.3333C60.0002 65.9527 58.6607 63.9819 55.1465 62.4214C51.5383 60.8192 46.2407 60 40.0002 60C33.7596 60 28.4621 60.8192 24.8538 62.4214ZM22.1482 56.3285C26.985 54.1807 33.3541 53.3333 40.0002 53.3333C46.6463 53.3333 53.0154 54.1807 57.8521 56.3285C62.783 58.518 66.6668 62.3806 66.6668 68.3333C66.6668 69.889 66.3827 71.6594 65.3244 73.3475C64.2663 75.0354 62.6406 76.3128 60.5408 77.2628C56.5106 79.0862 50.0538 80 40.0002 80C29.9465 80 23.4898 79.0862 19.4595 77.2628C17.3597 76.3128 15.7341 75.0354 14.6759 73.3475C13.6176 71.6594 13.3335 69.889 13.3335 68.3333C13.3335 62.3806 17.2174 58.518 22.1482 56.3285Z" fill="#A3A6AC" fill-opacity="0.48"/>
                <path d="M20.0002 68.3333C20.0002 65.9527 21.3396 63.9819 24.8538 62.4214C28.4621 60.8192 33.7596 60 40.0002 60C46.2407 60 51.5383 60.8192 55.1465 62.4214C58.6607 63.9819 60.0002 65.9527 60.0002 68.3333C60.0002 69.0788 59.8676 69.5007 59.6759 69.8065C59.484 70.1125 59.0264 70.6308 57.7929 71.1889C55.1564 72.3816 49.9465 73.3333 40.0002 73.3333C30.0538 73.3333 24.8439 72.3816 22.2075 71.1889C20.974 70.6308 20.5163 70.1125 20.3244 69.8065C20.1327 69.5007 20.0002 69.0788 20.0002 68.3333Z" fill="#A3A6AC" fill-opacity="0.48"/>
                <path d="M30.0002 33.3333C30.0002 27.8104 34.4773 23.3333 40.0002 23.3333C45.523 23.3333 50.0002 27.8104 50.0002 33.3333C50.0002 38.8561 45.523 43.3333 40.0002 43.3333C34.4773 43.3333 30.0002 38.8561 30.0002 33.3333Z" fill="#A3A6AC" fill-opacity="0.48"/>
            </svg>
        );
      
      default:
        return null;
    }
  };

  const positionStyles = position === 'absolute' && absolutePosition ? {
    position: 'absolute' as const,
    left: absolutePosition.left,
    bottom: absolutePosition.bottom,
    top: absolutePosition.top,
    right: absolutePosition.right,
  } : {};

  return (
    <div 
      className={`avatar-wrapper ${className}`.trim()}
      style={positionStyles}
    >
      <div className={`${type}-wrapper avatar--${size}`}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Avatar;
export type { AvatarType }; 
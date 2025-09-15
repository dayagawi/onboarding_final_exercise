import React from 'react';
import styles from './CreatorCard.module.css';
import { Avatar } from './Avatar';

interface CreatorCardProps {
  id: number;
  name: string;
  age: number;
  location: string;
  email: string;
  onDetailsClick?: () => void;
}

export const CreatorCard: React.FC<CreatorCardProps> = ({
  id,
  name,
  age,
  location,
  email,
  onDetailsClick
}) => {
  return (
    <div className={styles['creator-card']}>
    
      {/* Images */}
      <div className={styles.images}>
        <div className={styles.frame}> </div>
        <div className={styles.frame}> </div>
        <div className={styles.frame}> </div>
        
        {/* Avatar placeholder */}
        <Avatar 
          type="icon"
          size="lg"
          className={styles['creator-card-avatar']}
        />
      </div>
      
      {/* User information */}
      <div className={styles['user-info-container']}>
        <div className={styles['user-name-and-details']}>
          <h2 className={styles['user-name']}>{name}</h2>
          <p className={styles['user-details']}>{age} | {location}</p>
        </div>
        <p className={styles['user-email']}>{email}</p>
        
        {/* Details button */}
        <button className={styles['details-button']} onClick={onDetailsClick}>
          Details
        </button>
      
      </div>
    </div>
  );
};

export default CreatorCard; 
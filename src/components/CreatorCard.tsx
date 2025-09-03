import React from 'react';
import './CreatorCard.css';
import Button from './Button';
import Avatar from './Avatar';

interface CreatorCardProps {
  name: string;
  age: number;
  location: string;
  email: string;
  onDetailsClick?: () => void;
}

const CreatorCard: React.FC<CreatorCardProps> = ({
  name,
  age,
  location,
  email,
  onDetailsClick
}) => {
  return (
    <div className="creator-card">
    
      {/* Images */}
      <div className="images">
        <div className="frame"> </div>
        <div className="frame"> </div>
        <div className="frame"> </div>
        
        {/* Avatar picture placeholder */}
        <Avatar 
          type="icon"
          size="md"
          position="absolute"
          absolutePosition={{ left: '131px', bottom: '-56px' }}
        />
        </div>
      
      {/* User information */}
      <div className="user-info-container">
        <div className="user-name-and-details">
          <h2 className="user-name">{name}</h2>
          <p className="user-details">{age} | {location}</p>
        </div>
        <p className="user-email">{email}</p>
        
      {/* Details button */}
      <Button 
        variant="neutral" 
        size="md" 
        onClick={onDetailsClick}
      >
        Details
      </Button>
      
      </div>
    </div>
  );
};

export default CreatorCard; 
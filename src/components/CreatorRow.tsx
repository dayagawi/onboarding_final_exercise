import React from 'react';
import { Avatar } from './Avatar';
import styles from './CreatorRow.module.css';

interface CreatorRowProps {
  name: string;
  email: string;
  age: number;
  location: string;
}

export const CreatorRow: React.FC<CreatorRowProps> = ({
  name,
  email,
  age,
  location
}) => {
  return (
    <div className={styles['table-row']}>
      <div className={styles['data-cell']}>
        <div className={styles['name-cell']}>
          <Avatar type="icon" size="sm" />
          <span className={styles['name-text']}>{name}</span>
        </div>
      </div>
      <div className={`${styles['data-cell']} ${styles['email-text']}`}>{email}</div>
      <div className={`${styles['data-cell']} ${styles['age-text']}`}>{age}</div>
      <div className={`${styles['data-cell']} ${styles['location-text']}`}>{location}</div>
    </div>
  );
};
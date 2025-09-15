import React from 'react';
import { Avatar } from './Avatar';
import LightricksLogo from './Icons/lightricks_logo.svg?react';
import styles from './GlobalHeader.module.css';

export const GlobalHeader: React.FC = () => {
  return (
    <div className={styles['header-container']}>
      <header className={styles['header']}>
        <div className={styles['logo-container']}>
          <LightricksLogo className={styles['logo']} />
        </div>
        <Avatar
          type="initials"
          initials="TJ"
          size="md"
        />
      </header>
    </div>
  );
};
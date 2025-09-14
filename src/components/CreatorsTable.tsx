import React from 'react';
import { useCreatorStore } from '../stores/useCreatorStore';
import { useNavigate } from 'react-router-dom';
import { CreatorRow } from './CreatorRow';
import styles from './CreatorsTable.module.css';

export const CreatorsTable: React.FC = () => {
  const navigate = useNavigate();

  const handleRowClick = (creatorId: number) => {
    navigate(`/creator/${creatorId}`);
  };
  const { creators } = useCreatorStore();

  return (
      <div className={styles['creators-table']}>
        <div className={styles['table-header']}>
          <div className={`${styles['header-cell']} ${styles['name-header-cell']}`}>Name</div>
          <div className={`${styles['header-cell']} ${styles['email-header-cell']}`}>Email</div>
          <div className={`${styles['header-cell']} ${styles['age-header-cell']}`}>Age</div>
          <div className={`${styles['header-cell']} ${styles['location-header-cell']}`}>Location</div>
        </div>
        <div className={styles['table-body']}>
          {creators.map((creator: { id: number; name: string; email: string; age: number; location: string }) => (
            <CreatorRow
              key={creator.id}
              name={creator.name}
              email={creator.email}
              age={creator.age}
              location={creator.location}
            />
          ))}
        </div>
      </div>
  );
};
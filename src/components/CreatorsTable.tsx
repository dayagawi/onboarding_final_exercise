import React from 'react';
import { useCreatorStore } from '../stores/useCreatorStore';
import type { Creator } from '../stores/useCreatorStore';
import { useNavigate } from 'react-router-dom';
import { CreatorRow } from './CreatorRow';
import styles from './CreatorsTable.module.css';

export const CreatorsTable: React.FC = () => {
  const navigate = useNavigate();
  const handleRowClick = (creatorId: number) => {
    navigate(`/creator/${creatorId}`);
  };
  const { creators, searchResults, searchTerm, isSearching } = useCreatorStore();
  
  const dataToShow = searchResults.length > 0 ? searchResults : creators;
  const hasSearchTerm = searchTerm.trim().length > 0;

  return (
      <div className={styles['creators-table']}>
        <div className={styles['table-header']}>
          <div className={`${styles['header-cell']} ${styles['name-header-cell']}`}>Name</div>
          <div className={`${styles['header-cell']} ${styles['email-header-cell']}`}>Email</div>
          <div className={`${styles['header-cell']} ${styles['age-header-cell']}`}>Age</div>
          <div className={`${styles['header-cell']} ${styles['location-header-cell']}`}>Location</div>
        </div>
        <div className={styles['table-body']}>
          {hasSearchTerm && !isSearching && searchResults.length === 0 ? (
            <div className={styles['no-results-container']}>
              <p className={styles['no-results-message']}>No results found for "{searchTerm}"</p>
            </div>
          ) : (
            dataToShow.map((creator: Creator) => (
              <CreatorRow
                key={creator.id}
                id={creator.id}
                name={creator.name}
                email={creator.email}
                age={creator.age}
                location={creator.location}
                onRowClick={() => handleRowClick(creator.id)}
              />
            ))
          )}
        </div>
      </div>
  );
};
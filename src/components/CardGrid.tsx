import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreatorStore } from '../stores/useCreatorStore';
import type { Creator } from '../stores/useCreatorStore';
import { CreatorCard } from './CreatorCard';
import styles from './CardGrid.module.css';

export const CardGrid: React.FC = () => {
    const navigate = useNavigate();
    const handleDetailsClick = (creatorId: number) => {
        navigate(`/creator/${creatorId}`);
    };
    
    const { creators, searchResults, searchTerm, isSearching } = useCreatorStore();
    const hasSearchTerm = searchTerm.trim().length > 0;
    const dataToShow = searchResults.length > 0 ? searchResults : creators;

    return (
        <div className={styles['cards-grid']}>
            {hasSearchTerm && !isSearching && searchResults.length === 0 ? (
                <div className={styles['no-results-container']}>
                    <p className={styles['no-results-message']}>No results found for "{searchTerm}"</p>
                </div>
            ) : (
                dataToShow.map((creator: Creator) => (
                    <CreatorCard 
                        key={creator.id}
                        id={creator.id}
                        name={creator.name}
                        email={creator.email}
                        age={creator.age}
                        location={creator.location}
                        onDetailsClick={() => handleDetailsClick(creator.id)}
                    />
                ))
            )}
        </div>
    );
};
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreatorStore } from '../stores/useCreatorStore';
import { CreatorCard } from './CreatorCard';
import styles from './CardGrid.module.css';

export const CardGrid: React.FC = () => {

    const handleDetailsClick = (creatorId: number) => {
        navigate(`/creator/${creatorId}`);
    };
    
    const { creators } = useCreatorStore();

    return (
        <div className={styles['cards-grid']}>
            {creators.map((creator: { id: number; name: string; email: string; age: number; location: string }) => (
                <CreatorCard 
                    key={creator.id}
                    name={creator.name}
                    email={creator.email}
                    age={creator.age}
                    location={creator.location}
                    onDetailsClick={handleDetailsClick}
                />
            ))}
        </div>
    );
};
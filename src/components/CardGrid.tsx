import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CreatorCard } from './CreatorCard';
import styles from './CardGrid.module.css';

export const CardGrid: React.FC = () => {
    const navigate = useNavigate();

    const handleDetailsClick = (creatorId: number) => {
        navigate(`/creator/${creatorId}`);
    };

    return (
        <div className={styles['cards-grid']}>
            <CreatorCard
                id={1}
                name="Emily Johnson"
                age={34}
                location="Chicago IL"
                email="email@x.dummyjson.com"
                onDetailsClick={() => handleDetailsClick(1)}
            />
            <CreatorCard
                id={2}
                name="Emily Johnson"
                age={34}
                location="Chicago IL"
                email="email@x.dummyjson.com"
                onDetailsClick={() => handleDetailsClick(2)}
            />
            <CreatorCard
                id={3}
                name="Emily Johnson"
                age={34}
                location="Chicago IL"
                email="email@x.dummyjson.com"
                onDetailsClick={() => handleDetailsClick(3)}
            />
            <CreatorCard
                id={4}
                name="Emily Johnson"
                age={34}
                location="Chicago IL"
                email="email@x.dummyjson.com"
                onDetailsClick={() => handleDetailsClick(4)}
            />
            <CreatorCard
                id={5}
                name="Emily Johnson"
                age={34}
                location="Chicago IL"
                email="email@x.dummyjson.com"
                onDetailsClick={() => handleDetailsClick(5)}
            />
            <CreatorCard
                id={6}
                name="Emily Johnson"
                age={34}
                location="Chicago IL"
                email="email@x.dummyjson.com"
                onDetailsClick={() => handleDetailsClick(6)}
            />
            <CreatorCard
                id={7}
                name="Emily Johnson"
                age={34}
                location="Chicago IL"
                email="email@x.dummyjson.com"
                onDetailsClick={() => handleDetailsClick(7)}
            />
            <CreatorCard
                id={8}
                name="Emily Johnson"
                age={34}
                location="Chicago IL"
                email="email@x.dummyjson.com"
                onDetailsClick={() => handleDetailsClick(8)}
            />
            <CreatorCard
                id={9}
                name="Emily Johnson"
                age={34}
                location="Chicago IL"
                email="email@x.dummyjson.com"
                onDetailsClick={() => handleDetailsClick(9)}
            />
            <CreatorCard
                id={10}
                name="Emily Johnson"
                age={34}
                location="Chicago IL"
                email="email@x.dummyjson.com"
                onDetailsClick={() => handleDetailsClick(10)}
            />
            <CreatorCard
                id={11}
                name="Emily Johnson"
                age={34}
                location="Chicago IL"
                email="email@x.dummyjson.com"
                onDetailsClick={() => handleDetailsClick(11)}
            />
            <CreatorCard
                id={12}
                name="Emiliana Castillo Johnson Smith Kumar"
                age={34}
                location="Chicago IL"
                email="emiliana.castillo@email.com"
                onDetailsClick={() => handleDetailsClick(12)}
            />
            <CreatorCard
                id={13}
                name="Marryanna Johanson"
                age={34}
                location="Miami, FL"
                email="email@x.dummyjson.com"
                onDetailsClick={() => handleDetailsClick(13)}
            />
            <CreatorCard
                id={14}
                name="Yoisel Gonzalez"
                age={67}
                location="New York"
                email="emailemailemailemail@x.dummyjson.com"
                onDetailsClick={() => handleDetailsClick(14)}
            />
            <CreatorCard
                id={15}
                name="Benjamin Smith"
                age={100}
                location="very long location name that should be truncated at the end"
                email="emailemailemailemail@x.dummyjson.com"
                onDetailsClick={() => handleDetailsClick(15)}
            />
        </div>
    );
};
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './CreatorPage.module.css';
import { Button } from '../components/Button';

export const CreatorPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div className={styles['creator-details']}>
      <Button
        variant="only-text"
        size="lg"
        onClick={() => navigate('/')}
      >
        Back to Search
      </Button>

      <p>This is an empty page for creator with ID: {id}</p>
    </div>

  );
};
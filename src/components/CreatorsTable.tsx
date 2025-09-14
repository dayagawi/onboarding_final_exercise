import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CreatorRow } from './CreatorRow';
import styles from './CreatorsTable.module.css';

export const CreatorsTable: React.FC = () => {
  const navigate = useNavigate();

  const handleRowClick = (creatorId: number) => {
    navigate(`/creator/${creatorId}`);
  };

  return (
      <div className={styles['creators-table']}>
        <div className={styles['table-header']}>
          <div className={`${styles['header-cell']} ${styles['name-header-cell']}`}>Name</div>
          <div className={`${styles['header-cell']} ${styles['email-header-cell']}`}>Email</div>
          <div className={`${styles['header-cell']} ${styles['age-header-cell']}`}>Age</div>
          <div className={`${styles['header-cell']} ${styles['location-header-cell']}`}>Location</div>
        </div>
        <div className={styles['table-body']}>
          <CreatorRow
            id={1}
            name="Hiro Joyce"
            email="email@x.dummyjson.com"
            age={34}
            location="Chicago, IL"
            onRowClick={() => handleRowClick(1)}
          />
          <CreatorRow
            id={2}
            name="Hiro Joyce"
            email="email@x.dummyjson.com"
            age={34}
            location="Chicago, IL"
            onRowClick={() => handleRowClick(2)}
          />
          <CreatorRow
            id={3}
            name="Hiro Joyce"
            email="email@x.dummyjson.com"
            age={34}
            location="Chicago, IL"
            onRowClick={() => handleRowClick(3)}
          />
          <CreatorRow
            id={4}
            name="Hiro Joyce"
            email="email@x.dummyjson.com"
            age={34}
            location="Chicago, IL"
            onRowClick={() => handleRowClick(4)}
          />
          <CreatorRow
            id={5}
            name="Hiro Joyce"
            email="email@x.dummyjson.com"
            age={34}
            location="Chicago, IL"
            onRowClick={() => handleRowClick(5)}
          />
          <CreatorRow
            id={6}
            name="Hiro Joyce"
            email="email@x.dummyjson.com"
            age={34}
            location="Chicago, IL"
            onRowClick={() => handleRowClick(6)}
          />
          <CreatorRow
            id={7}
            name="Hiro Joyce"
            email="email@x.dummyjson.com"
            age={34}
            location="Chicago, IL"
            onRowClick={() => handleRowClick(7)}
          />
          <CreatorRow
            id={8}
            name="Hiro Joyce"
            email="email@x.dummyjson.com"
            age={34}
            location="Chicago, IL"
            onRowClick={() => handleRowClick(8)}
          />
          <CreatorRow
            id={9}
            name="Hiro Joyce"
            email="email@x.dummyjson.com"
            age={34}
            location="Chicago, IL"
            onRowClick={() => handleRowClick(9)}
          />
          <CreatorRow
            id={10}
            name="Hiro Joyce"
            email="email@x.dummyjson.com"
            age={34}
            location="Chicago, IL"
            onRowClick={() => handleRowClick(10)}
          />
          <CreatorRow
            id={11}
            name="Hiro Joyce"
            email="email@x.dummyjson.com"
            age={34}
            location="Chicago, IL"
            onRowClick={() => handleRowClick(11)}
          />
        </div>
      </div>
  );
};
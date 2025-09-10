import React from 'react';
import { CreatorRow } from './CreatorRow';
import styles from './CreatorsTable.module.css';

export const CreatorsTable: React.FC = () => {
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
            name="Hiro Joyce"
            email="email@x.dummyjson.com"
            age={34}
            location="Chicago, IL"
          />
          <CreatorRow
            name="Hiro Joyce"
            email="email@x.dummyjson.com"
            age={34}
            location="Chicago, IL"
          />
          <CreatorRow
            name="Hiro Joyce"
            email="email@x.dummyjson.com"
            age={34}
            location="Chicago, IL"
          />
          <CreatorRow
            name="Hiro Joyce"
            email="email@x.dummyjson.com"
            age={34}
            location="Chicago, IL"
          />
          <CreatorRow
            name="Hiro Joyce"
            email="email@x.dummyjson.com"
            age={34}
            location="Chicago, IL"
          />
          <CreatorRow
            name="Hiro Joyce"
            email="email@x.dummyjson.com"
            age={34}
            location="Chicago, IL"
          />
          <CreatorRow
            name="Hiro Joyce"
            email="email@x.dummyjson.com"
            age={34}
            location="Chicago, IL"
          />
          <CreatorRow
            name="Hiro Joyce"
            email="email@x.dummyjson.com"
            age={34}
            location="Chicago, IL"
          />
          <CreatorRow
            name="Hiro Joyce"
            email="email@x.dummyjson.com"
            age={34}
            location="Chicago, IL"
          />
          <CreatorRow
            name="Hiro Joyce"
            email="email@x.dummyjson.com"
            age={34}
            location="Chicago, IL"
          />
          <CreatorRow
            name="Hiro Joyce"
            email="email@x.dummyjson.com"
            age={34}
            location="Chicago, IL"
          />
        </div>
      </div>
  );
};
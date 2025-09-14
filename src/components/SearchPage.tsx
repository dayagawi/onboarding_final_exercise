import { useState } from 'react';
import styles from './SearchPage.module.css';
import { SearchBar } from './SearchBar';
import { Toggle } from './Toggle';
import { CardGrid } from './CardGrid';
import { CreatorsTable } from './CreatorsTable';
import { Button } from './Button';
import ListIcon from './Icons/list-icon.svg?react';
import GridIcon from './Icons/grid-icon.svg?react';
import { useViewStore } from '../stores/useViewStore';

export const SearchPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilter, setActiveFilter] = useState<'cities' | 'age'>('cities');
    const { toggleValue, setToggleValue } = useViewStore();

    const handleFilterClick = (filter: 'cities' | 'age') => {
        setActiveFilter(filter);
    };

    return (
        <div className={styles['search-page']}>
            <div className={styles['page-header']}>
                <h2 className={styles['page-title']}>Search users</h2>
                <SearchBar
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={setSearchTerm}
                />
            </div>

            <div className={styles['view-controls-container']}>
                <div className={styles['filters-section']}>
                    <span className={styles['filter-label']}>Filter by:</span>
                    <Button
                        variant="filter"
                        size="sm"
                        className={activeFilter === 'cities' ? styles['active-filter'] : ''}
                        onClick={() => handleFilterClick('cities')}
                    >
                        Cities
                    </Button>
                    <Button
                        variant="filter"
                        size="sm"
                        className={activeFilter === 'age' ? styles['active-filter'] : ''}
                        onClick={() => handleFilterClick('age')}
                    >
                        Age
                    </Button>
                </div>

                <div className={styles['results_count_n_view_toggle']}>
                    <span className={styles['results-count']}>22,919 results</span>
                    <Toggle
                        leftOption={{
                            value: 'grid',
                            icon: <GridIcon />
                        }}
                        rightOption={{
                            value: 'list',
                            icon: <ListIcon />
                        }}
                        selectedValue={toggleValue}
                        onChange={setToggleValue}
                    />
                </div>
            </div>

            {toggleValue === 'grid' ? <CardGrid /> : <CreatorsTable />}
        </div>
    );
};
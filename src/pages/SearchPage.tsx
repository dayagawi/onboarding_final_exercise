import { useState, useEffect, useCallback } from 'react';
import styles from './SearchPage.module.css';
import { SearchBar } from '../components/SearchBar';
import { Toggle } from '../components/Toggle';
import { CardGrid } from '../components/CardGrid';
import { CreatorsTable } from '../components/CreatorsTable';
import { Button } from '../components/Button';
import ListIcon from '../components/Icons/list-icon.svg?react';
import GridIcon from '../components/Icons/grid-icon.svg?react';
import { useViewStore } from '../stores/useViewStore';
import { useCreatorStore } from '../stores/useCreatorStore';

export const SearchPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<'cities' | 'age'>('cities');
    const { toggleValue, setToggleValue } = useViewStore();
    const { fetchCreators, searchCreators, searchResults, creators, searchTerm, setSearchTerm } = useCreatorStore();

    useEffect(() => {
        fetchCreators();
    }, [fetchCreators]);

    const debouncedSearch = useCallback(
        (() => {
            let timeoutId: ReturnType<typeof setTimeout>;
            return (query: string) => {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    searchCreators(query);
                }, 300);
            };
        })(),
        [searchCreators]
    );

    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
        debouncedSearch(value);
    };

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
                    onChange={handleSearchChange}
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
                    <span className={styles['results-count']}>
                        {searchTerm ? `${searchResults.length} results` : `${creators.length} results`}
                    </span>
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
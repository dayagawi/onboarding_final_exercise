import React from 'react';
import styles from './SearchBar.module.css';
import SearchIcon from './Icons/search_icon.svg?react';

type SearchBarProps = {
  placeholder?: string;
  className?: string;
} & (
  | { value: string; onChange: (value: string) => void }
  | { value?: undefined; onChange?: undefined }
)

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Placeholder",
  value = "",
  onChange,
  className = ""
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={`${styles['search-bar']} ${className}`.trim()}>
        <div className={styles['search-input-container']}>
            <SearchIcon className={styles.icon} />
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                className={styles.input}
            />
        </div>
    </div>
  );
};
import React from 'react';
import styles from './Toggle.module.css';

export type ToggleViewType = 'list' | 'grid';

export type ToggleOption = { value: ToggleViewType, icon: React.ReactNode };

export type ToggleProps = {
  leftOption: ToggleOption;
  rightOption: ToggleOption;
  selectedValue: ToggleViewType;
  onChange: (value: ToggleViewType) => void;
  className?: string;
};

export const Toggle: React.FC<ToggleProps> = ({
  leftOption,
  rightOption,
  selectedValue,
  onChange,
  className = ""
}) => {
  const handleToggle = () => {
    const newValue = selectedValue === leftOption.value 
      ? rightOption.value 
      : leftOption.value;
    onChange(newValue);
  };

  const isLeftSelected = selectedValue === leftOption.value;

  return (
    <div 
      className={`${styles['toggle-container']} ${className}`.trim()}
      onClick={handleToggle}
    >
        <div className={styles['toggle-option-container']}>
            <div className={`${styles['toggle-option']} ${isLeftSelected ? styles['selected'] : ''}`}>
                {leftOption.icon}
            </div>
        </div>
        <div className={styles['toggle-option-container']}>
            <div className={`${styles['toggle-option']} ${!isLeftSelected ? styles['selected'] : ''}`}>
                {rightOption.icon}
            </div>
        </div>
    </div>
  );
};

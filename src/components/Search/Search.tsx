import React from 'react';

import styles from './Search.module.css';

import { icons } from '../../assets/img';
import { useTheme } from '../../context/ThemeContext';
import { useAppDispatch } from '../../store';
import { fetchWeather } from '../../store/slices/weather';

type SearchProps = {
  value: string;
  setSearchValue: (str: string) => void;
  setCoords: (coords: string) => void;
};

const Search: React.FC<SearchProps> = ({ value, setSearchValue, setCoords }) => {
  const dispatch = useAppDispatch();
  const { isDark } = useTheme();

  const onSearchHandler = async () => {
    await dispatch(fetchWeather({ q: value, days: 3 }));
    setCoords('');
  };

  const pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearchHandler();
    }
  };

  return (
    <div className={`${styles.wrapper} ${isDark ? styles.dark : styles.light}`}>
      <button onClick={onSearchHandler} type="button" className={styles.button}>
        <img src={icons.search} alt="search" className={styles.img} />
      </button>
      <input
        onKeyDown={pressEnter}
        value={value}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        className={`${styles.input} ${isDark ? styles.dark : styles.light}`}
        placeholder="Search for your preffered city..."
      />
    </div>
  );
};

export default Search;

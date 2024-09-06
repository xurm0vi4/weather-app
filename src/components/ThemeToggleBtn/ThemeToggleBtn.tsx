import React from 'react';

import { useTheme } from '../../context/ThemeContext';

import styles from './ThemeToggleBtn.module.css';
import { icons } from '../../assets/img/index';

const DarkModeBtn: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme} className={styles.darkmodeBtn}>
        <img
          src={icons.circle}
          alt="circle"
          className={`${styles.darkmodeImg} ${isDark ? styles.dark : styles.light}`}
        />
      </button>
      <p className={`${styles.text} ${isDark ? styles.dark : styles.light}`}>
        {isDark ? 'Dark Mode' : 'Light Mode'}
      </p>
    </div>
  );
};

export default DarkModeBtn;

import React, { useEffect, useState } from 'react';
import { takeDate } from '../../utils/takeDate';
import { useTheme } from '../../context/ThemeContext';
import { useAppSelector } from '../../store';

import styles from './CurrentDateBlock.module.css';

const CurrentDateBlock: React.FC = () => {
  const location = useAppSelector((state) => state.weather.location);
  const { isDark } = useTheme();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const time = [date.getHours(), date.getMinutes()]
    .map((x) => {
      return x < 10 ? '0' + x : x;
    })
    .join(':');

  return (
    <section className={`${styles.block} ${isDark ? styles.dark : styles.light}`}>
      <h2 className={`${styles.title} ${isDark ? styles.dark : styles.light}`}>{location?.name}</h2>
      <p className={`${styles.time} ${isDark ? styles.dark : styles.light}`}>{time}</p>
      <p className={`${styles.subtitle} ${isDark ? styles.dark : styles.light}`}>
        {takeDate(date)}
      </p>
    </section>
  );
};

export default CurrentDateBlock;

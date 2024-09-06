import React from 'react';

import { takeDate } from '../../utils/takeDate';
import { useTheme } from '../../context/ThemeContext';
import { useAppSelector } from '../../store';

import styles from './DaysForecast.module.css';

const DaysForecast: React.FC = () => {
  const { isDark } = useTheme();
  const { forecast } = useAppSelector((state) => state.weather);

  return (
    <section className={`${styles.wrapper} ${isDark ? styles.dark : styles.light}`}>
      <h2 className={`${styles.title} ${isDark ? styles.dark : styles.light}`}>3 Days Forecast:</h2>
      <div className={styles.forecast}>
        {forecast?.forecastday.map((item, id) => (
          <div className={styles.item} key={id}>
            <img src={item.day.condition.icon} alt="cloud cover" className={styles.image} />
            <p className={`${styles.temp} ${isDark ? styles.dark : styles.light}`}>
              {item.day.maxtemp_c}°C
            </p>
            <p className={`${styles.date} ${isDark ? styles.dark : styles.light}`}>
              {takeDate(item.date)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DaysForecast;

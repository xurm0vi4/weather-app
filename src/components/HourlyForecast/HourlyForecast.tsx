import React from 'react';

import { useTheme } from '../../context/ThemeContext';
import { useAppSelector } from '../../store';

import styles from './HourlyForecast.module.css';
import { icons } from '../../assets/img';

const HourlyForecast: React.FC = () => {
  const { isDark } = useTheme();
  const { forecast } = useAppSelector((state) => state.weather);

  return (
    <section className={`${styles.wrapper} ${isDark ? styles.dark : styles.light}`}>
      <h2 className={`${styles.title} ${isDark ? styles.dark : styles.light}`}>Hourly Forecast:</h2>
      <div className={styles.container}>
        <div className={`${styles.item} ${isDark ? styles.dark : styles.light}`}>
          <p className={`${styles.itemTime} ${isDark ? styles.dark : styles.light}`}>12:00</p>
          <img
            src={forecast?.forecastday[0].hour[12]?.condition?.icon}
            alt="cloud cover"
            className={styles.itemImg}
          />
          <p className={`${styles.itemTemp} ${isDark ? styles.dark : styles.light}`}>
            {forecast?.forecastday[0].hour[12]?.temp_c}°C
          </p>
          <img
            src={icons.navigation}
            alt="navigation"
            className={styles.itemWindImg}
            style={{ transform: `rotate(${forecast?.forecastday[0].hour[12]?.wind_degree}deg)` }}
          />
          <p className={`${styles.itemWindSpeed} ${isDark ? styles.dark : styles.light}`}>
            {forecast?.forecastday[0].hour[12]?.wind_kph}km/h
          </p>
        </div>
        <div className={`${styles.item} ${isDark ? styles.dark : styles.light}`}>
          <p className={`${styles.itemTime} ${isDark ? styles.dark : styles.light}`}>15:00</p>
          <img
            src={forecast?.forecastday[0].hour[15]?.condition?.icon}
            alt="cloud cover"
            className={styles.itemImg}
          />
          <p className={`${styles.itemTemp} ${isDark ? styles.dark : styles.light}`}>
            {forecast?.forecastday[0].hour[15]?.temp_c}°C
          </p>
          <img
            src={icons.navigation}
            alt="navigation"
            className={styles.itemWindImg}
            style={{ transform: `rotate(${forecast?.forecastday[0].hour[15]?.wind_degree}deg)` }}
          />
          <p className={`${styles.itemWindSpeed} ${isDark ? styles.dark : styles.light}`}>
            {forecast?.forecastday[0].hour[15]?.wind_kph}km/h
          </p>
        </div>
        <div className={`${styles.item} ${isDark ? styles.dark : styles.light}`}>
          <p className={`${styles.itemTime} ${isDark ? styles.dark : styles.light}`}>18:00</p>
          <img
            src={forecast?.forecastday[0].hour[18]?.condition?.icon}
            alt="cloud cover"
            className={styles.itemImg}
          />
          <p className={`${styles.itemTemp} ${isDark ? styles.dark : styles.light}`}>
            {forecast?.forecastday[0].hour[18]?.temp_c}°C
          </p>
          <img
            src={icons.navigation}
            alt="navigation"
            className={styles.itemWindImg}
            style={{ transform: `rotate(${forecast?.forecastday[0].hour[18]?.wind_degree}deg)` }}
          />
          <p className={`${styles.itemWindSpeed} ${isDark ? styles.dark : styles.light}`}>
            {forecast?.forecastday[0].hour[18]?.wind_kph}km/h
          </p>
        </div>
        <div className={`${styles.item} ${isDark ? styles.dark : styles.light}`}>
          <p className={`${styles.itemTime} ${isDark ? styles.dark : styles.light}`}>21:00</p>
          <img
            src={forecast?.forecastday[0].hour[21]?.condition?.icon}
            alt="cloud cover"
            className={styles.itemImg}
          />
          <p className={`${styles.itemTemp} ${isDark ? styles.dark : styles.light}`}>
            {forecast?.forecastday[0].hour[21]?.temp_c}°C
          </p>
          <img
            src={icons.navigation}
            alt="navigation"
            className={styles.itemWindImg}
            style={{ transform: `rotate(${forecast?.forecastday[0].hour[21]?.wind_degree}deg)` }}
          />
          <p className={`${styles.itemWindSpeed} ${isDark ? styles.dark : styles.light}`}>
            {forecast?.forecastday[0].hour[21]?.wind_kph}km/h
          </p>
        </div>
        <div className={`${styles.item} ${isDark ? styles.dark : styles.light}`}>
          <p className={`${styles.itemTime} ${isDark ? styles.dark : styles.light}`}>00:00</p>
          <img
            src={forecast?.forecastday[1].hour[0]?.condition?.icon}
            alt="cloud cover"
            className={styles.itemImg}
          />
          <p className={`${styles.itemTemp} ${isDark ? styles.dark : styles.light}`}>
            {forecast?.forecastday[1].hour[0]?.temp_c}°C
          </p>
          <img
            src={icons.navigation}
            alt="navigation"
            className={styles.itemWindImg}
            style={{ transform: `rotate(${forecast?.forecastday[1].hour[0]?.wind_degree}deg)` }}
          />
          <p className={`${styles.itemWindSpeed} ${isDark ? styles.dark : styles.light}`}>
            {forecast?.forecastday[1].hour[0]?.wind_kph}km/h
          </p>
        </div>
      </div>
    </section>
  );
};

export default HourlyForecast;

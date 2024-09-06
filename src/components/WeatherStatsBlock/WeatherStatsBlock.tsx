import React from 'react';

import { useTheme } from '../../context/ThemeContext';
import { useAppSelector } from '../../store';

import styles from './WeatherStatsBlock.module.css';
import { icons } from '../../assets/img';

const WeatherStatsBlock: React.FC = () => {
  const { isDark } = useTheme();
  const { current, forecast } = useAppSelector((state) => state.weather);

  return (
    <div className={`${styles.wrapper} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.main}>
        <p className={`${styles.tempActual} ${isDark ? styles.dark : styles.light}`}>
          {current?.temp_c}°C
        </p>
        <p className={`${styles.tempFeelsLike} ${isDark ? styles.dark : styles.light}`}>
          Feels like: <span>{current?.feelslike_c}°C</span>
        </p>
        <div className={styles.sunriseBlock}>
          <img
            src={isDark ? icons.sunriseWhite : icons.sunriseBlack}
            alt="sunrise"
            className={styles.sunriseImg}
          />
          <div className={styles.sunriseData}>
            <p className={`${styles.sunriseTitle} ${isDark ? styles.dark : styles.light}`}>
              Sunrise
            </p>
            <p className={`${styles.sunriseTime} ${isDark ? styles.dark : styles.light}`}>
              {forecast?.forecastday[0].astro?.sunrise}
            </p>
          </div>
        </div>
        <div className={styles.sunsetBlock}>
          <img
            src={isDark ? icons.sunsetWhite : icons.sunsetBlack}
            alt="sunset"
            className={styles.sunsetImg}
          />
          <div className={styles.sunsetData}>
            <p className={`${styles.sunsetTitle} ${isDark ? styles.dark : styles.light}`}>Sunset</p>
            <p className={`${styles.sunsetTime} ${isDark ? styles.dark : styles.light}`}>
              {forecast?.forecastday[0].astro?.sunset}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.icon}>
        <img src={current?.condition?.icon} alt="cloud cover" className={styles.iconImg} />
        <p className={`${styles.iconText} ${isDark ? styles.dark : styles.light}`}>
          {current?.condition?.text}
        </p>
      </div>
      <div className={styles.extra}>
        <div className={styles.extraItem}>
          <img
            src={isDark ? icons.humidity : icons.humidityBlack}
            alt="humidity"
            className={styles.extraItemImg}
          />
          <p className={`${styles.extraItemData} ${isDark ? styles.dark : styles.light}`}>
            {current?.humidity}%
          </p>
          <p className={`${styles.extraItemText} ${isDark ? styles.dark : styles.light}`}>
            Humidity
          </p>
        </div>
        <div className={styles.extraItem}>
          <img
            src={isDark ? icons.wind : icons.windBlack}
            alt="wind"
            className={styles.extraItemImg}
          />
          <p className={`${styles.extraItemData} ${isDark ? styles.dark : styles.light}`}>
            {current?.wind_kph}km/h
          </p>
          <p className={`${styles.extraItemText} ${isDark ? styles.dark : styles.light}`}>
            Wind Speed
          </p>
        </div>
        <div className={styles.extraItem}>
          <img
            src={isDark ? icons.pressureWhite : icons.pressureBlack}
            alt="pressure"
            className={styles.extraItemImg}
          />
          <p className={`${styles.extraItemData} ${isDark ? styles.dark : styles.light}`}>
            {current?.pressure_mb}hPa
          </p>
          <p className={`${styles.extraItemText} ${isDark ? styles.dark : styles.light}`}>
            Pressure
          </p>
        </div>
        <div className={styles.extraItem}>
          <img
            src={isDark ? icons.uvWhite : icons.uvBlack}
            alt="uv"
            className={styles.extraItemImg}
          />
          <p className={`${styles.extraItemData} ${isDark ? styles.dark : styles.light}`}>
            {current?.uv}
          </p>
          <p className={`${styles.extraItemText} ${isDark ? styles.dark : styles.light}`}>UV</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherStatsBlock;

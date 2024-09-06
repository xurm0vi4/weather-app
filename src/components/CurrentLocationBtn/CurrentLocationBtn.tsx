import React from 'react';

import styles from './CurrentLocationBtn.module.css';
import { icons } from '../../assets/img';

type CurrentLocationProps = {
  setCoords: (str: string) => void;
  setSearchValue: (str: string) => void;
};

const CurrentLocationBtn: React.FC<CurrentLocationProps> = ({ setCoords, setSearchValue }) => {
  function success(pos: GeolocationPosition) {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;

    setCoords(`${latitude},${longitude}`);
    setSearchValue('');
  }

  function buttonHandler() {
    navigator.geolocation.getCurrentPosition(success);
  }

  return (
    <button onClick={buttonHandler} className={styles.button}>
      <img src={icons.currentLocation} alt="navigation" className={styles.img} />
      <p className={styles.text}>Current Location</p>
    </button>
  );
};

export default CurrentLocationBtn;

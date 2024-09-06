import { useEffect, useState } from 'react';

import { useTheme } from './context/ThemeContext';
import { useAppDispatch, useAppSelector } from './store';
import { fetchWeather } from './store/slices/weather';

import DarkModeBtn from './components/ThemeToggleBtn/ThemeToggleBtn';
import CurrentDateBlock from './components/CurrentDateBlock/CurrentDateBlock';
import WeatherStatsBlock from './components/WeatherStatsBlock/WeatherStatsBlock';
import DaysForecast from './components/DaysForecast/DaysForecast';
import HourlyForecast from './components/HourlyForecast/HourlyForecast';
import Search from './components/Search/Search';
import CurrentLocationBtn from './components/CurrentLocationBtn/CurrentLocationBtn';
import Skeleton from './components/Skeleton/Skeleton';

function App() {
  const dispatch = useAppDispatch();
  const { location, status } = useAppSelector((state) => state.weather);
  const { isDark } = useTheme();
  const [searchValue, setSearchValue] = useState('');
  const [coords, setCoords] = useState('');

  useEffect(() => {
    try {
      const searchQuery = searchValue.length > 1 ? searchValue : coords;
      dispatch(fetchWeather({ q: searchQuery, days: 3 }));
    } catch (error) {
      console.log(error);
    }
  }, [coords, dispatch]);

  return (
    <div className={`wrapper ${isDark ? 'dark' : 'light'}`}>
      <div className="container">
        <div className="header">
          <DarkModeBtn />
          <Search value={searchValue} setSearchValue={setSearchValue} setCoords={setCoords} />
          <CurrentLocationBtn setCoords={setCoords} setSearchValue={setSearchValue} />
        </div>
        <div className="flex">
          {status === 'loading' ? (
            <>
              <Skeleton width={510} height={330} />
              <Skeleton width={780} height={330} />
              <Skeleton width={414} height={330} />
              <Skeleton width={870} height={330} />
            </>
          ) : (
            <>
              <CurrentDateBlock />
              {location && (
                <>
                  <WeatherStatsBlock />
                  <DaysForecast />
                  <HourlyForecast />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

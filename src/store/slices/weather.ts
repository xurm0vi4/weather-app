import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Current, Location } from '../../interfaces/currentWeather';
import { Forecast, ForecastClass } from '../../interfaces/forecastWeather';

type WeatherState = {
  location: Location | null;
  current: Current | null;
  forecast: ForecastClass | null;
  status: 'loading' | 'loaded' | 'error';
}

type ParamsProps = {
  q: string;
  days: number;
};

export const fetchWeather = createAsyncThunk<Forecast, ParamsProps>(
  'weather/fetchWeather',
  async (params) => {
    const { data } = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=1322502c8f484e78be7101414241601`,
      { params },
    );
    return data;
  },
);

const initialState: WeatherState = {
  location: null,
  current: null,
  forecast: null,
  status: 'loading',
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.current = null;
        state.forecast = null;
        state.location = null;
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.current = action.payload.current;
        state.forecast = action.payload.forecast;
        state.location = action.payload.location;
        state.status = 'loaded';
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.current = null;
        state.forecast = null;
        state.location = null;
        state.status = 'error';
      });
  },
});

export default weatherSlice.reducer;

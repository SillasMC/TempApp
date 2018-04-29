import axios from 'axios';
import APIData from '../api_data';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${APIData.key}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
};
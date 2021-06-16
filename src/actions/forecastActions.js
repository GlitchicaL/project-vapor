import {
    FORECAST_LOCATION_REQUEST,
    FORECAST_LOCATION_SUCCESS,
    FORECAST_LOCATION_FAIL,

    FORECAST_DETAILS_REQUEST,
    FORECAST_DETAILS_SUCCESS,
    FORECAST_DETAILS_FAIL,

    FORECAST_DAILY_REQUEST,
    FORECAST_DAILY_SUCCESS,
    FORECAST_DAILY_FAIL
} from '../constants/forecastConstants';

const NWS = require('nws-api-wrapper');

export const getForecastLocation = (latitude, longitude) => async (dispatch) => {
    try {
        dispatch({ type: FORECAST_LOCATION_REQUEST });

        const { relativeLocation: { properties } } = await NWS.getLocationInfo(latitude, longitude);

        dispatch({
            type: FORECAST_LOCATION_SUCCESS,
            payload: properties
        })
    } catch (error) {
        dispatch({
            type: FORECAST_LOCATION_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
}

export const getCurrentForecast = (latitude, longitude) => async (dispatch) => {
    try {
        dispatch({ type: FORECAST_DETAILS_REQUEST });

        // const { data } = await axios.get('/api/products');
        const data = await NWS.getHourlyForecast(latitude, longitude, 1);

        dispatch({
            type: FORECAST_DETAILS_SUCCESS,
            payload: data[0]
        })
    } catch (error) {
        dispatch({
            type: FORECAST_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
}

export const getDailyForecast = (latitude, longitude) => async (dispatch) => {
    try {
        dispatch({ type: FORECAST_DAILY_REQUEST });

        let data = []
        let currentDay = new Date().getDate();
        const forecasts = await NWS.getForecast(latitude, longitude, 7);

        forecasts.forEach(forecast => {
            if (!forecast.isDaytime) return; // We only want day time forecasts
            if (data.length > 2) return; // We only need the next 3 days

            let date = new Date(forecast.startTime).getDate();
            if (date === currentDay) return;

            data.push(forecast);
        })

        dispatch({
            type: FORECAST_DAILY_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: FORECAST_DAILY_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
}


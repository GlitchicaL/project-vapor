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

export const forecastLocationReducer = (state = {}, action) => {
    switch (action.type) {
        case FORECAST_LOCATION_REQUEST:
            return { loading: true, location: {} }

        case FORECAST_LOCATION_SUCCESS:
            return { loading: false, location: action.payload }

        case FORECAST_LOCATION_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state;
    }
}

export const forecastCurrentDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case FORECAST_DETAILS_REQUEST:
            return { loading: true, currentForecast: null }

        case FORECAST_DETAILS_SUCCESS:
            return { loading: false, currentForecast: action.payload }

        case FORECAST_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state;
    }
}

export const forecastDailyDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case FORECAST_DAILY_REQUEST:
            return { loading: true, dailyForecasts: null }

        case FORECAST_DAILY_SUCCESS:
            return { loading: false, dailyForecasts: action.payload }

        case FORECAST_DAILY_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state;
    }
}
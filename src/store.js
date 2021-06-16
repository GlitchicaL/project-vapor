import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { forecastLocationReducer, forecastCurrentDetailsReducer, forecastDailyDetailsReducer } from './reducers/forecastReducers';

const reducer = combineReducers({
    currentLocation: forecastLocationReducer,
    currentForecastDetails: forecastCurrentDetailsReducer,
    dailyForecastDetails: forecastDailyDetailsReducer
});

const initalState = {

};

const middleware = [thunk];

const store = createStore(reducer, initalState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
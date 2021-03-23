/* Responsible for retriving data from the National Weather Service API */

const axios = require("axios");

// A JSON file for pairing forecast descriptions with the proper weather icon.
// ex. A forecast description (key) of Mostly Cloudy is paired with the weather icon (value) of clouds.png
const ICON_PATHS = require("./icons.json");

const BASE_URL = "https://api.weather.gov";

let latitude = "39.0997"; // Default coordinates for Kansas City, MO [ 39.0997, -94.5786 ]
let longitude = "-94.5786";
let currentDay = new Date().getDate(); // Get the current day of the month (This will be used to get the 3 day forecast)

async function getUserData(geoLocationData) {
    let data = {}; // The data we plan to return

    if (geoLocationData != null) {
        latitude = geoLocationData.coords.latitude.toFixed(4); // Round latitude, and longitude to 4 decimal places.
        longitude = geoLocationData.coords.longitude.toFixed(4);
    }

    let path = `/points/${latitude},${longitude}`; // Update path and url
    let url = BASE_URL + path;

    await axios.get(url).then(result => {
        let city = result.data.properties.relativeLocation.properties.city; // Retrive city and state from the API
        let state = result.data.properties.relativeLocation.properties.state;

        data.location = city + ", " + state; // Store the city, state, and forecasts url paths in userData
        data.dayForecastURL = result.data.properties.forecast;
        data.hourlyForecastURL = result.data.properties.forecastHourly;

    }).catch(error => {
        console.log(error);
    });

    //console.log(data);
    return data;
}

async function getCurrentForecast(url) {
    let data = {}; // The data we plan to return

    await axios.get(url).then(result => {
        data = result.data.properties.periods[0]; // We only want to most recent hour
        data.customIcon = ICON_PATHS.weatherDescriptions[data.shortForecast]; // Determine what icon we need

        // Determine if our forecastData has multiple customIcons. 
        // If it does, determine if it is currently day or night. 
        if (typeof data.customIcon == "object") {
            // Partly cloudy for example has both a day and night icon, so we need to determine what time of day it is.
            data.isDaytime ? data.customIcon = data.customIcon[0] : data.customIcon = data.customIcon[1];
        }
    });

    //console.log(data);
    return data;
}

async function getMultiDayForecast(url) {
    let data = []; // The data we plan to return

    await axios.get(url).then(result => {
        let periods = result.data.properties.periods;

        periods.forEach(period => {
            if (!period.isDaytime) return; // We only want day time forecasts
            if (data.length > 2) return; // We only need the next 3 days

            // Check to make sure the value's start time is not today's date
            let date = new Date(period.startTime).getDate();
            if (date === currentDay) return;

            // Determine what icon to use based on the forecast description
            period.customIcon = ICON_PATHS.weatherDescriptions[period.shortForecast];

            // Determine if our forecastData has multiple customIcons. 
            // If it does, set it use the day icon
            if (typeof period.customIcon == "object") period.customIcon = period.customIcon[0];

            data.push(period);
        });
    });

    //console.log(data);
    return data;
}

const NWS = {
    getUserData,
    getCurrentForecast,
    getMultiDayForecast
}

module.exports = NWS;
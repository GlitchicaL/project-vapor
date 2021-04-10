import { useEffect, useState } from 'react';

const NWS = require("../nws-api/NWS");

const useFetch = () => {
    const [location, setLocation] = useState(null);
    const [currentForecast, setCurrentForecast] = useState(null);
    const [threeDayForecast, setThreeDayForecast] = useState(null);

    useEffect(() => {
        // Get user coordinates
        navigator.geolocation.getCurrentPosition(getLocation, (error) => {
            console.log(error);
            getLocation(null);
        })

        async function getLocation(geoLocationData) {
            let userData = null;
            let forecastData = null;
            let threeDayData = null;

            try {
                userData = await NWS.getUserData(geoLocationData); // Get user location coordinates, and nws-api paths
                forecastData = await NWS.getCurrentForecast(userData.hourlyForecastURL);
                threeDayData = await NWS.getMultiDayForecast(userData.dayForecastURL);
            }
            catch (error) {
                console.log(error);
            }

            setLocation(userData.location);
            setCurrentForecast(forecastData);
            setThreeDayForecast(threeDayData);
        }

    }, []);

    return { location, currentForecast, threeDayForecast };
};

export default useFetch;
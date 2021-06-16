import { useEffect, useState } from 'react';

import { ICON_PATHS } from '../../icons';

const DayForecast = ({ forecast }) => {
    const [iconPath, setIconPath] = useState('')

    useEffect(() => {
        if (forecast == null) return;

        // Determine what icon to use based on the forecast description
        let path = ICON_PATHS.weatherDescriptions[forecast.shortForecast];

        // Determine if our forecastData has multiple customIcons. 
        // If it does, set it use the day icon
        if (typeof path == "object") {
            setIconPath(path.customIcon[0]);
        } else {
            setIconPath(path);
        }

    }, [forecast, iconPath]);

    return (
        <div className="three-day-forecast-day glass flex">

            <p className="three-day-forecast-date"><strong>{forecast.name}</strong>, {new Date(forecast.startTime).getMonth()}/{new Date(forecast.startTime).getDate()}</p>

            <div className="flex" style={{ "justifyContent": "flex-start" }}>

                <img src={`./images/weather-icons/${iconPath}`} alt={iconPath} className="medium-forecast-icon" />
                <p>{forecast.temperature}° F</p>

            </div>

            <p>{forecast.shortForecast}</p>

        </div >
    );
}

export default DayForecast;
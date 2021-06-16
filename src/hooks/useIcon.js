import { useEffect, useState } from 'react';

import { ICON_PATHS } from '../icons';

const useIcon = (currentForecast) => {
    const [iconPath, setIconPath] = useState('')

    useEffect(() => {
        if (currentForecast == null) return;

        // Determine what icon to use based on the forecast description
        let path = ICON_PATHS.weatherDescriptions[currentForecast.shortForecast];

        // Determine if our forecastData has multiple customIcons. 
        // If it does, determine if it is currently day or night. 
        if (typeof path == "object") {

            // Partly cloudy for example has both a day and night icon, so we need to determine what time of day it is.
            currentForecast.isDaytime ? setIconPath(path.customIcon[0]) : setIconPath(path.customIcon[1]);

        } else {
            setIconPath(path);
        }

    }, [currentForecast, iconPath]);

    return iconPath;
}

export default useIcon;
import useIcon from "../../hooks/useIcon";

const CurrentForecast = ({ currentForecast }) => {
    let iconPath = useIcon(currentForecast)

    return (
        <section className="flex-center">
            <h3>Current Forecast</h3>

            <div className="current-forecast glass flex">

                <div className="main-forecast">

                    <div className="flex">
                        <img src={`./images/weather-icons/${iconPath}`} alt={iconPath} className="main-forecast-img" />
                        <p className="main-forecast-temp">{currentForecast.temperature}° F</p>
                    </div>

                    <h5>{currentForecast.shortForecast}</h5>

                    <div className="flex wind-forecast">
                        <img src="./images/weather-icons/wind.png" alt="Wind" />
                        <p>{currentForecast.windDirection + " " + currentForecast.windSpeed}</p>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default CurrentForecast;
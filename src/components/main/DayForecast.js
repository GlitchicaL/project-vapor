const DayForecast = ({ forecast }) => {
    return (
        <div className="three-day-forecast-day glass flex">
            <p><strong>{forecast.name}</strong>, {new Date(forecast.startTime).getMonth()}/{new Date(forecast.startTime).getDate()}</p>
            <img src={"./images/weather-icons/" + forecast.customIcon} alt="" className="medium-forecast-icon" />
            <p>{forecast.temperature}° F</p>
            <p>{forecast.shortForecast}</p>
        </div>
    );
}

export default DayForecast;
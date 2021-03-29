const DayForecast = ({ forecast }) => {
    return (
        <div className="three-day-forecast-day glass flex">
            <p className="three-day-forecast-date"><strong>{forecast.name}</strong>, {new Date(forecast.startTime).getMonth()}/{new Date(forecast.startTime).getDate()}</p>
            <div className="flex" style={{ "justifyContent": "flex-start" }}>
                <img src={"./images/weather-icons/" + forecast.customIcon} alt="" className="medium-forecast-icon" />
                <p>{forecast.temperature}° F</p>
            </div>
            <p>{forecast.shortForecast}</p>
        </div >
    );
}

export default DayForecast;
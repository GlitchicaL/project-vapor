const DayForecast = () => {
    return (
        <div className="three-day-forecast-day glass flex">
            <p><strong>Wednesday</strong>, 3/1</p>
            <img src="./images/weather-icons/cloud-sun.png" alt="" className="medium-forecast-icon" />
            <p>89° / 76°</p>
            <p>Chance Light Rain then Mostly Cloudy</p>
        </div>
    );
}

export default DayForecast;
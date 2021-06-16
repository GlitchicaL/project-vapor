import DayForecast from "./DayForecast";

const ThreeDayForecast = ({ dailyForecasts }) => {
    return (
        <section className="flex-center">
            <h3>3 Day Forecast</h3>
            {
                dailyForecasts &&
                <div className="three-day-forecast flex">
                    <DayForecast forecast={dailyForecasts[0]} />
                    <DayForecast forecast={dailyForecasts[1]} />
                    <DayForecast forecast={dailyForecasts[2]} />
                </div>
            }
        </section>
    );
}

export default ThreeDayForecast;
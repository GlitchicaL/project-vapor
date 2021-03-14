import DayForecast from "./DayForecast";

const ThreeDayForecast = () => {
    return (
        <section className="glass flex-center">
            <h3>3 Day Forecast</h3>
            <div className="three-day-forecast flex">
                <DayForecast />
                <DayForecast />
                <DayForecast />
            </div>
        </section>
    );
}

export default ThreeDayForecast;
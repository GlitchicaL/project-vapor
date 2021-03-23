import DayForecast from "./DayForecast";

const ThreeDayForecast = ({ threeDayForecast }) => {
    return (
        <section className="glass flex-center">
            <h3>3 Day Forecast</h3>
            <div className="three-day-forecast flex">
                {/* TODO: LOOP THROUGH THIS! */}
                <DayForecast forecast={threeDayForecast[0]} />
                <DayForecast forecast={threeDayForecast[1]} />
                <DayForecast forecast={threeDayForecast[2]} />
            </div>
        </section>
    );
}

export default ThreeDayForecast;
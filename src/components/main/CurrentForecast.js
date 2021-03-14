const CurrentForecast = () => {
    return (
        <section className="glass flex-center">
            <h3>Current Forecast</h3>

            <div className="current-forecast glass flex">

                <div className="main-forecast">

                    <div className="flex">
                        <img src="./images/weather-icons/cloud-rain.png" alt="" />
                        <p className="main-forecast-temp">73°</p>
                    </div>

                    <h5>Showers And Thunderstorms</h5>

                    <div className="flex wind-forecast">
                        <img src="./images/weather-icons/wind.png" alt="" />
                        <p>E 8 mph</p>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default CurrentForecast;
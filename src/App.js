import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* IMPORT COMPONENTS */
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

/* IMPORT ACTIONS */
import { getForecastLocation, getCurrentForecast, getDailyForecast } from './actions/forecastActions';

function App() {
    const dispatch = useDispatch();

    const currentLocation = useSelector(state => state.currentLocation);
    const { error, loading, location } = currentLocation;

    const currentForecastDetails = useSelector(state => state.currentForecastDetails);
    const { currentForecast } = currentForecastDetails;

    const dailyForecastDetails = useSelector(state => state.dailyForecastDetails);
    const { dailyForecasts } = dailyForecastDetails;

    useEffect(() => {

        // Get user coordinates
        navigator.geolocation.getCurrentPosition(({ coords }) => {

            let latitude = coords.latitude.toFixed(4);
            let longitude = coords.longitude.toFixed(4);

            dispatch(getForecastLocation(latitude, longitude));
            dispatch(getCurrentForecast(latitude, longitude));
            dispatch(getDailyForecast(latitude, longitude));

        }, (error) => { // User denies location
            let latitude = "39.0997";
            let longitude = "-94.5786";

            dispatch(getForecastLocation(latitude, longitude));
            dispatch(getCurrentForecast(latitude, longitude));
            dispatch(getDailyForecast(latitude, longitude));
        })

    }, [dispatch])

    return (
        <div className="App">
            <Header location={location} currentForecast={currentForecast} />
            <Main location={location} currentForecast={currentForecast} dailyForecasts={dailyForecasts} />
            <Footer />
        </div>
    );
}

export default App;

import { useState, useEffect } from "react";

/* IMPORT COMPONENTS */
import Header from './components/Header';
import NavSidebar from './components/NavSidebar';
import Main from './components/Main';
import Footer from './components/Footer';

const NWS = require("./nws-api/NWS");

function App() {
  const [location, setLocation] = useState(null);
  const [currentForecast, setCurrentForecast] = useState(null);
  const [threeDayForecast, setThreeDayForecast] = useState(null);

  useEffect(() => {
    // Get user coordinates
    navigator.geolocation.getCurrentPosition(getLocation, (error) => {
      console.log(error);
      getLocation(null);
    })

    async function getLocation(geoLocationData) {
      let userData = null;
      let forecastData = null;
      let threeDayData = null;

      try {
        userData = await NWS.getUserData(geoLocationData); // Get user location coordinates, and nws-api paths
        forecastData = await NWS.getCurrentForecast(userData.hourlyForecastURL);
        threeDayData = await NWS.getMultiDayForecast(userData.dayForecastURL);
      }
      catch (error) {
        console.log(error);
      }

      setLocation(userData.location);
      setCurrentForecast(forecastData);
      setThreeDayForecast(threeDayData);
    }

  }, [])

  return (
    <div className="App">
      <Header location={location} currentForecast={currentForecast} />
      <NavSidebar />
      <Main location={location} currentForecast={currentForecast} threeDayForecast={threeDayForecast} />
      <Footer />
    </div>
  );
}

export default App;

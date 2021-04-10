/* IMPORT COMPONENTS */
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

/* CUSTOM HOOKS */
import useFetch from "./hooks/useFetch";

function App() {
  const { location, currentForecast, threeDayForecast } = useFetch();

  return (
    <div className="App">
      <Header location={location} currentForecast={currentForecast} />
      <Main location={location} currentForecast={currentForecast} threeDayForecast={threeDayForecast} />
      <Footer />
    </div>
  );
}

export default App;

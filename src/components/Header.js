import useIcon from "../hooks/useIcon";

const Header = ({ location, currentForecast }) => {
    let iconPath = useIcon(currentForecast);

    return (
        <header className="flex">
            <h1>Project Vapor</h1>

            <div className="flex">
                <input type="text" placeholder="Search Location, Zipcode" className="search-input header-search" />

                {
                    currentForecast &&
                    <div className="header-mini-forecast flex">
                        <p>{`${currentForecast.temperature}° ${location.city}, ${location.state}`}</p>
                        <img src={`./images/weather-icons/${iconPath}`} alt={iconPath} className="mini-forecast-icon" />
                    </div>
                }

                <div className="header-btn-div">
                    <i className="nav-icon-btn fa fa-bars"></i>
                    <i className="nav-icon-btn fa fa-close"></i>
                </div>
            </div>
        </header>
    );
}

export default Header;
const Header = ({ location, currentForecast }) => {
    return (
        <header className="flex">
            <h1>Project Vapor</h1>

            <div className="flex">
                <input type="text" placeholder="Search Location, Zipcode" className="search-input header-search" />
                {currentForecast && <div className="header-mini-forecast flex">
                    <p>{currentForecast.temperature}° {location}</p>
                    <img src={"./images/weather-icons/" + currentForecast.customIcon} alt="" className="mini-forecast-icon" />
                </div>}

                <div className="header-btn-div">
                    <i className="nav-icon-btn fa fa-bars"></i>
                    <i className="nav-icon-btn fa fa-close"></i>
                </div>
            </div>
        </header>
    );
}

export default Header;
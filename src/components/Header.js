const Header = ({ location, currentForecast }) => {
    // Toggling the sidebar navigation works, but is there a better way to do this?
    function toggleNav(action, e) {
        let nav = document.querySelector(".sidebar-nav");

        e.target.style.display = "none"

        if (action === "open") {
            let closeBtn = document.querySelector(".fa-close");
            closeBtn.style.display = "block";

            nav.style.right = "0";
        }
        else {
            let openBtn = document.querySelector(".fa-bars");
            openBtn.style.display = "block";

            nav.style.right = "-100%";
        }
    }

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
                    <i className="nav-icon-btn fa fa-bars" onClick={(e) => { toggleNav("open", e) }}></i>
                    <i className="nav-icon-btn fa fa-close" onClick={(e) => { toggleNav("close", e) }}></i>
                </div>
            </div>
        </header>
    );
}

export default Header;
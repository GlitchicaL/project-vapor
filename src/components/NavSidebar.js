const NavSidebar = () => {
    return (
        <nav className="sidebar-nav glass">
            <div>
                <input type="text" placeholder="Search Location, Zipcode" className="search-input sidebar-nav-search" />

                <ul className="sidebar-nav-list">
                    <li className="sidebar-nav-list-item glass"><a href="/" className="flex">Local Forecast</a></li>
                    <li className="sidebar-nav-list-item glass"><a href="/" className="flex">National Forecast</a></li>
                    <li className="sidebar-nav-list-item glass"><a href="/" className="flex">Top Stories</a></li>
                    <li className="sidebar-nav-list-item glass"><a href="/" className="flex">Live Radar</a></li>
                    <li className="sidebar-nav-list-item glass"><a href="/" className="flex">Photos</a></li>
                    <li className="sidebar-nav-list-item glass"><a href="/" className="flex">Videos</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavSidebar;
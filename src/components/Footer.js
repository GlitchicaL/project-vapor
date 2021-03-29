const Footer = () => {
    return (
        <footer className="flex">
            <ul className="flex social-list">
                <li><a href="/" className="flex"><img src="./images/social-icons/twitter.png" alt="" /></a></li>
                <li><a href="/" className="flex"><img src="./images/social-icons/facebook.png" alt="" /></a></li>
                <li><a href="/" className="flex"><img src="./images/social-icons/instagram.png" alt="" /></a></li>
            </ul>
            <h1>Project Vapor</h1>
            <p>
                <small>
                    Justin Acevero &copy; 2021<br />
                    <a href="/">Privacy Policy</a> | <a href="/">EULA</a>
                </small>
            </p>
        </footer>
    );
}

export default Footer;
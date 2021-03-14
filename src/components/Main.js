/* IMPORT MAIN COMPONENTS */
import CurrentForecast from "./main/CurrentForecast";
import ThreeDayForecast from "./main/ThreeDayForecast";

const Main = () => {
    return (
        <main>
            <div className="current-location-banner glass flex">
                <h4>MIAMI, FL</h4>
            </div>

            {/* MAIN COMPONENTS */}
            <CurrentForecast />
            <ThreeDayForecast />

            {/* CLOUD IMAGES (BACKGROUND) */}
            <div className="clouds">
                <img src="./images/clouds/cloud1.png" alt="" style={{ "--i": 1 }} />
                <img src="./images/clouds/cloud2.png" alt="" style={{ "--i": 2 }} />
                <img src="./images/clouds/cloud3.png" alt="" style={{ "--i": 3 }} />
                <img src="./images/clouds/cloud4.png" alt="" style={{ "--i": 4 }} />
                <img src="./images/clouds/cloud5.png" alt="" style={{ "--i": 5 }} />
                <img src="./images/clouds/cloud1.png" alt="" style={{ "--i": 10 }} />
                <img src="./images/clouds/cloud2.png" alt="" style={{ "--i": 9 }} />
                <img src="./images/clouds/cloud3.png" alt="" style={{ "--i": 8 }} />
                <img src="./images/clouds/cloud4.png" alt="" style={{ "--i": 7 }} />
                <img src="./images/clouds/cloud5.png" alt="" style={{ "--i": 6 }} />
            </div>
        </main>
    );
}

export default Main;
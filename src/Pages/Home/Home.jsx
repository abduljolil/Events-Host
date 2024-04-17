import Banner from "./Home/Banner";
import Events from "./Home/Events";
import HostEvent from "./Home/HostEvent";
import QRScan from "./Home/QRScan";

const Home = () => {
    return (
        <div className="space-y-4">
            <Banner></Banner>
            <Events></Events>
            <HostEvent></HostEvent>
            <QRScan></QRScan>
        </div>
    );
};

export default Home;
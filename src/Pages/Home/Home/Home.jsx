import { Helmet } from "react-helmet-async";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Package from "../Package/Package";


const Home = () => {
    return (
        <div>
           <Helmet>
                <title>Rubicon | Home</title>
            </Helmet>
          <Banner></Banner>
          <AboutUs></AboutUs>
          <Package></Package>
        </div>
    );
};

export default Home;
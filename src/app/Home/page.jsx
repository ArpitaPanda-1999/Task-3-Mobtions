import ExploreIPhone from "../(HomeComponent)/ExploreIPhone/page";
import FirstVideo from "../(HomeComponent)/FirstVideo/page";
import GetToKNow from "../(HomeComponent)/GetToKNow/page";
import IPhoneEssesntial from "../(HomeComponent)/IphoneEssesntial/page";
import IPhoneProducts from "../(HomeComponent)/IPhoneProducts/page";
import SignificantOthers from "../(HomeComponent)/SignificantOthers/page";
import WhyApple from "../(HomeComponent)/WhyApple/page";

const Home = () => {
    return (
        <>
            <IPhoneProducts />
            {/* ------------------------ */}
            <FirstVideo />
            {/* ------------------------ */}
            <GetToKNow />
            {/* ------------------------ */}
            <ExploreIPhone />
            {/* ------------------------ */}
            <WhyApple />
            {/* ------------------------ */}
            <IPhoneEssesntial />
            {/* ------------------------ */}
            <SignificantOthers />
        </>
    );
};

export default Home;

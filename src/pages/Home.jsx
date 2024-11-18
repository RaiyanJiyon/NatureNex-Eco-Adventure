import AdventureSection from "../components/home/AdventureSection";
import AdventureToolsPromo from "../components/home/AdventureToolsPromo";
import Banner from "../components/home/Banner";
import NextAdventure from "../components/home/NextAdventure";

const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="mt-4">
                <Banner />
            </div>

            <div className="mt-20">
                <AdventureSection />
            </div>

            <div className="mt-20">
                <AdventureToolsPromo />
            </div>

            <div className="mt-20">
                <NextAdventure />
            </div>
        </div>
    );
};

export default Home;
import AdventureSection from "../components/home/AdventureSection";
import Banner from "../components/home/Banner";

const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="mt-4">
                <Banner />
            </div>

            <div className="mt-10">
                <AdventureSection />
            </div>
        </div>
    );
};

export default Home;
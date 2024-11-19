import logo from "../../assets/logo.png";

const AdventureToolsPromo = () => {
    return (
        <div className="flex flex-col md:flex-row md:h-[500px] border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
            {/* Image Section */}
            <div data-aos="fade-right" className="w-full md:w-1/2 h-full">
                <img className="w-full h-full object-fill" src="https://i.ibb.co.com/VMC3cYY/tracking.jpg" alt="walkable people" />
            </div>
            {/* Text Section */}
            <div data-aos="fade-left" className="w-full md:w-1/2 bg-[#4F95FF] text-white flex flex-col justify-center">
                <div className="space-y-4 flex flex-col w-4/5 mx-auto py-8 md:py-0">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="logo" className="w-10 h-10" />
                        <h2 className="text-3xl font-bold">NatureNex</h2>
                    </div>
                    <h2 className="text-4xl font-bold">More tools for more adventures</h2>
                    <p className="text-lg">
                        Explore more with NatureNex. Unlock the full potential of your outdoor adventures with our premium features. Enjoy offline maps, wrong-turn alerts, and advanced planning tools to make every moment count.
                    </p>
                    <button className="btn bg-white text-[#4F95FF] font-bold border-2 border-white hover:bg-[#3b79e0] hover:text-white transition duration-300 rounded-lg px-6 py-2 mt-4">
                        Try NatureNex+ Free
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdventureToolsPromo;

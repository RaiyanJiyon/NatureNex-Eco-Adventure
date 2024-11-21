import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
    return (
        <div className="font-poppins max-w-7xl mx-auto">
            <div className="w-11/12 mx-auto mt-4 pb-4 sticky z-10 top-0">
                <Navbar />
            </div>
            <div className="min-h-[calc(100vh-450px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
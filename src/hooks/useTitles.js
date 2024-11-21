import { useEffect } from "react";
import { useLocation } from "react-router-dom"

const useTitles = () => {
    const location = useLocation();

    useEffect(() => {
        let title = "NatureNex";

        switch (location.pathname) {
            case '/':
                title = 'Home | NatureNex';;
                break;
            case '/profile/update':
                title = 'Profile Update | NatureNex';
                break;
            case '/profile':
                title = 'Profile | NatureNex';
                break;
            case '/auth/login':
                title = 'Login | NatureNex';
                break;
            case '/auth/register':
                title = 'Register | NatureNex';
                break;
            case '/auth/forget-password':
                title = 'Forget Password | NatureNex';
                break;
            default:
                if (location.pathname.startsWith('/adventure-details/')) {
                    title = 'Adventure Details | NatureNex';
                }
                break;
        };
        document.title = title;
    }, [location.pathname]);
};

export default useTitles;
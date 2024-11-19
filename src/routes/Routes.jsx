import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword";
// import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile/Profile";
import UpdateProfile from "../pages/Profile/UpdateProfile";
import AdventureDetails from "../pages/Adventure/AdventureDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/adventure-details/:id',
                element: <PrivateRoute><AdventureDetails /></PrivateRoute>,
                loader: () => fetch('/eco-adventures.json')
            },
            {
                path: '/auth',
                children: [
                    {
                        path: 'login',
                        element: <Login />
                    },
                    {
                        path: 'register',
                        element: <Register />
                    },
                    {
                        path: 'forget-password',
                        element: <ForgotPassword />
                    },
                ]
            },
            {
                path: '/profile',
                children: [
                    {
                        path: '',
                        element: (
                            <PrivateRoute>
                                <Profile />
                            </PrivateRoute>
                        ),
                    },
                    {
                        path: 'update',
                        element: (
                            <PrivateRoute>
                                <UpdateProfile />
                            </PrivateRoute>
                        ),
                    }
                ]
            }
        ]
    },
]);

export default router;
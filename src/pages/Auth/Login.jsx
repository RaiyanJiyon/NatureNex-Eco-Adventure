import { useContext, useEffect } from "react";
import { FaApple, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";
import useTitles from "../../hooks/useTitles";

const Login = () => {
    useTitles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { logIn, createGoogleAccount } = useContext(authContext);

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogInForm = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const email = formData.get("email");
        const password = formData.get("password");

        logIn(email, password)
            .then(userCredential => {
                console.log(userCredential);
                toast.success("You have successfully logged in", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    zIndex: 9999,
                });
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.log(error.message);
                toast.error("Invalid username or password", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    zIndex: 9999,
                });
            });
    };

    const handleGoogleLogIn = (e) => {
        e.preventDefault();

        createGoogleAccount()
            .then(userCredential => {
                console.log(userCredential.user);
                toast.success("You have successfully logged in with your google account", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    zIndex: 9999,
                });
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.error(error.message);
            });
    };

    const navigateToForgetPassword = () => {
        const emailInput = document.getElementById("email");
        navigate("/auth/forget-password", {
            state: {
                email: emailInput.value,
            }
        })
    }

    return (
        <section className="bg-gray-50 lg:pt-10 lg:pb-10 xl:pt-0 xl:pb-0">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in to your account
                        </h1>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                            <div onClick={handleGoogleLogIn} className="flex items-center md:justify-between gap-2 w-full border border-gray-300 px-4 py-2 rounded-lg cursor-pointer">
                                <FaGoogle />
                                <span className="text-sm font-medium">Log in with Google</span>
                            </div>
                            <div className="flex items-center md:justify-between gap-2 w-full border border-gray-300 px-4 py-2 rounded-lg cursor-not-allowed">
                                <FaApple />
                                <span className="text-sm font-medium">Log in with Apple</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center my-6">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="px-4 text-gray-500">Or</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                        <form onSubmit={handleLogInForm} className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500">Remember me</label>
                                    </div>
                                </div>
                                <span onClick={navigateToForgetPassword} className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</span>
                            </div>
                            <button type="submit" className="w-full text-white bg-[#4F95FF] hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
                            <p className="text-sm font-light text-gray-500">
                                Don’t have an account yet? <Link to={"/auth/register"} className="font-medium text-[#4F95FF] hover:underline">Register</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
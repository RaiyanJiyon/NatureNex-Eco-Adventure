import { useContext, useEffect, useState } from "react";
import { FaApple, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";
import useTitles from "../../hooks/useTitles";
import { updateProfile } from "firebase/auth";

const Register = () => {
    useTitles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { createUser, createGoogleAccount } = useContext(authContext);
    const [terms, setTerms] = useState(false);

    const navigate = useNavigate();

    const handleRegisterForm = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const name = formData.get("name");
        const photoURL = formData.get("photoURL");
        const email = formData.get("email");
        const password = formData.get("password");

        console.log(name, photoURL, email, password, terms);

        const validPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!validPassword.test(password)) {
            toast.error("Password must have at least 6 characters, include an uppercase and a lowercase letter.", {
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
            return;
        };

        if (!terms) {
            toast.warn("Please accept terms & conditions", {
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
            return;
        }

        createUser(email, password)
            .then(userCredential => {
                const user = userCredential.user;

                updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL
                })
                    .then(() => {
                        toast.success("User profile updated successfully", {
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
                    })
                    .catch((error) => {
                        toast.error("Error updating user profile", {
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

                console.log(userCredential.user);
                toast.success("You have successfully signed up", {
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
                navigate("/");
            })
            .catch(error => {
                console.log(error.message);
                toast.error("The email has already been taken.", {
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

    const handleGoogleSignUp = (e) => {
        e.preventDefault();

        createGoogleAccount()
            .then(userCredential => {
                console.log(userCredential.user);
                toast.success("You have successfully signed up with your google account", {
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
                navigate("/");
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <section className="bg-gray-50 pt-10 pb-10">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Create an account
                        </h1>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                            <div onClick={handleGoogleSignUp} className="flex items-center md:justify-between gap-2 w-full border border-gray-300 px-4 py-2 rounded-lg cursor-pointer">
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
                        <form onSubmit={handleRegisterForm} className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Name" required />
                            </div>
                            <div>
                                <label htmlFor="photoURL" className="block mb-2 text-sm font-medium text-gray-900">Your photo url</label>
                                <input type="text" name="photoURL" id="photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Photo URL" required />
                            </div>
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
                                        <input
                                            id="terms"
                                            name="terms"
                                            aria-describedby="terms"
                                            type="checkbox"
                                            checked={terms}
                                            onChange={(e) => setTerms(e.target.checked)}
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="terms"
                                            className="text-gray-500">
                                            I accept the <span className="text-[#4F95FF] font-medium">Terms and Conditions</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white bg-[#4F95FF] hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center">Register</button>
                            <p className="text-sm font-light text-gray-500">
                                Already have an account? <Link to={"/auth/login"} className="font-medium text-[#4F95FF] hover:underline">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
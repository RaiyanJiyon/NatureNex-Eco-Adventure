import { Link, useLocation } from "react-router-dom";
import useTitles from "../../hooks/useTitles";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";

const ForgotPassword = () => {
    useTitles();
    const location = useLocation();
    const [email, setEmail] = useState(location.state?.email || '');

    useEffect(() => {
        window.scrollTo(0, 100);
    }, []);

    const { passwordResetEmail } = useContext(authContext);

    const handleForgetPasswordForm = (e) => {
        e.preventDefault();

        passwordResetEmail(email)
            .then(() => {
                toast.success("Password reset email sent!", {
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
                
                window.open('https://mail.google.com', '_blank');
            })
            .catch(error => {
                console.log(error.message);
                console.log(error.code);
                toast.error("Failed to send password reset email", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "light",
                });
            });
    };

    return (
        <section className="bg-gray-50 min-h-screen">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Forgot password?
                        </h1>
                        <p className="text-sm font-light text-gray-500">Remember your password? <Link to={"/auth/login"} className="text-[#4F95FF] font-medium">Login here</Link></p>
                        <form onSubmit={handleForgetPasswordForm} className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                                    placeholder="name@company.com" 
                                    required 
                                />
                            </div>
                            <button 
                                type="submit" 
                                className="w-full text-white bg-[#4F95FF] hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Reset Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;
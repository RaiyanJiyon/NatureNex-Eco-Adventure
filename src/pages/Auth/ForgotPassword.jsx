import { Link } from "react-router-dom";
import useTitles from "../../hooks/useTitles";
import { useContext, useEffect } from "react";
import { authContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";

const ForgotPassword = () => {
    useTitles();

    useEffect(() => {
        window.scrollTo(0, 100);
    }, []);

    const {passwordResetEmail} = useContext(authContext);

    const handleForgetPasswordForm = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const email = formData.get("email");
        console.log(email);

        passwordResetEmail(email)
        .then(() => {
            toast.success("Password changed successfully!", {
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
            form.reset();
        })
        .catch(error => {
            console.log(error.message);
            console.log(error.code);
        })
    }

    return (
        <section className="bg-gray-50 min-h-screen">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Forgot password?
                        </h1>
                        <p className="text-sm font-light text-gray-500">Remember your password? <Link to={"/auth/login"} className="text-[#4F95FF] font-medium">Login here</Link></p>
                        <form onSubmit={handleForgetPasswordForm} className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                            </div>
                            <button type="submit" className="w-full text-white bg-[#4F95FF] hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset Password</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;
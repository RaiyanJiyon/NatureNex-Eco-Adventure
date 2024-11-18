import { useContext, useEffect, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { IoIosWarning } from "react-icons/io";

const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { signInUser, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const handleSignInForm = e => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const email = formData.get("email");
        const password = formData.get("password");

        signInUser(email, password)
            .then(userCredential => {
                console.log(userCredential.user);
                setError('');
                navigate(location?.state?.from || "/");
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content md:w-1/2">
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl py-14">
                    <form onSubmit={handleSignInForm} className="card-body">
                        {error && (
                            <p className="flex items-center gap-2 bg-[#fae5e5] p-3 text-red-500 font-medium">
                                <IoIosWarning />
                                <span>Invalid username or password</span>
                            </p>
                        )}
                        <h2 className="text-3xl font-bold text-center">Login your account</h2>
                        <div className="divider"></div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email address</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#403F3F] text-white font-bold">Login</button>
                        </div>

                        <div className="flex items-center justify-center my-6">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="px-4 text-gray-500">Login with social accounts</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        <div className="flex items-center justify-center gap-8">
                            <FaGoogle className="text-2xl cursor-pointer" />
                            <FaGithub className="text-2xl cursor-pointer" />
                        </div>

                        <p className="text-center mt-8">Don&apos;t Have An Account ? <Link to={"/auth/register"} end className="text-[#4F95FF]">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
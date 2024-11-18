import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { IoIosWarning } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Register = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [error, setError] = useState('');
    const { signUpUser, loading, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegisterForm = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const name = formData.get("name");
        const photoUrl = formData.get("photoUrl");
        const email = formData.get("email");
        const password = formData.get("password");
        const checkbox = formData.get("checkbox");

        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if (!passwordPattern.test(password)) {
            setError("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
            setLoading(false);
            return;
        }

        if (!checkbox) {
            setError("Please accept the Terms & Conditions.");
            setLoading(false);
            return;
        }

        setError('');
        setLoading(true);

        signUpUser(email, password)
            .then(userCredential => {
                console.log(userCredential.user);
                setError('');
                form.reset();
                setLoading(false);
                navigate("/")
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content md:w-1/2">
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl py-14">
                    <h2 className="text-3xl font-bold text-center w-11/12 mx-auto">Register your account</h2>
                    <form onSubmit={handleRegisterForm} className="card-body">
                        {error && (
                            <p className="flex items-center gap-2 bg-[#fae5e5] p-3 text-red-500 font-medium">
                                <IoIosWarning />
                                {error}
                            </p>
                        )}
                        <div className="divider"></div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Photo URL</span>
                            </label>
                            <input type="text" name="photoUrl" placeholder="Enter your photo url" className="input input-bordered" required />
                        </div>
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
                            {/* checkbox */}
                            <div className="form-control mt-4">
                                <label className="label cursor-pointer flex-row-reverse justify-end gap-3">
                                    <span className="label-text text-[#706F6F] font-semibold">Accept Terms & Conditions</span>
                                    <input type="checkbox" name="checkbox" className="checkbox" />
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-[#403F3F] text-white font-bold">Register</button>
                        </div>

                        <div className="flex items-center justify-center my-6">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="px-4 text-gray-500">Register with social accounts</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        <div className="flex items-center justify-center gap-8">
                            <FaGoogle className="text-2xl cursor-pointer" />
                            <FaGithub className="text-2xl cursor-pointer" />
                        </div>

                        <p className="text-center mt-8">Already Have An Account ? <Link to={"/auth/login"} end className="text-[#4F95FF]">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

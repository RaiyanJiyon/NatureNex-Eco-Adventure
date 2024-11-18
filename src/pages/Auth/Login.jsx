import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content md:w-1/2">
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl py-14">
                    <form className="card-body">
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
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#403F3F] text-white font-bold">Login</button>
                        </div>
                        <p className="text-center mt-8">Don&apos;t Have An Account ? <Link to={"/register"} className="text-[#F75B5F]">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
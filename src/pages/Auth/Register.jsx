const Register = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content md:w-1/2">
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl py-14">
                    <h2 className="text-3xl font-bold text-center w-11/12 mx-auto">Register your account</h2>
                    <form className="card-body">
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
                                    <span className="label-text text-[#706F6F] font-semibold">Accept Term & Conditions</span>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#403F3F] text-white font-bold">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
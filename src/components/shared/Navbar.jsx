import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";
import { FaRegUser } from "react-icons/fa";
import { getAuth } from "firebase/auth";

const Navbar = () => {
    const { user, logOut } = useContext(authContext);
    console.log(user);

    const [profileUser, setProfileUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const currentUser = auth.currentUser;

        if (currentUser) {
            setProfileUser({
                name: currentUser.displayName || "",
                image: currentUser.photoURL || ""
            })
        }

    }, [])


    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("You have successfully logged out", {
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
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <ul className="menu menu-horizontal items-center gap-6 flex flex-col">
                            <NavLink to={"/"} className={({ isActive }) => isActive ? "font-medium bg-black text-white rounded-lg p-2" : "text-black"}>Home</NavLink>
                            <NavLink to={"/profile/update"} end className={({ isActive }) => isActive ? "font-medium bg-black text-white rounded-lg p-2" : "text-black"}>Update Profile</NavLink>
                            <NavLink to={"/profile"} end className={({ isActive }) => isActive ? "font-medium bg-black text-white rounded-lg p-2" : "text-black"}>User Profile</NavLink>
                        </ul>
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost text-xl flex items-center gap-2">
                    <img className="hidden sm:flex" src={logo} alt="logo" />
                    <span className="text-xl">NatureNex</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center gap-6">
                    <NavLink to={"/"} className={({ isActive }) => isActive ? "font-medium bg-black text-white rounded-lg p-2" : "text-black"}>Home</NavLink>
                    <NavLink to={"/profile/update"} end className={({ isActive }) => isActive ? "font-medium bg-black text-white rounded-lg p-2" : "text-black"}>Update Profile</NavLink>
                    <NavLink to={"/profile"} end className={({ isActive }) => isActive ? "font-medium bg-black text-white rounded-lg p-2" : "text-black"}>{`${user ? 'My Profile' : 'User Profile'}`}</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <div className={`hidden sm:flex avatar ${profileUser && `hover:${profileUser.name}`}`}>
                                <div className="w-12 rounded-full mr-2 cursor-pointer">
                                    <img src={profileUser ? profileUser.image : ""} />
                                </div>
                            </div>
                            <Link to={"/auth/login"}>
                                <button onClick={handleLogOut} className="btn bg-white border border-black text-black font-medium md:px-8 py-4 rounded-3xl">
                                    <FaRegUser />
                                    Logout
                                </button>
                            </Link>
                        </>
                        :
                        <Link to={"/auth/login"}>
                            <button className="btn bg-white border border-black text-black font-medium md:px-8 py-4 rounded-3xl">
                                <FaRegUser />
                                Login
                            </button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;

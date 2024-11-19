import { useEffect, useState } from "react";
import useTitles from "../../hooks/useTitles";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";

const Profile = () => {
    useTitles();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const currentUser = auth.currentUser;
        console.log(currentUser);

        if (currentUser) {
            setUser({
                name: currentUser.displayName || "Anonymous User",
                email: currentUser.email || "No email provided",
                photoURL: currentUser.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            })
        }
    }, []);

    return (
        <div>
            <div className='bg-[#f7f7f7] pb-24'>
                {/* heading div */}
                <div className='bg-[#4F95FF] pb-48'>
                    <h2 data-aos="fade-down" className='text-3xl font-bold text-white pt-8 text-center'>Welcome {user ? user.name : "Loading"}</h2>
                </div>

                {/* details div */}
                <div className=" w-11/12 mx-auto flex flex-col justify-center items-center bg-white rounded-3xl shadow-lg -mt-32 p-8">
                    <div className="avatar">
                        <div className="w-40 -mt-20 rounded-full">
                            <img src={user ? user.photoURL : ""} />
                        </div>
                    </div>
                    <h3 className='text-2xl font-bold pt-4 text-center'>{user ? user.name : "Loading"}</h3>
                    <p className="text-sm text-gray-600 pb-4">{user ? user.email : "Loading"}</p>
                    <Link to={"/profile/update"}>
                        <button className="btn bg-[#4F95FF] text-white">Update Profile</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;
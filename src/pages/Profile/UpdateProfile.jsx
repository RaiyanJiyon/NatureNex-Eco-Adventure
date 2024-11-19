import { useContext } from "react";
import useTitles from "../../hooks/useTitles";
import { authContext } from "../../contexts/AuthProvider";

const UpdateProfile = () => {
    useTitles();

    const { updateUserProfile } = useContext(authContext);

    const handleUpdateProfileForm = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const name = formData.get("name");
        const photoURL = formData.get("photoURL");

        console.log(name, photoURL)

        updateUserProfile(name, photoURL)
            .then(() => {
                console.log("Update done");
            })
            .catch(error => {
                console.log("Update Error");
                console.log(error.message);
            })
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900 pt-10 pb-10">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Update Profile Information
                        </h1>
                        <div className="divider"></div>
                        <form onSubmit={handleUpdateProfileForm} className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                            </div>
                            <div>
                                <label htmlFor="photoURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your photo url</label>
                                <input type="text" name="photoURL" id="photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Photo URL" required />
                            </div>
                            <button type="submit" className="w-full text-white bg-[#4F95FF] hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update Information</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpdateProfile;
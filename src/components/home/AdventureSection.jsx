import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdventureSection = () => {
    const [adventures, setAdventures] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAdventures = async () => {
            try {
                const response = await fetch("/eco-adventures.json");
                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.statusText}`);
                }
                const jsonData = await response.json();
                setAdventures(jsonData);
            } catch (error) {
                console.error("Error fetching data:", error.message);
                setError("Failed to load adventures. Please try again later.");
            }
        };
        fetchAdventures();
    }, [])


    return (
        <div>
            <h1 className="text-3xl font-bold">Adventure Experiences</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {
                    adventures.map(adventure => (
                        <div key={adventure.id} className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src={adventure.image}
                                    alt={`${adventure.image} image`}
                                    className="w-full h-[150px] rounded-xl object-cover" />
                            </figure>
                            <div className="card-body items-center">
                                <h2 className="card-title w-full h-14 pl-2">{adventure.title}</h2>
                                <div className="grid grid-cols-2 gap-4 w-full mt-2">
                                    {
                                        adventure.ecoFriendlyFeatures.map((feature, index) => (
                                            <button key={index} className="btn btn-tiny text-xs">{feature}</button>
                                        ))
                                    }
                                </div>
                                <div className="divider"></div>
                                <Link to={`/adventure-details/${adventure.id}`} className="card-actions w-full">
                                    <button className="btn bg-[#4F95FF] text-white">Explore Now</button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AdventureSection;
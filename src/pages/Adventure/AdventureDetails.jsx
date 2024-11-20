import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaMountain, FaUsers, FaLeaf, FaClipboardCheck } from "react-icons/fa";
import useTitles from "../../hooks/useTitles";
import moment from "moment";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const AdventureDetails = () => {
    useTitles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const { id } = useParams();
    const adventureId = parseInt(id);

    const adventureData = useLoaderData();

    const filteredAdventure = adventureData.find(adventure => adventure.id === adventureId);

    const handleExpertButton = () => {
        const currentTime = moment();
        const startTime = moment('10:00 AM', 'hh:mm A');
        const endTime = moment('8:00 PM', 'hh:mm A');

        if (currentTime.isBetween(startTime, endTime)) {
            window.open('https://meet.google.com/nzb-hsfo-fvj');
        } else {
            setIsModalOpen(true);
        };
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className='bg-[#f7f7f7] pb-24'>
                {/* heading div */}
                <div className='bg-[#4F95FF]'>
                    <h2 data-aos="fade-down" className='text-3xl font-bold text-white pt-8 text-center'>Adventure Details</h2>
                    <p data-aos="fade-right" className='w-3/4 mx-auto text-sm font-light text-white mt-2 pb-40 text-center'>Discover the future of adventure with us—where excitement meets eco-consciousness!</p>
                </div>

                {/* details div */}
                <div className="w-11/12 mx-auto flex flex-col justify-center items-center bg-white rounded-3xl shadow-lg -mt-32 p-8">
                    <div className='space-y-4 w-full md:w-11/12 rounded-xl'>
                        <img className="w-full h-60 md:h-[550px] rounded-xl shadow-lg object-fill" src={filteredAdventure.image} alt={`${filteredAdventure.title}`} />
                    </div>
                    <div data-aos="fade-right" className='space-y-4 w-11/12 mx-auto mt-8'>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 mb-4">
                            <h2 className='text-2xl font-bold w-full'>{filteredAdventure.title}</h2>
                            <button className="btn bg-[#4F95FF] text-white rounded-lg shadow-md px-4 py-2">{filteredAdventure.category}</button>
                        </div>

                        <p className='text-[#333] text-justify'>{filteredAdventure.shortDescription}</p>

                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 py-4">
                            <h3 className='text-lg font-semibold text-[#09080FCC]'>Adventure Cost: {filteredAdventure.adventureCost}</h3>
                            <button className={`${filteredAdventure.bookingAvailability ? "btn btn-sm btn-outline bg-[#309C081A] text-[#309C08] text-sm font-medium rounded-[32px] shadow-md" : "btn btn-sm btn-outline bg-[#f136361a] text-[#e43939] text-sm font-medium rounded-[32px] shadow-md"}`}>
                                {filteredAdventure.bookingAvailability ? "Booking Available" : "Booking Unavailable"}
                            </button>
                        </div>

                        <div className="space-y-2">
                            <p><FaMapMarkerAlt className="inline mr-2 text-[#4F95FF]" />Location: {filteredAdventure.location}</p>
                            <p><FaCalendarAlt className="inline mr-2 text-[#4F95FF]" />Duration: {filteredAdventure.duration}</p>
                            <p><FaMountain className="inline mr-2 text-[#4F95FF]" />Adventure Level: {filteredAdventure.adventureLevel}</p>
                            <p><FaUsers className="inline mr-2 text-[#4F95FF]" />Max Group Size: {filteredAdventure.maxGroupSize}</p>
                        </div>

                        <div className="mt-4">
                            <p className='font-bold text-lg'>Included Items:</p>
                            <ul className='pl-4 list-disc'>
                                {filteredAdventure.includedItems.map((item, idx) => (
                                    <li key={idx} className='text-[#666]'>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-4">
                            <p className='font-bold text-lg'>Eco-Friendly Features:</p>
                            <ul className='pl-4 list-disc'>
                                {filteredAdventure.ecoFriendlyFeatures.map((feature, idx) => (
                                    <li key={idx} className='text-[#666]'><FaLeaf className="inline mr-2 text-green-600" />{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-4 pb-8">
                            <p className='font-bold text-lg'>Special Instructions:</p>
                            <ul className='pl-4 list-disc'>
                                {filteredAdventure.specialInstructions.map((instruction, idx) => (
                                    <li key={idx} className='text-[#666]'><FaClipboardCheck className="inline mr-2 text-blue-600" />{instruction}</li>
                                ))}
                            </ul>
                        </div>

                        <button onClick={handleExpertButton} className="btn bg-[#4F95FF] text-white rounded-lg shadow-md px-4 py-2">Talk with Expert</button>

                        <Modal
                            isOpen={isModalOpen}
                            onRequestClose={closeModal}
                            contentLabel="Consultation Time"
                            className="modal-class"
                            overlayClassName="modal-overlay-class"
                        >
                            <h2 className="text-2xl font-medium text-center">Consultation Time</h2>
                            <p className="text-sm text-center">Our experts are available between 10:00 AM and 8:00 PM. Please try again during these hours.</p>
                            <button onClick={closeModal}>Close</button>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdventureDetails;

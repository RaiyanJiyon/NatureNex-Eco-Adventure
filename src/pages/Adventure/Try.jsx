import React, { useState } from 'react';
import moment from 'moment';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Ensure accessibility

const AdventureDetails = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleExpertButton = () => {
        const currentTime = moment();
        const startTime = moment('10:00 AM', 'hh:mm A');
        const endTime = moment('8:00 PM', 'hh:mm A');

        if (currentTime.isBetween(startTime, endTime)) {
            window.open('https://meet.google.com/', '_blank');
        } else {
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            {/* Your Adventure Details page content */}
            <button onClick={handleExpertButton}>Talk with Expert</button>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Consultation Time"
                className="modal-class"
                overlayClassName="modal-overlay-class"
            >
                <h2>Consultation Time</h2>
                <p>Our experts are available between 10:00 AM and 8:00 PM. Please try again during these hours.</p>
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
};

export default AdventureDetails;

import { useEffect } from "react";

const Modal = ({ isOpen, closeModal }) => {
    useEffect(() => {
        const dialog = document.getElementById("my_modal_5");
        if (isOpen) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [isOpen]);

    return (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Consultation Time</h3>
                <p className="py-4">Our experts are available between 10:00 AM and 8:00 PM. Please try again during these hours.</p>
                <div className="modal-action">
                    {/* Close button */}
                    <button className="btn" onClick={closeModal}>
                        Close
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default Modal;

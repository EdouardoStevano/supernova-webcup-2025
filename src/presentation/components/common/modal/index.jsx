import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const MODAL_SIZES = {
    md: 'w-11/12 md:w-2/3 lg:w-1/3 max-w-lg',
    lg: 'w-11/12 md:w-3/4 lg:w-1/2 max-w-2xl',
    xl: 'w-11/12 md:w-4/5 lg:w-3/4 max-w-4xl',
};

const Modal = ({ isOpen, onClose, children, title, size, footer }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-black/10"
                    onClick={handleOverlayClick}
                >
                    <motion.div
                        initial={{ scale: 0.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.2, opacity: 0 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        className={`${MODAL_SIZES[size]} rounded-3xl bg-white shadow-xl`}
                    >
                        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                            {title && (
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {title}
                                </h2>
                            )}
                            <button
                                className="text-2xl font-bold text-gray-500 hover:text-gray-700 focus:outline-none"
                                onClick={onClose}
                            >
                                ×
                            </button>
                        </div>
                        <div className="bg-gray-100 px-6 py-2">{children}</div>
                        {footer && (
                            <div className="border-t border-gray-200 px-4 py-2">
                                {footer}
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    size: PropTypes.oneOf(['md', 'lg', 'xl']),
    footer: PropTypes.node,
};

Modal.defaultProps = {
    title: '',
    size: 'lg',
    footer: null,
};

export default Modal;

/**
 * Example usage of Modal component:
 *
 * import Modal from './components/common/modal';
 *
 * function MyComponent() {
 *   const [isModalOpen, setIsModalOpen] = useState(false);
 *
 *   const handleOpenModal = () => setIsModalOpen(true);
 *   const handleCloseModal = () => setIsModalOpen(false);
 *
 *   return (
 *     <>
 *       <button onClick={handleOpenModal}>Open Modal</button>
 *
 *       <Modal
 *         isOpen={isModalOpen}
 *         onClose={handleCloseModal}
 *         title="Example Modal"
 *         size="lg" // Can be 'md', 'lg', or 'xl'
 *         footer={
 *           <div className="flex justify-end space-x-2">
 *             <button onClick={handleCloseModal}>Cancel</button>
 *             <button onClick={handleSave}>Save</button>
 *           </div>
 *         }
 *       >
 *         <div>
 *           <h3>Modal Content</h3>
 *           <p>This is an example of modal content.</p>
 *         </div>
 *       </Modal>
 *     </>
 *   );
 * }
 */

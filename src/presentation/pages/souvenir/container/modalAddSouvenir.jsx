import React, { useState } from 'react';
import Modal from '../../../components/common/modal';
import PastillesForElement from '../../../components/PastillesForElement';

function ModalAddSouvenir({ isModalOpen, handleCloseModal, handleSave }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);

    const handleFrontImageChange = (e) => {
        if (e.target.files[0]) setFrontImage(e.target.files[0]);
    };
    const handleBackImageChange = (e) => {
        if (e.target.files[0]) setBackImage(e.target.files[0]);
    };

    const onSave = () => {
        handleSave({
            title,
            description,
            frontImage,
            backImage,
        });
        setTitle('');
        setDescription('');
        setFrontImage(null);
        setBackImage(null);
    };

    return (
        <Modal
            isOpen={isModalOpen}
            onClose={() => {
                handleCloseModal();
            }}
            title={
                <div className="flex items-center gap-3">
                    <span className="text-3xl">🧠</span>
                    <span className="text-gradient bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-400 bg-clip-text text-3xl font-extrabold text-transparent drop-shadow">
                        Ajouter un souvenir
                    </span>
                    <span className="text-3xl">💭</span>
                </div>
            }
            size="xl"
            footer={
                <div className="flex justify-end space-x-2">
                    <PastillesForElement>
                        <button
                            className="rounded-full bg-yellow-200 px-4 py-2 font-bold text-yellow-800 shadow hover:bg-yellow-300"
                            onClick={handleCloseModal}
                        >
                            Fermer
                        </button>
                        <button
                            className="rounded-full bg-blue-200 px-4 py-2 font-bold text-blue-800 shadow hover:bg-blue-300"
                            onClick={onSave}
                        >
                            Sauvegarder
                        </button>
                    </PastillesForElement>
                </div>
            }
        >
            <div className="relative w-full overflow-hidden rounded-3xl border-4 border-dashed border-pink-200 bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 p-8 shadow-2xl">
                <div className="flex flex-col gap-6">
                    <div className="group relative">
                        <input
                            className="peer w-full rounded-xl border-2 border-transparent bg-white/70 p-3 placeholder-transparent shadow-md transition-all duration-300 hover:shadow-pink-100 focus:border-pink-400 focus:ring-2 focus:ring-pink-300 focus:outline-none"
                            type="text"
                            placeholder="Titre du souvenir"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            id="souvenir-title"
                            autoComplete="off"
                        />
                        <label
                            htmlFor="souvenir-title"
                            className="pointer-events-none absolute top-3 left-3 rounded bg-white/70 px-1 text-base text-gray-400 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-pink-500"
                        >
                            Titre du souvenir
                        </label>
                    </div>
                    <div className="group relative">
                        <textarea
                            className="peer min-h-[80px] w-full resize-none rounded-xl border-2 border-transparent bg-white/70 p-3 placeholder-transparent shadow-md transition-all duration-300 hover:shadow-blue-100 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            id="souvenir-description"
                            autoComplete="off"
                        />
                        <label
                            htmlFor="souvenir-description"
                            className="pointer-events-none absolute top-3 left-3 rounded bg-white/70 px-1 text-base text-gray-400 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-500"
                        >
                            Description
                        </label>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex flex-col items-center">
                            <label className="mb-2 font-semibold text-pink-500">
                                Image de couverture
                            </label>
                            <label className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-pink-300 bg-white/60 p-4 shadow transition-all duration-300 hover:bg-pink-50">
                                <span className="mb-2 text-2xl transition-transform group-hover:scale-110">
                                    📸
                                </span>
                                <span className="text-sm text-pink-400 group-hover:text-pink-600">
                                    Choisir une image
                                </span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFrontImageChange}
                                    className="hidden"
                                />
                            </label>
                            {frontImage && (
                                <img
                                    src={URL.createObjectURL(frontImage)}
                                    alt="front"
                                    className="mt-3 h-32 w-24 rounded-xl border-2 border-pink-200 object-cover shadow-lg"
                                />
                            )}
                        </div>
                        <div className="flex flex-col items-center">
                            <label className="mb-2 font-semibold text-blue-500">
                                Image de dos
                            </label>
                            <label className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-blue-300 bg-white/60 p-4 shadow transition-all duration-300 hover:bg-blue-50">
                                <span className="mb-2 text-2xl transition-transform group-hover:scale-110">
                                    🖼️
                                </span>
                                <span className="text-sm text-blue-400 group-hover:text-blue-600">
                                    Choisir une image
                                </span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleBackImageChange}
                                    className="hidden"
                                />
                            </label>
                            {backImage && (
                                <img
                                    src={URL.createObjectURL(backImage)}
                                    alt="back"
                                    className="mt-3 h-32 w-24 rounded-xl border-2 border-blue-200 object-cover shadow-lg"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ModalAddSouvenir;

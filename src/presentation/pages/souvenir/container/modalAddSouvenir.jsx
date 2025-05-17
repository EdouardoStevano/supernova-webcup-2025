import React, { useState } from "react";
import Modal from "../../../components/common/modal";
import PastillesForElement from "../../../components/PastillesForElement";

function ModalAddSouvenir({ isModalOpen, handleCloseModal, handleSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
    setTitle("");
    setDescription("");
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
          <span className="text-3xl font-extrabold text-gradient bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-400 bg-clip-text text-transparent drop-shadow">
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
              className="bg-yellow-200 hover:bg-yellow-300 text-yellow-800 font-bold py-2 px-4 rounded-full shadow"
              onClick={handleCloseModal}
            >
              Fermer
            </button>
            <button
              className="bg-blue-200 hover:bg-blue-300 text-blue-800 font-bold py-2 px-4 rounded-full shadow"
              onClick={onSave}
            >
              Sauvegarder
            </button>
          </PastillesForElement>
        </div>
      }
    >
      <div className="w-full bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 rounded-3xl p-8 shadow-2xl border-4 border-dashed border-pink-200 relative overflow-hidden">
        <div className="flex flex-col gap-6">
          <div className="relative group">
            <input
              className="peer w-full border-2 border-transparent rounded-xl p-3 bg-white/70 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-all duration-300 shadow-md hover:shadow-pink-100 placeholder-transparent"
              type="text"
              placeholder="Titre du souvenir"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="souvenir-title"
              autoComplete="off"
            />
            <label
              htmlFor="souvenir-title"
              className="absolute left-3 top-3 text-gray-400 text-base transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-pink-500 bg-white/70 px-1 rounded"
            >
              Titre du souvenir
            </label>
          </div>
          <div className="relative group">
            <textarea
              className="peer w-full border-2 border-transparent rounded-xl p-3 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all duration-300 shadow-md hover:shadow-blue-100 placeholder-transparent resize-none min-h-[80px]"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="souvenir-description"
              autoComplete="off"
            />
            <label
              htmlFor="souvenir-description"
              className="absolute left-3 top-3 text-gray-400 text-base transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-500 bg-white/70 px-1 rounded"
            >
              Description
            </label>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <label className="mb-2 text-pink-500 font-semibold">
                Image de couverture
              </label>
              <label className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-pink-300 rounded-xl p-4 bg-white/60 hover:bg-pink-50 transition-all duration-300 shadow group">
                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">
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
                  className="w-24 h-32 object-cover mt-3 rounded-xl border-2 border-pink-200 shadow-lg"
                />
              )}
            </div>
            <div className="flex flex-col items-center">
              <label className="mb-2 text-blue-500 font-semibold">
                Image de dos
              </label>
              <label className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-xl p-4 bg-white/60 hover:bg-blue-50 transition-all duration-300 shadow group">
                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">
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
                  className="w-24 h-32 object-cover mt-3 rounded-xl border-2 border-blue-200 shadow-lg"
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

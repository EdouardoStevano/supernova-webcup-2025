import { useEffect } from "react";
import Modal from "../../../components/common/modal";
import PastillesForElement from "../../../components/PastillesForElement";
function ModalInfo({
  isModalOpen,
  handleCloseModal,
  handleSave,
  selectedItems,
  setSelectedItems,
}) {
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   const handleOpenModal = () => setIsModalOpen(true);
  //   const handleCloseModal = () => setIsModalOpen(false);
  //   const handleSave = () => {
  //     // Implement your save logic here
  //     setIsModalOpen(false);
  //   };

  useEffect(() => {
    if (selectedItems) {
      console.log(selectedItems);
    }
  }, [selectedItems]);

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setSelectedItems(null);
          handleCloseModal();
        }}
        title={
          <div className="flex items-center gap-3">
            <span className="text-3xl">🧠</span>
            <span className="text-3xl font-extrabold text-gradient bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-400 bg-clip-text text-transparent drop-shadow">
              Souvenir précieux
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
                className="bg-pink-200 hover:bg-pink-300 text-pink-800 font-bold py-2 px-4 rounded-full shadow"
                onClick={handleSave}
              >
                OK
              </button>
            </PastillesForElement>
          </div>
        }
      >
        <PastillesForElement>
          <div className="w-full bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 rounded-3xl p-8 shadow-2xl border-4 border-dashed border-pink-200 relative overflow-hidden">
            {/* Décorations souvenirs */}
            <span className="absolute top-4 left-8 text-5xl opacity-20">
              🧩
            </span>
            <span className="absolute top-16 right-10 text-4xl opacity-20">
              📸
            </span>
            <span className="absolute bottom-8 left-10 text-4xl opacity-20">
              🎨
            </span>
            <span className="absolute bottom-4 right-8 text-5xl opacity-20">
              🌈
            </span>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl opacity-10 pointer-events-none select-none">
              💖
            </span>
            <div className="flex flex-row justify-center w-full gap-10">
              {/* Image de couverture */}
              <div className="relative flex flex-col items-center bg-white/70 rounded-2xl p-4 shadow-lg border-2 border-yellow-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-yellow-300 group cursor-pointer">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl transition-transform duration-300 group-hover:rotate-12">
                  🎈
                </span>
                <img
                  className="w-44 h-60 object-cover rounded-xl border-4 border-yellow-200 shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-yellow-300/50"
                  src={selectedItems?.front.source.data.src || null}
                  alt="book-cover"
                />
                <span className="mt-3 text-base text-blue-400 font-bold flex items-center gap-1">
                  <span>Devant</span> <span className="text-lg">⭐</span>
                </span>
                <span className="mt-1 text-xs text-gray-400 italic">
                  Un moment inoubliable
                </span>
              </div>
              {/* Image de dos */}
              <div className="relative flex flex-col items-center bg-white/70 rounded-2xl p-4 shadow-lg border-2 border-pink-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-pink-300 group cursor-pointer">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl transition-transform duration-300 group-hover:-rotate-12">
                  🧸
                </span>
                <img
                  className="w-44 h-60 object-cover rounded-xl border-4 border-pink-200 shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2 group-hover:shadow-pink-300/50"
                  src={selectedItems?.back.source.data.src || null}
                  alt="book-back"
                />
                <span className="mt-3 text-base text-pink-400 font-bold flex items-center gap-1">
                  <span>Derrière</span> <span className="text-lg">🌟</span>
                </span>
                <span className="mt-1 text-xs text-gray-400 italic">
                  Toujours dans le cœur
                </span>
              </div>
            </div>
            {/* Légende ou espace souvenir */}
            <div className="mt-8 text-center text-xl text-purple-400 font-extrabold italic flex flex-col items-center gap-2">
              <span>✨ Un souvenir à partager, à transmettre, à chérir ✨</span>
              <span className="text-2xl">📚💬</span>
            </div>
          </div>
        </PastillesForElement>
      </Modal>
    </>
  );
}

export default ModalInfo;

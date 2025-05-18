import { useEffect } from 'react';
import Modal from '../../../components/common/modal';
import PastillesForElement from '../../../components/PastillesForElement';
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
                        <span className="text-gradient bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-400 bg-clip-text text-3xl font-extrabold text-transparent drop-shadow">
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
                                className="rounded-full bg-yellow-200 px-4 py-2 font-bold text-yellow-800 shadow hover:bg-yellow-300"
                                onClick={handleCloseModal}
                            >
                                Fermer
                            </button>
                        </PastillesForElement>
                    </div>
                }
            >
                <PastillesForElement>
                    <div className="relative w-full overflow-hidden rounded-3xl border-4 border-dashed border-pink-200 bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 p-8 shadow-2xl">
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
                        <span className="absolute right-8 bottom-4 text-5xl opacity-20">
                            🌈
                        </span>
                        <span className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl opacity-10 select-none">
                            💖
                        </span>
                        <div className="flex w-full flex-row justify-center gap-10">
                            {/* Image de couverture */}
                            <div className="group relative flex cursor-pointer flex-col items-center rounded-2xl border-2 border-yellow-100 bg-white/70 p-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:border-yellow-300 hover:shadow-2xl">
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl transition-transform duration-300 group-hover:rotate-12">
                                    🎈
                                </span>
                                <img
                                    className="h-60 w-44 rounded-xl border-4 border-yellow-200 object-cover shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-yellow-300/50"
                                    src={
                                        selectedItems?.front.source.data.src ||
                                        null
                                    }
                                    alt="book-cover"
                                />
                                <span className="mt-3 flex items-center gap-1 text-base font-bold text-blue-400">
                                    <span>{'<>'}</span>{' '}
                                    <span className="text-lg">⭐</span>
                                </span>
                                <span className="mt-1 text-xs text-gray-400 italic">
                                    Un moment inoubliable
                                </span>
                            </div>
                            {/* Image de dos */}
                            <div className="group relative flex cursor-pointer flex-col items-center rounded-2xl border-2 border-pink-100 bg-white/70 p-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:border-pink-300 hover:shadow-2xl">
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl transition-transform duration-300 group-hover:-rotate-12">
                                    🧸
                                </span>
                                <img
                                    className="h-60 w-44 rounded-xl border-4 border-pink-200 object-cover shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2 group-hover:shadow-pink-300/50"
                                    src={
                                        selectedItems?.back.source.data.src ||
                                        null
                                    }
                                    alt="book-back"
                                />
                                <span className="mt-3 flex items-center gap-1 text-base font-bold text-pink-400">
                                    <span>{'<>'}</span>{' '}
                                    <span className="text-lg">🌟</span>
                                </span>
                                <span className="mt-1 text-xs text-gray-400 italic">
                                    Toujours dans le cœur
                                </span>
                            </div>
                        </div>
                        {/* Légende ou espace souvenir */}
                        <div className="mt-8 flex flex-col items-center gap-2 text-center text-xl font-extrabold text-purple-400 italic">
                            <span>
                                ✨ Un souvenir à partager, à transmettre, à
                                chérir ✨
                            </span>
                            <span className="text-2xl">📚💬</span>
                        </div>
                    </div>
                </PastillesForElement>
            </Modal>
        </>
    );
}

export default ModalInfo;

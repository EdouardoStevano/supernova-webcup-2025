import { create } from 'zustand';

const bookStore = create((set) => ({
    isModalOpen: false,
    selectedItems: null,
    setSelectedItems: (items) => set({ selectedItems: items }),
    openModal: () => set({ isModalOpen: true }),
    closeModal: () => set({ isModalOpen: false }),
}));

export const useOpenModalBook = () => {
    const {
        isModalOpen,
        openModal,
        closeModal,
        setSelectedItems,
        selectedItems,
    } = bookStore();
    return {
        isModalOpen,
        selectedItems,
        setSelectedItems,
        openModal,
        closeModal,
    };
};

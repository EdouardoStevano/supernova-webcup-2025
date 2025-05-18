import { create } from 'zustand';

const useStore = create((set) => ({
    scrollYPercent: 0,
    setScrollYPercent: (percentScrollY) =>
        set(() => ({ scrollYPercent: percentScrollY })),
}));

const useScroll = () => {
    const { scrollYPercent, setScrollYPercent } = useStore();

    return {
        scrollYPercent,
        setScrollYPercent,
    };
};

export default useScroll;

// components/ScrollSection.tsx
export default function ScrollSection({ children, speed }) {
    return (
        <section
            className="flex min-h-screen items-center justify-center"
            data-scroll
            data-scroll-speed={speed} // négatif pour effet de profondeur
        >
            {children}
        </section>
    );
}

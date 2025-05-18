import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { personalPages as initialPersonalPages } from '../layouts/blogNavBar';

const reactionEmojis = ['👍', '❤️', '😂', '🔥', '😮'];
const REACTIONS_KEY = 'blogReactions';
const USER_REACTIONS_KEY = 'blogUserReactions';

// Génère un identifiant utilisateur unique et le stocke dans localStorage
function getUserId() {
    let userId = localStorage.getItem('blogUserId');
    if (!userId) {
        userId = Math.random().toString(36).slice(2) + Date.now();
        localStorage.setItem('blogUserId', userId);
    }
    return userId;
}

const PagesContainer = () => {
    const { id } = useParams();
    const [pages, setPages] = useState(() => initialPersonalPages);

    useEffect(() => {
        const data = localStorage.getItem('personalPages');
        if (data) {
            try {
                setPages(JSON.parse(data));
            } catch {
                setPages(initialPersonalPages);
            }
        }
    }, []);

    const page = pages.find((p) => String(p.id) === id);

    // Réactions globales
    const [reactions, setReactions] = useState({});
    // Réactions de l'utilisateur courant
    const [userReactions, setUserReactions] = useState({});

    useEffect(() => {
        if (page && page.publications) {
            // Charge les réactions globales
            let storedReactions = {};
            const stored = localStorage.getItem(REACTIONS_KEY);
            if (stored) {
                try {
                    storedReactions = JSON.parse(stored);
                } catch {
                    storedReactions = {};
                }
            }
            // Initialise les réactions pour chaque publication
            const initialReactions = page.publications.reduce((acc, pub) => {
                acc[pub.id] = storedReactions[pub.id] || {};
                reactionEmojis.forEach((emoji) => {
                    if (typeof acc[pub.id][emoji] !== 'number')
                        acc[pub.id][emoji] = 0;
                });
                return acc;
            }, {});
            setReactions(initialReactions);

            // Charge les réactions de l'utilisateur
            let storedUserReactions = {};
            const storedUser = localStorage.getItem(USER_REACTIONS_KEY);
            if (storedUser) {
                try {
                    storedUserReactions = JSON.parse(storedUser);
                } catch {
                    storedUserReactions = {};
                }
            }
            setUserReactions(storedUserReactions[getUserId()] || {});
        }
    }, [page]);

    // Sauvegarde les réactions globales
    useEffect(() => {
        if (Object.keys(reactions).length > 0) {
            localStorage.setItem(REACTIONS_KEY, JSON.stringify(reactions));
        }
    }, [reactions]);

    // Sauvegarde les réactions de l'utilisateur
    useEffect(() => {
        const allUserReactions = JSON.parse(
            localStorage.getItem(USER_REACTIONS_KEY) || '{}'
        );
        allUserReactions[getUserId()] = userReactions;
        localStorage.setItem(
            USER_REACTIONS_KEY,
            JSON.stringify(allUserReactions)
        );
    }, [userReactions]);

    const handleReact = (pubId, emoji) => {
        // Empêche de réagir plusieurs fois avec le même emoji sur la même publication
        if (userReactions[pubId]?.includes(emoji)) return;

        // Met à jour les réactions globales
        setReactions((prev) => ({
            ...prev,
            [pubId]: {
                ...prev[pubId],
                [emoji]: (prev[pubId]?.[emoji] || 0) + 1,
            },
        }));

        // Met à jour les réactions de l'utilisateur
        setUserReactions((prev) => ({
            ...prev,
            [pubId]: [...(prev[pubId] || []), emoji],
        }));
    };

    if (!page) {
        return (
            <div className="mt-10 text-center text-white">Page non trouvée</div>
        );
    }

    return (
        <div className="flex h-screen w-full flex-col items-center overflow-y-scroll bg-[#313338] px-2 py-8">
            <div className="mb-8 flex w-full max-w-2xl items-center gap-4 rounded-xl border border-[#232428] bg-[#232428] p-6 shadow-lg">
                <img
                    src={page.avatar}
                    alt={page.label}
                    className="h-20 w-20 rounded-full border-4"
                    style={{ borderColor: page.color }}
                />
                <div>
                    <h2 className="text-3xl font-bold text-white">
                        {page.label}
                    </h2>
                    {page.url && (
                        <a
                            href={page.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#b5bac1] hover:underline"
                            style={{ color: page.color }}
                        >
                            {page.url}
                        </a>
                    )}
                </div>
            </div>
            <section className="flex w-full max-w-2xl flex-col gap-6">
                {page.publications.map((pub) => (
                    <div
                        key={pub.id}
                        className="flex flex-col gap-3 rounded-lg border border-[#383a40] bg-[#232428] p-5 shadow"
                    >
                        <div className="flex items-center gap-3">
                            <img
                                src={page.avatar}
                                alt={page.label}
                                className="h-10 w-10 rounded-full border-2"
                                style={{ borderColor: page.color }}
                            />
                            <span className="font-semibold text-white">
                                {page.label}
                            </span>
                            <span className="ml-auto text-xs text-[#b5bac1]">
                                {pub.title}
                            </span>
                        </div>
                        <img
                            src={pub.moodGif}
                            alt="mood"
                            className="mb-2 w-full rounded border border-[#383a40]"
                        />
                        <div className="mt-2 flex gap-2">
                            {reactionEmojis.map((emoji) => (
                                <button
                                    key={emoji}
                                    onClick={() => handleReact(pub.id, emoji)}
                                    className={`flex items-center gap-1 rounded bg-[#383a40] px-2 py-1 text-white transition hover:bg-[#404249] ${
                                        userReactions[pub.id]?.includes(emoji)
                                            ? 'cursor-not-allowed opacity-50'
                                            : ''
                                    }`}
                                    type="button"
                                    disabled={userReactions[pub.id]?.includes(
                                        emoji
                                    )}
                                >
                                    <span>{emoji}</span>
                                    <span className="text-xs">
                                        {reactions[pub.id]?.[emoji] || 0}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default PagesContainer;

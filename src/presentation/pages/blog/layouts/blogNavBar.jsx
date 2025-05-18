import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const navItems = [
    { label: 'Accueil', icon: '🏠', link: '/blog/main' },
    { label: 'Catégories', icon: '📚', link: 'categories' },
    { label: 'À propos', icon: 'ℹ️', link: 'abouts' },
];

const servers = [
    { name: 'S1', color: '#ce47bc' },
    { name: 'S2', color: '#43b581' },
    { name: 'S3', color: '#faa61a' },
];

// Dummy user data
const user = {
    name: 'Maher Ben Salah',
    avatar: 'https://ui-avatars.com/api/?name=Maher+Ben+Salah&background=ce47bc&color=fff',
    email: 'maher@example.com',
};

// Générateur d'UID statique (exemple: "abz100", "abz101", etc.)
// Utilisation du localStorage pour stocker et récupérer les pages personnelles
const defaultPersonalPages = [
    {
        id: 'abz101',
        label: 'Maher Ben Salah',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Maher',
        url: '',
        color: '#ce47bc',
        publications: [
            {
                id: 'abz202',
                title: "J'ai quitté Facebook pour de bon",
                likes: 12,
                moodGif:
                    'https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif',
            },
            {
                id: 'abz203',
                title: 'Arrêter Twitter : mon expérience',
                likes: 8,
                moodGif:
                    'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif',
            },
        ],
    },
    {
        id: 'abz102',
        label: 'Amira Kacem',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Amira',
        url: 'https://amirakacem.dev',
        color: '#43b581',
        publications: [
            {
                id: 'abz204',
                title: "Pourquoi j'ai quitté mon job en startup",
                likes: 15,
                moodGif:
                    'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
            },
            {
                id: 'abz205',
                title: 'Supprimer Instagram : libération ou regret ?',
                likes: 22,
                moodGif:
                    'https://media.giphy.com/media/3o6Zt8zb1Pp2v3BzHa/giphy.gif',
            },
        ],
    },
    {
        id: 'abz103',
        label: 'Sami Trabelsi',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Sami',
        url: 'https://cuisine-sami.com',
        color: '#faa61a',
        publications: [
            {
                id: 'abz206',
                title: "J'ai quitté la restauration pour voyager",
                likes: 30,
                moodGif:
                    'https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif',
            },
            {
                id: 'abz207',
                title: 'Dire adieu à LinkedIn : mon choix',
                likes: 18,
                moodGif:
                    'https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif',
            },
        ],
    },
    {
        id: 'abz104',
        label: 'Lina Gharbi',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Lina',
        url: 'https://linagharbi.travel',
        color: '#5b9bd5',
        publications: [
            {
                id: 'abz208',
                title: "J'ai quitté la Tunisie pour découvrir le monde",
                likes: 27,
                moodGif:
                    'https://media.giphy.com/media/3o6Zt7xTgY6k5W8lIc/giphy.gif',
            },
            {
                id: 'abz209',
                title: 'Quitter WhatsApp : retour à la vraie vie',
                likes: 14,
                moodGif:
                    'https://media.giphy.com/media/3o7TKzQY6p2dQw1lsk/giphy.gif',
            },
        ],
    },
    {
        id: 'abz105',
        label: 'Youssef Ben Ali',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Youssef',
        url: 'https://youssefphoto.com',
        color: '#e74c3c',
        publications: [
            {
                id: 'abz210',
                title: "J'ai quitté la photo pro pour la passion",
                likes: 19,
                moodGif:
                    'https://media.giphy.com/media/3o7TKzQY6p2dQw1lsk/giphy.gif',
            },
            {
                id: 'abz211',
                title: 'Supprimer Snapchat : mon avis après 6 mois',
                likes: 11,
                moodGif:
                    'https://media.giphy.com/media/3o6Zt8zb1Pp2v3BzHa/giphy.gif',
            },
        ],
    },
    {
        id: 'abz106',
        label: 'Nour Chatti',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Nour',
        url: 'https://nourfit.tn',
        color: '#27ae60',
        publications: [
            {
                id: 'abz212',
                title: "J'ai quitté la salle de sport pour le yoga",
                likes: 25,
                moodGif:
                    'https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif',
            },
            {
                id: 'abz213',
                title: 'Arrêter TikTok : plus de temps pour moi',
                likes: 17,
                moodGif:
                    'https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif',
            },
        ],
    },
];

function getPersonalPages() {
    const data = localStorage.getItem('personalPages');
    if (data) {
        try {
            return JSON.parse(data);
        } catch {
            return defaultPersonalPages;
        }
    }
    // Si rien dans le localStorage, on initialise avec les données par défaut
    localStorage.setItem('personalPages', JSON.stringify(defaultPersonalPages));
    return defaultPersonalPages;
}

export const personalPages = getPersonalPages();

const BlogNavBar = () => {
    const [hovered, setHovered] = useState(null);
    const [serverHovered, setServerHovered] = useState(null);
    const [settingsHovered, setSettingsHovered] = useState(false);

    const navigate = useNavigate();
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <nav
                style={{
                    height: '100vh',
                    width: '80px',
                    background: '#23272a',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '16px 0',
                    gap: '16px',
                    boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
                    justifyContent: 'space-between',
                }}
            >
                <div>
                    <div
                        style={{
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            background: '#ce47bc',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 24,
                            fontSize: 28,
                            color: '#fff',
                            fontWeight: 'bold',
                            letterSpacing: 1,
                        }}
                    >
                        E
                    </div>
                    {navItems.map((item, idx) => (
                        <div
                            key={item.label}
                            style={{
                                position: 'relative',
                                width: 48,
                                height: 48,
                            }}
                        >
                            <button
                                style={{
                                    background:
                                        hovered === idx ? '#ce47bc' : 'none',
                                    border: 'none',
                                    outline: 'none',
                                    width: 48,
                                    height: 48,
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: hovered === idx ? '#fff' : '#b9bbbe',
                                    fontSize: 24,
                                    cursor: 'pointer',
                                    transition:
                                        'background 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s',
                                    boxShadow:
                                        hovered === idx
                                            ? '0 4px 16px #ce47bc44'
                                            : 'none',
                                    transform:
                                        hovered === idx
                                            ? 'scale(1.1)'
                                            : 'scale(1)',
                                    zIndex: 2,
                                }}
                                onClick={() => {
                                    // Navigate to the corresponding page

                                    navigate(item.link);
                                }}
                                onMouseEnter={() => setHovered(idx)}
                                onMouseLeave={() => setHovered(null)}
                                title={item.label}
                            >
                                <span>{item.icon}</span>
                            </button>
                            <AnimatePresence>
                                {hovered === idx && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 56 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 400,
                                            damping: 30,
                                        }}
                                        style={{
                                            position: 'absolute',
                                            left: 0,
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            marginLeft: 8,
                                            background: '#fff',
                                            color: '#23272a',
                                            padding: '6px 16px',
                                            borderRadius: '12px',
                                            fontWeight: 600,
                                            fontSize: 16,
                                            boxShadow:
                                                '0 2px 8px rgba(0,0,0,0.08)',
                                            whiteSpace: 'nowrap',
                                            zIndex: 1,
                                        }}
                                    >
                                        {item.label}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </nav>
            <aside
                style={{
                    width: 320,
                    background: '#1e2124',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '24px',
                    gap: '16px',
                    boxShadow: '2px 0 8px rgba(0,0,0,0.08)',
                    justifyContent: 'space-between',
                }}
            >
                {/* Liste des pages */}
                <div style={{ marginTop: 32 }}>
                    <h3
                        style={{
                            color: '#ce47bc',
                            fontSize: 16,
                            marginBottom: 8,
                        }}
                    >
                        Pages personnelles des users
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {personalPages.map((page, idx) => (
                            <div
                                key={page.label}
                                style={{
                                    padding: '10px 0',
                                    borderBottom: '1px solid #292b2f',
                                    color: '#fff',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    borderLeft: `4px solid ${page.color}`,
                                    background: `rgba(206,71,188,0.08)`,
                                    transition:
                                        'background 0.2s, border-color 0.2s',
                                }}
                                onClick={() => {
                                    navigate('/blog/pages/' + page.id);
                                }}
                                title={`Voir votre ${page.label}`}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background =
                                        'rgba(206,71,188,0.18)';
                                    e.currentTarget.style.borderLeft = `6px solid ${page.color}`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background =
                                        'rgba(206,71,188,0.08)';
                                    e.currentTarget.style.borderLeft = `4px solid ${page.color}`;
                                }}
                            >
                                <span style={{ fontSize: 18 }}>
                                    <img
                                        src={page.avatar}
                                        alt={page.label}
                                        style={{
                                            width: 24,
                                            height: 24,
                                            borderRadius: '50%',
                                        }}
                                    />
                                </span>
                                {page.label}
                            </div>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default BlogNavBar;

import { BriefcaseIcon, HomeIcon, Send, ShieldAlert } from 'lucide-react';

export const menus = [
    {
        text: 'Statistiques',
        icon: <HomeIcon />,
        link: '/dashboard/home',
    },
    {
        text: 'Données',
        icon: <BriefcaseIcon />,
        link: '/dashboard/data',
    },
    {
        text: 'Utilisateurs',
        icon: <Send />,
        link: '/dashboard/users',
    },
];

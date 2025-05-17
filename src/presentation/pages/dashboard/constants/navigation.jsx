import { BriefcaseIcon, HomeIcon, Send, ShieldAlert } from 'lucide-react';

export const menus = [
    {
        text: 'Dashboards',
        icon: <HomeIcon />,
        link: '/dashboard/home',
    },
    {
        text: 'Jobs',
        icon: <BriefcaseIcon />,
        link: '/dashboard/job-list',
    },
    {
        text: 'Messages',
        icon: <Send />,
        link: '/dashboard/message',
    },
    {
        text: 'feature',
        icon: <ShieldAlert />,
        link: '/dashboard/feature',
    },
];

import {
    Activity,
    ArrowUpRight,
    User,
    Users,
    Clock,
    Target,
    TrendingUp,
    MessageSquare,
    Star,
} from 'lucide-react';
import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LineChart,
    Line,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from 'recharts';

const data = [
    { name: 'Jan', inscriptions: 65, engagement: 45 },
    { name: 'Fév', inscriptions: 59, engagement: 52 },
    { name: 'Mar', inscriptions: 80, engagement: 68 },
    { name: 'Avr', inscriptions: 81, engagement: 75 },
    { name: 'Mai', inscriptions: 56, engagement: 62 },
    { name: 'Jun', inscriptions: 95, engagement: 85 },
    { name: 'Jui', inscriptions: 88, engagement: 78 },
    { name: 'Aoû', inscriptions: 92, engagement: 84 },
];

const activityData = [
    { name: 'Lun', users: 24, sessions: 35 },
    { name: 'Mar', users: 35, sessions: 42 },
    { name: 'Mer', users: 30, sessions: 38 },
    { name: 'Jeu', users: 45, sessions: 52 },
    { name: 'Ven', users: 56, sessions: 65 },
    { name: 'Sam', users: 40, sessions: 48 },
    { name: 'Dim', users: 31, sessions: 36 },
];

const satisfactionData = [
    { name: 'Très satisfait', value: 45 },
    { name: 'Satisfait', value: 30 },
    { name: 'Neutre', value: 15 },
    { name: 'Insatisfait', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const HomeDashboard = () => {
    return (
        <div className="swipeFadeUp w-full max-w-[1300px] px-10 py-8">
            <div className="p-8">
                <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
                    {[
                        {
                            title: 'Utilisateurs totaux',
                            value: '1,234',
                            icon: <User />,
                            color: 'blue',
                        },
                        {
                            title: "Activité aujourd'hui",
                            value: '56',
                            icon: <Activity />,
                            color: 'green',
                        },
                        {
                            title: "Taux d'inscription",
                            value: '+12%',
                            icon: <ArrowUpRight />,
                            color: 'purple',
                        },
                        {
                            title: 'Temps moyen',
                            value: '24min',
                            icon: <Clock />,
                            color: 'orange',
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="rounded-xl border border-white/20 bg-white/30 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600">
                                        {item.title}
                                    </p>
                                    <p className="text-3xl font-bold text-gray-800">
                                        {item.value}
                                    </p>
                                </div>
                                <div className={`text-${item.color}-500`}>
                                    {item.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div className="rounded-xl border border-white/20 bg-white/30 p-6 shadow-xl backdrop-blur-md lg:col-span-2">
                        <h2 className="mb-4 text-xl font-semibold text-gray-800">
                            Statistiques des inscriptions et engagement
                        </h2>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data}>
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="#ffffff40"
                                    />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar
                                        dataKey="inscriptions"
                                        fill="#8884d8"
                                    />
                                    <Bar dataKey="engagement" fill="#82ca9d" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="rounded-xl border border-white/20 bg-white/30 p-6 shadow-xl backdrop-blur-md">
                        <h2 className="mb-4 text-xl font-semibold text-gray-800">
                            Satisfaction utilisateurs
                        </h2>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={satisfactionData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {satisfactionData.map(
                                            (entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={
                                                        COLORS[
                                                            index %
                                                                COLORS.length
                                                        ]
                                                    }
                                                />
                                            )
                                        )}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="rounded-xl border border-white/20 bg-white/30 p-6 shadow-xl backdrop-blur-md lg:col-span-3">
                        <h2 className="mb-4 text-xl font-semibold text-gray-800">
                            Activité hebdomadaire
                        </h2>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={activityData}>
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="#ffffff40"
                                    />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line
                                        type="monotone"
                                        dataKey="users"
                                        stroke="#8884d8"
                                        strokeWidth={2}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="sessions"
                                        stroke="#82ca9d"
                                        strokeWidth={2}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDashboard;

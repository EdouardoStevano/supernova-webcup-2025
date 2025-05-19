import { r as o, j as e } from './index-BRBA0OY8.js';
const g = ['Relation Amoureuse', 'Travail', 'Apocalypse', 'Autre'],
    x = [
        {
            id: 1,
            title: 'Dernier Au Revoir',
            category: 'Relation Amoureuse',
            date: '2024-03-20',
            content:
                "Mon amour, alors que j'écris ces derniers mots, mon cœur est lourd de tristesse et de gratitude. Notre voyage ensemble a été le plus beau chapitre de ma vie. Je chéris chaque moment partagé.",
        },
        {
            id: 2,
            title: 'Dernières Paroles',
            category: 'Travail',
            date: '2024-03-19',
            content:
                "À mes formidables collègues de TechCorp, merci pour ces 15 années incroyables de collaboration, de croissance et d'amitié. Vous avez fait de chaque journée au travail un moment comme à la maison.",
        },
        {
            id: 3,
            title: 'Adieu à la Terre',
            category: 'Apocalypse',
            date: '2024-03-18',
            content:
                "Alors que l'humanité fait face à son plus grand défi, je veux exprimer mon espoir pour nos générations futures. Qu'elles apprennent de nos erreurs et construisent un monde meilleur.",
        },
        {
            id: 4,
            title: 'À Mes Enfants',
            category: 'Relation Amoureuse',
            date: '2024-03-17',
            content:
                "Mes précieux enfants, vous voir grandir a été le plus beau cadeau de la vie. Souvenez-vous que mon amour pour vous transcende le temps et l'espace. Restez forts, soyez bienveillants et ne cessez jamais de rêver.",
        },
        {
            id: 5,
            title: 'Héritage Numérique',
            category: 'Autre',
            date: '2024-03-16',
            content:
                "À celui qui trouvera ce message, j'ai vécu à l'ère de la révolution numérique. Ma présence en ligne était ma seconde vie, et voici mes dernières pensées sur notre monde connecté.",
        },
        {
            id: 6,
            title: 'Passation de Projet',
            category: 'Travail',
            date: '2024-03-15',
            content:
                "Documentation du Projet Atlas et notes de passation : Tous les codes d'accès et procédures critiques sont détaillés ici. Prenez soin de l'héritage de notre équipe.",
        },
        {
            id: 7,
            title: "Dernier Message à l'Humanité",
            category: 'Apocalypse',
            date: '2024-03-14',
            content:
                "En ces derniers moments avant le grand changement, souvenez-vous que l'unité a toujours été notre plus grande force. Ensemble, même dans l'obscurité, nous avons trouvé la lumière.",
        },
        {
            id: 8,
            title: 'Au Revoir Mon Ami',
            category: 'Relation Amoureuse',
            date: '2024-03-13',
            content:
                "30 ans d'amitié, d'innombrables aventures et des rires sans fin. Merci d'avoir été mon roc dans chaque tempête. Jusqu'à ce que nous nous revoyions, mon ami.",
        },
    ],
    h = [
        {
            id: 1,
            title: 'Jardin du Souvenir',
            category: 'Autre',
            date: '2024-03-18',
            status: 'En Cours',
            location: 'Aile Est',
        },
        {
            id: 2,
            title: 'Havre de Paix',
            category: 'Relation Amoureuse',
            date: '2024-03-17',
            status: 'Terminé',
            location: 'Aile Ouest',
        },
        {
            id: 3,
            title: 'Repos Éternel',
            category: 'Apocalypse',
            date: '2024-03-16',
            status: 'Planification',
            location: 'Aile Nord',
        },
        {
            id: 4,
            title: 'Champs de Sérénité',
            category: 'Travail',
            date: '2024-03-15',
            status: 'En Cours',
            location: 'Aile Sud',
        },
        {
            id: 5,
            title: 'Parc du Souvenir',
            category: 'Relation Amoureuse',
            date: '2024-03-14',
            status: 'Terminé',
            location: 'Jardin Central',
        },
        {
            id: 6,
            title: 'Bosquet de Tranquillité',
            category: 'Autre',
            date: '2024-03-13',
            status: 'Planification',
            location: 'Zone Collinaire',
        },
        {
            id: 7,
            title: "Mémorial de l'Héritage",
            category: 'Travail',
            date: '2024-03-12',
            status: 'En Cours',
            location: 'Place du Mémorial',
        },
        {
            id: 8,
            title: "Sanctuaire de l'Espoir",
            category: 'Apocalypse',
            date: '2024-03-11',
            status: 'Terminé',
            location: 'Vue sur le Lac',
        },
    ],
    b = () => {
        const [s, d] = o.useState('all'),
            [n, c] = o.useState('date'),
            [i, u] = o.useState(''),
            [r, l] = o.useState('farewells'),
            p = [
                ...(r === 'farewells' ? x : h).filter((t) => {
                    const a = s === 'all' || t.category === s,
                        m = t.title.toLowerCase().includes(i.toLowerCase());
                    return a && m;
                }),
            ].sort((t, a) =>
                n === 'date'
                    ? new Date(a.date) - new Date(t.date)
                    : t.title.localeCompare(a.title)
            );
        return e.jsxs('div', {
            className: 'swipeFadeUp w-full max-w-[1300px] py-10',
            style: { display: 'flex', height: '100vh' },
            children: [
                e.jsx('div', {
                    className: 'rounded-3xl',
                    style: {
                        width: '250px',
                        backgroundColor: '#f7f7f7',
                        padding: '1rem',
                        borderRight: '1px solid #e2e2e2',
                    },
                    children: e.jsxs('div', {
                        className: 'rounded-xl',
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                        },
                        children: [
                            e.jsx('h2', {
                                style: {
                                    fontSize: '1.25rem',
                                    fontWeight: 'bold',
                                },
                                children: 'Menu',
                            }),
                            e.jsx('div', {
                                className: 'rounded-xl p-2 text-white',
                                style: {
                                    padding: '0.5rem',
                                    backgroundColor:
                                        r === 'farewells'
                                            ? '#d85dc1'
                                            : 'transparent',
                                    cursor: 'pointer',
                                },
                                onClick: () => l('farewells'),
                                children: "Pages d'Adieu",
                            }),
                            e.jsx('div', {
                                style: {
                                    padding: '0.5rem',
                                    backgroundColor:
                                        r === 'cemetery'
                                            ? '#e6f0ff'
                                            : 'transparent',
                                    cursor: 'pointer',
                                },
                                onClick: () => l('cemetery'),
                                children: 'Projets de Cimetière',
                            }),
                        ],
                    }),
                }),
                e.jsxs('div', {
                    className: 'w-[80%]',
                    style: { flex: 1, padding: '1.5rem' },
                    children: [
                        e.jsxs('div', {
                            className: 'mb-6 flex gap-4',
                            children: [
                                e.jsxs('select', {
                                    value: s,
                                    onChange: (t) => d(t.target.value),
                                    className:
                                        'w-[200px] rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm focus:border-transparent focus:ring-2 focus:ring-purple-500 focus:outline-none',
                                    children: [
                                        e.jsx('option', {
                                            value: 'all',
                                            children: 'Toutes les Catégories',
                                        }),
                                        g.map((t) =>
                                            e.jsx(
                                                'option',
                                                { value: t, children: t },
                                                t
                                            )
                                        ),
                                    ],
                                }),
                                e.jsxs('select', {
                                    value: n,
                                    onChange: (t) => c(t.target.value),
                                    className:
                                        'w-[200px] rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm focus:border-transparent focus:ring-2 focus:ring-purple-500 focus:outline-none',
                                    children: [
                                        e.jsx('option', {
                                            value: 'date',
                                            children: 'Trier par Date',
                                        }),
                                        e.jsx('option', {
                                            value: 'alphabet',
                                            children:
                                                'Trier par Ordre Alphabétique',
                                        }),
                                    ],
                                }),
                                e.jsx('input', {
                                    type: 'text',
                                    placeholder: 'Rechercher...',
                                    value: i,
                                    onChange: (t) => u(t.target.value),
                                    className:
                                        'w-[300px] rounded-xl border border-gray-200 bg-white px-4 py-2 placeholder-gray-400 shadow-sm focus:border-transparent focus:ring-2 focus:ring-purple-500 focus:outline-none',
                                }),
                            ],
                        }),
                        e.jsx('div', {
                            style: {
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '1rem',
                            },
                            children: p.map((t) =>
                                e.jsxs(
                                    'div',
                                    {
                                        className:
                                            'cardGrad w-[300px] hover:scale-110',
                                        style: {
                                            padding: '1.5rem',
                                            backgroundColor: 'white',
                                            borderRadius: '1rem',
                                            boxShadow:
                                                '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                            transition: 'all 0.3s ease',
                                            border: '1px solid rgba(229, 231, 235, 0.5)',
                                            backdropFilter: 'blur(10px)',
                                            transform: 'translateY(0)',
                                            cursor: 'pointer',
                                            ':hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow:
                                                    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                            },
                                        },
                                        children: [
                                            e.jsx('h3', {
                                                style: {
                                                    fontSize: '1.25rem',
                                                    fontWeight: '600',
                                                    color: '#1F2937',
                                                    marginBottom: '0.75rem',
                                                },
                                                children: t.title,
                                            }),
                                            e.jsx('div', {
                                                style: {
                                                    display: 'inline-block',
                                                    padding: '0.25rem 0.75rem',
                                                    backgroundColor:
                                                        'rgba(216, 93, 193, 0.1)',
                                                    borderRadius: '9999px',
                                                    fontSize: '0.875rem',
                                                    color: '#d85dc1',
                                                    marginBottom: '0.5rem',
                                                },
                                                children: t.category,
                                            }),
                                            e.jsx('p', {
                                                style: {
                                                    fontSize: '0.875rem',
                                                    color: '#6B7280',
                                                    marginBottom: '1rem',
                                                },
                                                children: new Date(
                                                    t.date
                                                ).toLocaleDateString(),
                                            }),
                                            r === 'farewells'
                                                ? e.jsx('p', {
                                                      style: {
                                                          color: '#4B5563',
                                                          lineHeight: '1.5',
                                                      },
                                                      children: t.content,
                                                  })
                                                : e.jsxs(e.Fragment, {
                                                      children: [
                                                          e.jsxs('p', {
                                                              style: {
                                                                  color: '#4B5563',
                                                                  marginBottom:
                                                                      '0.5rem',
                                                                  display:
                                                                      'flex',
                                                                  alignItems:
                                                                      'center',
                                                                  gap: '0.5rem',
                                                              },
                                                              children: [
                                                                  e.jsx(
                                                                      'span',
                                                                      {
                                                                          style: {
                                                                              fontWeight:
                                                                                  '500',
                                                                          },
                                                                          children:
                                                                              'Statut:',
                                                                      }
                                                                  ),
                                                                  ' ',
                                                                  t.status,
                                                              ],
                                                          }),
                                                          e.jsxs('p', {
                                                              style: {
                                                                  color: '#4B5563',
                                                                  display:
                                                                      'flex',
                                                                  alignItems:
                                                                      'center',
                                                                  gap: '0.5rem',
                                                              },
                                                              children: [
                                                                  e.jsx(
                                                                      'span',
                                                                      {
                                                                          style: {
                                                                              fontWeight:
                                                                                  '500',
                                                                          },
                                                                          children:
                                                                              'Emplacement:',
                                                                      }
                                                                  ),
                                                                  ' ',
                                                                  t.location,
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                        ],
                                    },
                                    t.id
                                )
                            ),
                        }),
                    ],
                }),
            ],
        });
    };
export { b as default };

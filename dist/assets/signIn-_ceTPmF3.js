import { r as a, u as N, d as k, j as e, L as n } from './index-DwbPX98K.js';
import { A as S, E, g as B } from './copyright-BNMBL2Hu.js';
import { L as C, D as L } from './index-DqfP81eW.js';
import { B as g } from './index-BcdMkzvf.js';
import { S as c } from './Cube-found-ChOUz20m.js';
import { a as I } from './authService-Dw-SZnhP.js';
import { u as P } from './useTranslation-B7Ddawmm.js';
import { E as T } from './eye-D90DUWMx.js';
import './index-fdT-esFM.js';
const G = () => {
        const t = localStorage.getItem('userSession'),
            i = localStorage.getItem('userPassword')
                ? atob(localStorage.getItem('userPassword'))
                : null;
        return { session: t, password: i };
    },
    O = () => {
        const [t, i] = a.useState(!1),
            [r, d] = a.useState(''),
            [l, x] = a.useState(''),
            [m, w] = a.useState(!1),
            { t: b } = P(),
            { addToast: o } = N(),
            y = k();
        a.useEffect(() => {
            const s = G();
            s.email && s.password && (d(s.email), x(s.password));
        }, [r, l]);
        const v = () => i(!t),
            p = async (s, A) => {
                const f = s || '',
                    u = A || '';
                if (!f.trim()) {
                    o('Veuillez saisir votre session', 'error');
                    return;
                }
                if (!u.trim()) {
                    o('Veuillez saisir votre mot de passe', 'error');
                    return;
                }
                I.login(f, u)
                    .then((h) => {
                        y('/dashboard'), o('Connexion réussie !', 'success');
                    })
                    .catch((h) => {
                        console.error('Login failed:', h.message),
                            o(
                                'Échec de la connexion. Veuillez vérifier vos identifiants.',
                                'error'
                            );
                    });
            },
            j = (s) => {
                s.key === 'Enter' && p(r, l);
            };
        return e.jsx('div', {
            className:
                'sign-in pointBackground flex h-screen cursor-auto flex-row bg-transparent dark:bg-gray-900',
            onKeyDown: j,
            children: e.jsxs('div', {
                className:
                    'sign-in-right gradientBack1 flex h-screen w-full flex-col justify-between px-9 py-4',
                children: [
                    e.jsxs('div', {
                        className:
                            'sign-right-top fadeIn flex w-full justify-between',
                        children: [
                            e.jsxs('div', {
                                className:
                                    'sign-top-left font-poppins flex items-center',
                                children: [
                                    e.jsx('span', {
                                        className:
                                            'm-auto flex h-10 w-10 flex-col items-center justify-center rounded-xl bg-lime-600 text-center text-white',
                                        children: e.jsx('img', {
                                            src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADvElEQVR4nO2Yy28PURTHhyYlulLxiFdtGpFYqB0NaRcEISwRj40/gBKRSBBvideCBaGRSESUSEq8VuKtqcQrUdZaCaFVb8pHTp2J4/bO7zftzCwG32Q2c2fO+X7vPefcc28Q/MdfCmA2cEKf2UGeACyjJ5YGeQHQ4hHQEuQFQLtHQHuQFwDnPQIag7wAqAK6DPlvwKQgTwD2GwF7Yv7TPysyIyQEgHfAHZnhYkSAauCHPtWFyAEDgJO6Uo+BiWkLEPIWz4GBzjfjgLXALeCTJwc+69g6oML5d73z7dW0BXR6CM01xOt19uLiK3AMGKM2njjjT9MWIGHjYrdsThpWLiSBW4FmfdqcpA7xFtjieb8yi6oihCw+ehxfAJYAgz02BuvYxYhVeQecAmalSt4QGChhIxXFQ/4+MK0XtqYDDxwb+zIh7nEuYWMhszaoD3bKgAbH1vJsWP92Os6JeSHfL4G9fsBpJ4xGpsv6T4f1TtgMSsFmGfDQ2K1Ph61/9m2pnG7GFgBvgCtAqfNfKbBLK5EUgp2eb2qM3e/A6CwErLXVxhk7Z8YmO2NC2MVOj/1LZnx1FgJuGwdLnLH5wGvgsmd23fIraC1SHG4mOUk9BTq0Ja4yvU1YOrt8db6AzbgCyjV8wmTuLg6yW0snC5TEOcO66NKucmoh50Xs+kJoR8S3L8w3wuesNoOCJkn4Qo7k8B2F0IiguZcCSlVEa1QSh9C2oxBWBFkKAIbHWu7o/5uTCPCFkJTNvcAU864t4n/pc77EWu5oDi+MnznAGZMXd4va1ErQoofyxvAYGCeJPckaPVt+30MM2fcmiUcnWdVYZVTHnxcTAGxXctuK3CXdSEQ2QsAa4+BikRDyLrfpozqLbGR1WQioiGol4iaxzLyK2Oq8r3XybmzqAtTREePoQV8SNaKZe2TsHkqHrd/ZWKedbki5ne4ERqXLuqfThU6yNvSxZMrMW/Le4pA6tGd55jiWfr6mFzZqnbBBq1hVlsSHARuBV93ueopAD+yyl5RH1PllTrUJYUuwNJNHgXlpES8BNjuXVS/1lmFxxLXKdz3A3NOnzWxSODG/SG89fDiedv0PscGMS7t7uA8XW4fsyStiRQUzkgqwpy20pRgaUaHqgOvABw8ReXcNWBXeyFlo2PiQ7HQmBhyDm2L+N0YPRh0+wp7v52W1AiUaRo0qJlZTBczsLQngeOo5kGCDsr19U9wNj1/C6xLPfBIAEzyhMD7IC4BKj4DKIE8ADhryB4I8gl8rka+Z/49/DT8B+kvOttHs3JIAAAAASUVORK5CYII=',
                                            alt: 'virus',
                                        }),
                                    }),
                                    e.jsxs('p', {
                                        className:
                                            'ml-2 flex flex-col text-[18px]',
                                        children: [
                                            e.jsx('span', {
                                                className:
                                                    'first-letter font-Poppins text-center font-extrabold text-slate-800',
                                                children: 'TheEndPage',
                                            }),
                                            e.jsx('span', {
                                                className: 'text-[10px]',
                                                children: 'by Supernova',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            e.jsxs('div', {
                                className:
                                    'left-header flex items-center gap-2',
                                children: [
                                    e.jsx(C, {}),
                                    e.jsx(L, {}),
                                    e.jsx(n, {
                                        to: '/',
                                        children: e.jsx(g, {
                                            className:
                                                'ml-4 bg-gray-100 px-4 py-1',
                                            size: 'medium',
                                            variant: 'light',
                                            color: 'secondary',
                                            children: 'Retour',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className:
                            'sign-middle flex w-full items-center justify-around',
                        children: [
                            e.jsx('div', {
                                className:
                                    'hidden w-[30%] flex-col items-center justify-around lg:flex',
                                children: e.jsxs('div', {
                                    className: 'fadeIn flex gap-6',
                                    children: [
                                        e.jsx('div', {
                                            className:
                                                'authImage1 floating-element-vertical bg-secondary-600 absolute top-[14vh] left-[10vw] h-[40%] w-[20%] -rotate-12 rounded-2xl rounded-b-[100%] shadow-xl shadow-slate-300 outline outline-offset-2 outline-yellow-300 transition hover:-translate-y-7 dark:shadow-slate-800',
                                        }),
                                        e.jsxs('div', {
                                            className:
                                                'sign-image3 border-opacity-15 bg-opacity-25 shadow-large absolute bottom-[20vh] left-[20vw] mt-[130px] h-[180px] w-[180px] rounded-full border-1 border-gray-300 bg-slate-300/20 shadow-slate-300 backdrop-blur-sm transition hover:scale-110 dark:shadow-slate-700',
                                            children: [
                                                e.jsxs('svg', {
                                                    className:
                                                        'turnInfinite absolute h-[180px] w-[180px]',
                                                    viewBox: '0 0 200 200',
                                                    children: [
                                                        e.jsx('defs', {
                                                            children: e.jsx(
                                                                'path',
                                                                {
                                                                    id: 'circlePath',
                                                                    d: 'M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0',
                                                                }
                                                            ),
                                                        }),
                                                        e.jsx('text', {
                                                            fill: 'black',
                                                            fontSize: '14',
                                                            fontWeight: 'bold',
                                                            children: e.jsx(
                                                                'textPath',
                                                                {
                                                                    xlinkHref:
                                                                        '#circlePath',
                                                                    className:
                                                                        'flex justify-between',
                                                                    startOffset:
                                                                        '50%',
                                                                    textAnchor:
                                                                        'middle',
                                                                    children:
                                                                        'Une sortie propre, une page sale (ou l’inverse). L’art de claquer la porte avec style',
                                                                }
                                                            ),
                                                        }),
                                                    ],
                                                }),
                                                e.jsx(S, {
                                                    className:
                                                        'border-opacity-15 absolute top-[20%] left-[20%] h-[110px] w-[110px] rounded-full border-1 border-gray-300 text-black',
                                                }),
                                            ],
                                        }),
                                        e.jsx('img', {
                                            src: c,
                                            className:
                                                'relative -top-18 -bottom-[35vh] left-[15vw] h-[40%] w-[40%]',
                                            alt: 'star 1',
                                        }),
                                    ],
                                }),
                            }),
                            e.jsxs('div', {
                                className:
                                    'sign-form swipeFadeUp mx-auto w-[90%] rounded-2xl p-6 lg:w-[35%]',
                                children: [
                                    e.jsxs('div', {
                                        className:
                                            'sign-in-title font-poppins mx-auto mb-4 text-center',
                                        children: [
                                            e.jsx('h2', {
                                                className:
                                                    'font-poppins text-xl font-semibold text-slate-700 dark:text-slate-200',
                                                children: b('banner.welcome'),
                                            }),
                                            e.jsx('h1', {
                                                className:
                                                    'font-syne mt-1 w-full bg-gradient-to-r from-red-600 to-blue-500 bg-clip-text text-6xl font-bold text-slate-800 text-transparent md:text-[76px] dark:text-slate-200',
                                                children: 'TheEndAct',
                                            }),
                                            e.jsx('p', {
                                                className:
                                                    'font-poppins mt-4 text-xs font-semibold text-slate-500 dark:text-slate-400',
                                                children:
                                                    'Un service plus rapide, une attente mieux organisée.',
                                            }),
                                        ],
                                    }),
                                    e.jsxs('div', {
                                        className:
                                            'form font-poppins m-auto mb-6 flex w-full max-w-[400px] flex-col flex-wrap items-end sm:flex-nowrap md:mb-0',
                                        children: [
                                            e.jsxs('div', {
                                                className: 'mb-4 w-full',
                                                children: [
                                                    e.jsx('label', {
                                                        className:
                                                            'block text-sm font-medium text-gray-700 dark:text-gray-200',
                                                        children: 'Session',
                                                    }),
                                                    e.jsx('input', {
                                                        type: 'text',
                                                        value: r,
                                                        onChange: (s) =>
                                                            d(s.target.value),
                                                        className:
                                                            'focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-xl border-gray-300 bg-gray-100 p-4 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white',
                                                        placeholder:
                                                            'Entrer votre session',
                                                    }),
                                                    e.jsx('p', {
                                                        className:
                                                            'mt-1 text-xs text-gray-500 dark:text-gray-400',
                                                        children:
                                                            'Entrer votre session',
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                className: 'mb-4 w-full',
                                                children: [
                                                    e.jsx('label', {
                                                        className:
                                                            'block text-sm font-medium text-gray-700 dark:text-gray-200',
                                                        children:
                                                            'Mot de passe',
                                                    }),
                                                    e.jsxs('div', {
                                                        className: 'relative',
                                                        children: [
                                                            e.jsx('input', {
                                                                type: t
                                                                    ? 'text'
                                                                    : 'password',
                                                                value: l,
                                                                onChange: (s) =>
                                                                    x(
                                                                        s.target
                                                                            .value
                                                                    ),
                                                                className:
                                                                    'focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-xl border-gray-300 bg-gray-100 p-4 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white',
                                                                placeholder:
                                                                    'Entrer votre mot de passe',
                                                            }),
                                                            e.jsx('button', {
                                                                type: 'button',
                                                                onClick: v,
                                                                className:
                                                                    'absolute inset-y-0 right-0 flex items-center pr-3',
                                                                'aria-label':
                                                                    'toggle password visibility',
                                                                children: t
                                                                    ? e.jsx(T, {
                                                                          className:
                                                                              'h-5 w-5 text-gray-400',
                                                                      })
                                                                    : e.jsx(E, {
                                                                          className:
                                                                              'h-5 w-5 text-gray-400',
                                                                      }),
                                                            }),
                                                        ],
                                                    }),
                                                    e.jsx('p', {
                                                        className:
                                                            'mt-1 text-xs text-gray-500 dark:text-gray-400',
                                                        children:
                                                            'Entrer votre mot de passe',
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                className:
                                                    'form-options bg-red mt-4 flex w-full items-center justify-between',
                                                children: [
                                                    e.jsxs('label', {
                                                        className:
                                                            'flex items-center',
                                                        children: [
                                                            e.jsx('input', {
                                                                type: 'checkbox',
                                                                className:
                                                                    'text-primary-600 focus:ring-primary-500 h-4 w-4 rounded border-gray-300',
                                                                checked: m,
                                                                onChange: () =>
                                                                    w(!m),
                                                                defaultChecked:
                                                                    !!localStorage.getItem(
                                                                        'userSession'
                                                                    ),
                                                            }),
                                                            e.jsx('span', {
                                                                className:
                                                                    'font-poppins ml-2 text-[11px] opacity-60 dark:text-slate-100',
                                                                children:
                                                                    'se souvenir de moi',
                                                            }),
                                                        ],
                                                    }),
                                                    e.jsx(n, {
                                                        className:
                                                            'font-poppins text-[11px] opacity-60 dark:text-slate-100',
                                                        to: '/forgot-password',
                                                        children:
                                                            'mot de passe oublié?',
                                                    }),
                                                ],
                                            }),
                                            e.jsx(g, {
                                                variant: 'primary',
                                                size: 'large',
                                                className:
                                                    'mt-10 w-full text-white',
                                                onClick: () => p(r, l),
                                                children: 'se connecter',
                                            }),
                                            e.jsx(n, {
                                                to: '/auth/signup',
                                                className:
                                                    'font-poppins mt-4 w-full text-center text-[13px] text-slate-800 dark:text-slate-200',
                                                children:
                                                    "Vous n'avez pas de compte ?",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            e.jsx('div', {
                                className:
                                    'hidden w-[30%] flex-col items-center justify-around lg:flex',
                                children: e.jsxs('div', {
                                    className: 'fadeIn flex gap-6',
                                    children: [
                                        e.jsx('div', {
                                            className:
                                                'authImage2 bg-success-600 floating-element-vertical-right absolute right-[10vw] bottom-[17vh] mt-[130px] h-[40%] w-[18%] rotate-12 rounded-2xl rounded-ss-[100%] shadow-xl shadow-slate-300 outline outline-offset-2 outline-teal-400 transition hover:-translate-y-4 dark:shadow-slate-800',
                                        }),
                                        e.jsx('img', {
                                            src: c,
                                            className:
                                                'relative -top-20 left-[3vw] h-16 w-16',
                                            alt: 'star 1',
                                        }),
                                        e.jsx('img', {
                                            src: c,
                                            className:
                                                'relative top-[-200px] right-[10vw] w-[29%]',
                                            alt: 'Bell',
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className:
                            'fadeIn flex flex-col items-center md:flex-row md:justify-between',
                        children: [
                            e.jsx('div', {
                                className:
                                    'font-poppins flex items-start text-[12px] text-slate-900',
                                children: e.jsxs('span', {
                                    className:
                                        'mt-2 mr-[7px] opacity-80 dark:text-slate-100',
                                    children: [
                                        'Made with love',
                                        ' ',
                                        e.jsx('span', {
                                            className: 'text-lime-700',
                                            children: '❤',
                                        }),
                                        ' by Supernova Team',
                                    ],
                                }),
                            }),
                            e.jsx('p', {
                                className:
                                    'font-Poppins float-right mt-4 text-center text-[11px] font-normal opacity-80 dark:text-slate-100',
                                dangerouslySetInnerHTML: { __html: B() },
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
export { O as default };

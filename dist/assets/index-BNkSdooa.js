import {
    c as l,
    r as p,
    H as w,
    j as e,
    A as h,
    m as n,
    S as v,
    L as d,
    O as N,
} from './index-BRBA0OY8.js';
import { C as k } from './chevron-down-DSxN27mY.js';
import { I as x, P as M } from './palette-gdAEGhtr.js';
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y = [
        ['circle', { cx: '12', cy: '9', r: '1', key: '124mty' }],
        ['circle', { cx: '19', cy: '9', r: '1', key: '1ruzo2' }],
        ['circle', { cx: '5', cy: '9', r: '1', key: '1a8b28' }],
        ['circle', { cx: '12', cy: '15', r: '1', key: '1e56xg' }],
        ['circle', { cx: '19', cy: '15', r: '1', key: '1a92ep' }],
        ['circle', { cx: '5', cy: '15', r: '1', key: '5r1jwy' }],
    ],
    W = l('grip-horizontal', Y);
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S = [
        ['path', { d: 'M9 18V5l12-2v13', key: '1jmyc2' }],
        ['circle', { cx: '6', cy: '18', r: '3', key: 'fqmcym' }],
        ['circle', { cx: '18', cy: '16', r: '3', key: '1hluhg' }],
    ],
    C = l('music', S);
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const T = [
        [
            'path',
            {
                d: 'M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z',
                key: '4pj2yx',
            },
        ],
        ['path', { d: 'M20 3v4', key: '1olli1' }],
        ['path', { d: 'M22 5h-4', key: '1gvqau' }],
        ['path', { d: 'M4 17v2', key: 'vumght' }],
        ['path', { d: 'M5 18H3', key: 'zchphs' }],
    ],
    D = l('sparkles', T);
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I = [
        ['polyline', { points: '4 7 4 4 20 4 20 7', key: '1nosan' }],
        ['line', { x1: '9', x2: '15', y1: '20', y2: '20', key: 'swin9y' }],
        ['line', { x1: '12', x2: '12', y1: '4', y2: '20', key: '1tx1rr' }],
    ],
    R = l('type', I);
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z = [
        [
            'path',
            { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' },
        ],
        ['polyline', { points: '17 8 12 3 7 8', key: 't8dd8p' }],
        ['line', { x1: '12', x2: '12', y1: '3', y2: '15', key: 'widbto' }],
    ],
    F = l('upload', Z),
    G = () => {
        const [s, y] = p.useState('text'),
            { farewellPage: H, addElement: c } = w(),
            m = p.useRef(null),
            f = [
                {
                    id: 'text',
                    name: 'Text',
                    icon: e.jsx(R, { className: 'h-5 w-5' }),
                    items: [
                        {
                            content: 'Dramatic Text',
                            style: { font: 'typographie-dramatic' },
                        },
                        {
                            content: 'Retro Text',
                            style: { font: 'typographie-retro' },
                        },
                        {
                            content: 'Pixel Text',
                            style: { font: 'typographie-pixel' },
                        },
                        {
                            content: 'Comic Text',
                            style: { font: 'typographie-comic' },
                        },
                    ],
                },
                {
                    id: 'images',
                    name: 'Images',
                    icon: e.jsx(x, { className: 'h-5 w-5' }),
                    isUploadSection: !0,
                },
                {
                    id: 'gifs',
                    name: 'GIFs',
                    icon: e.jsx(x, { className: 'h-5 w-5' }),
                    items: [
                        {
                            content:
                                'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
                            type: 'gif',
                        },
                        {
                            content:
                                'https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif',
                            type: 'gif',
                        },
                        {
                            content:
                                'https://media.giphy.com/media/26xBI73gWquCBBCDe/giphy.gif',
                            type: 'gif',
                        },
                        {
                            content:
                                'https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif',
                            type: 'gif',
                        },
                        {
                            content:
                                'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnE3eGYzdHh3bHdrbGt3eWxicWttbmo3ZW94eDd3YTlqeDcxeWh6ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZxomYqy9uGtSQSSjth/giphy.gif',
                            type: 'gif',
                        },
                        {
                            content:
                                'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWl0NzFkMmtuNzJxdHRvNDY4MWxibnVueWg0bXJvd3R0MDQ1bXl3eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2SpRA8mHlDJjuh7G/giphy.gif',
                            type: 'gif',
                        },
                        {
                            content:
                                'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnRhcWx6d3drZWdrcnBnemtkemcycTY1Y2F0bWhnYjNtdjh1MWNiNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d3mlE7uhX8KFgEmY/giphy.gif',
                            type: 'gif',
                        },
                    ],
                },
                {
                    id: 'stickers',
                    name: 'Stickers',
                    icon: e.jsx(D, { className: 'h-5 w-5' }),
                    items: [
                        { content: '⭐', type: 'sticker' },
                        { content: '💫', type: 'sticker' },
                        { content: '✨', type: 'sticker' },
                        { content: '🌟', type: 'sticker' },
                    ],
                },
                {
                    id: 'emojis',
                    name: 'Emojis',
                    icon: e.jsx(v, { className: 'h-5 w-5' }),
                    items: [
                        { content: '😭', type: 'emoji' },
                        { content: '👋', type: 'emoji' },
                        { content: '💔', type: 'emoji' },
                        { content: '🥺', type: 'emoji' },
                    ],
                },
                {
                    id: 'music',
                    name: 'Music',
                    icon: e.jsx(C, { className: 'h-5 w-5' }),
                    items: [{ content: '🎵 Coming soon...', disabled: !0 }],
                },
                {
                    id: 'effects',
                    name: 'Funny Effects',
                    icon: e.jsx(M, { className: 'h-5 w-5' }),
                    items: [
                        {
                            content: '😭 Animated Tears',
                            type: 'effect',
                            effect: 'tears',
                        },
                        {
                            content: '✨ Sparkles',
                            type: 'effect',
                            effect: 'sparkles',
                        },
                        {
                            content: '🤡 Cringe Filter',
                            type: 'effect',
                            effect: 'cringe',
                        },
                        {
                            content: '💧 Dramatic Cry',
                            type: 'effect',
                            effect: 'cry',
                        },
                    ],
                },
            ],
            g = (t, a) => {
                if (a.id === 'effects' && t.effect) {
                    c({
                        type: 'effect',
                        effect: t.effect,
                        position: { x: 300, y: 200 },
                        size: { width: 120, height: 120 },
                    });
                    return;
                }
                const i = {
                    type: a.id === 'text' ? 'text' : t.type || a.id,
                    content: t.content,
                    style: t.style || {},
                    position: { x: 100, y: 100 },
                };
                c(i);
            },
            u = (t) => {
                const a = t.target.files;
                if ((a == null ? void 0 : a.length) > 0) {
                    const i = new FileReader();
                    (i.onload = (o) => {
                        const j = {
                            type: 'image',
                            content: o.target.result,
                            style: {},
                            position: { x: 100, y: 100 },
                        };
                        c(j);
                    }),
                        i.readAsDataURL(a[0]);
                }
            },
            b = () => {
                var t;
                (t = m.current) == null || t.click();
            };
        return e.jsxs('div', {
            className:
                'm-4 h-[calc(100vh-2rem)] w-[320px] overflow-hidden rounded-2xl border-3 border-gray-300 bg-white/80 backdrop-blur-xl',
            style: { boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)' },
            children: [
                e.jsx('div', {
                    className: 'border-b-1 border-gray-200 p-4',
                    children: e.jsxs('h2', {
                        className:
                            'flex items-center gap-2 text-xl font-bold text-white',
                        children: [
                            e.jsx(W, { className: 'h-5 w-5 text-teal-400' }),
                            e.jsx('span', {
                                className:
                                    'bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent',
                                children: 'Elements',
                            }),
                        ],
                    }),
                }),
                e.jsx('div', {
                    className: 'custom-scrollbar h-full overflow-y-auto p-4',
                    children: e.jsxs(h, {
                        children: [
                            f.map((t) => {
                                var a;
                                return e.jsxs(
                                    n.div,
                                    {
                                        initial: { opacity: 0, y: 20 },
                                        animate: { opacity: 1, y: 0 },
                                        exit: { opacity: 0, y: -20 },
                                        transition: { duration: 0.2 },
                                        className: 'mb-4',
                                        children: [
                                            e.jsxs(n.button, {
                                                className: `flex w-full items-center justify-between rounded-xl bg-gray-200 p-3 text-white ${s === t.id ? 'bg-gray-200' : 'hover:bg-gray-300'} transition-all duration-200`,
                                                onClick: () =>
                                                    y(s === t.id ? null : t.id),
                                                whileHover: { scale: 1.02 },
                                                whileTap: { scale: 0.98 },
                                                children: [
                                                    e.jsxs('div', {
                                                        className:
                                                            'flex items-center gap-2',
                                                        children: [
                                                            e.jsx('div', {
                                                                className: `${s === t.id ? 'text-primary-600' : 'text-slate-500'}`,
                                                                children:
                                                                    t.icon,
                                                            }),
                                                            e.jsx('span', {
                                                                className: `${s === t.id ? 'text-primary-600' : 'text-slate-500'}`,
                                                                children:
                                                                    t.name,
                                                            }),
                                                        ],
                                                    }),
                                                    e.jsx(k, {
                                                        className: `h-4 w-4 transition-transform duration-300 ${s === t.id ? 'text-primary-600 rotate-180' : 'text-slate-400'}`,
                                                    }),
                                                ],
                                            }),
                                            e.jsx(h, {
                                                children:
                                                    s === t.id &&
                                                    e.jsx(n.div, {
                                                        initial: {
                                                            opacity: 0,
                                                            height: 0,
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            height: 'auto',
                                                        },
                                                        exit: {
                                                            opacity: 0,
                                                            height: 0,
                                                        },
                                                        transition: {
                                                            duration: 0.2,
                                                        },
                                                        className:
                                                            'mt-2 grid grid-cols-2 gap-2',
                                                        children:
                                                            t.isUploadSection
                                                                ? e.jsx('div', {
                                                                      className:
                                                                          'col-span-2',
                                                                      children:
                                                                          e.jsxs(
                                                                              n.div,
                                                                              {
                                                                                  className:
                                                                                      'flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-teal-500/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-4 transition-all duration-200 hover:border-teal-400/50',
                                                                                  whileHover:
                                                                                      {
                                                                                          scale: 1.02,
                                                                                      },
                                                                                  whileTap:
                                                                                      {
                                                                                          scale: 0.98,
                                                                                      },
                                                                                  onClick:
                                                                                      b,
                                                                                  children:
                                                                                      [
                                                                                          e.jsx(
                                                                                              F,
                                                                                              {
                                                                                                  className:
                                                                                                      'h-8 w-8 text-teal-400',
                                                                                              }
                                                                                          ),
                                                                                          e.jsxs(
                                                                                              'div',
                                                                                              {
                                                                                                  className:
                                                                                                      'text-center',
                                                                                                  children:
                                                                                                      [
                                                                                                          e.jsx(
                                                                                                              'p',
                                                                                                              {
                                                                                                                  className:
                                                                                                                      'font-medium text-white',
                                                                                                                  children:
                                                                                                                      'Upload an image',
                                                                                                              }
                                                                                                          ),
                                                                                                          e.jsx(
                                                                                                              'p',
                                                                                                              {
                                                                                                                  className:
                                                                                                                      'text-sm text-slate-400',
                                                                                                                  children:
                                                                                                                      'PNG, JPG, GIF up to 5MB',
                                                                                                              }
                                                                                                          ),
                                                                                                      ],
                                                                                              }
                                                                                          ),
                                                                                          e.jsx(
                                                                                              'input',
                                                                                              {
                                                                                                  ref: m,
                                                                                                  type: 'file',
                                                                                                  className:
                                                                                                      'hidden',
                                                                                                  accept: 'image/*',
                                                                                                  onChange:
                                                                                                      u,
                                                                                              }
                                                                                          ),
                                                                                      ],
                                                                              }
                                                                          ),
                                                                  })
                                                                : (a =
                                                                        t.items) ==
                                                                    null
                                                                  ? void 0
                                                                  : a.map(
                                                                        (
                                                                            i,
                                                                            o
                                                                        ) => {
                                                                            var r;
                                                                            return e.jsx(
                                                                                n.div,
                                                                                {
                                                                                    className: `cursor-grab rounded-lg border border-white/5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-3 transition-all duration-200 hover:border-teal-500/30 ${i.disabled ? 'cursor-not-allowed opacity-50' : ''}`,
                                                                                    whileHover:
                                                                                        i.disabled
                                                                                            ? {}
                                                                                            : {
                                                                                                  scale: 1.05,
                                                                                              },
                                                                                    whileTap:
                                                                                        i.disabled
                                                                                            ? {}
                                                                                            : {
                                                                                                  scale: 0.95,
                                                                                              },
                                                                                    onMouseDown:
                                                                                        () =>
                                                                                            !i.disabled &&
                                                                                            g(
                                                                                                i,
                                                                                                t
                                                                                            ),
                                                                                    children:
                                                                                        t.id ===
                                                                                        'gifs'
                                                                                            ? e.jsx(
                                                                                                  'img',
                                                                                                  {
                                                                                                      src: i.content,
                                                                                                      alt: 'Funny gif',
                                                                                                      className:
                                                                                                          'h-[80px] w-full rounded-md object-cover',
                                                                                                  }
                                                                                              )
                                                                                            : e.jsx(
                                                                                                  'div',
                                                                                                  {
                                                                                                      className: `text-center ${(t.id === 'text' && ((r = i.style) == null ? void 0 : r.font)) || ''} ${i.disabled ? 'text-slate-500' : 'text-white'}`,
                                                                                                      children:
                                                                                                          i.content,
                                                                                                  }
                                                                                              ),
                                                                                },
                                                                                o
                                                                            );
                                                                        }
                                                                    ),
                                                    }),
                                            }),
                                        ],
                                    },
                                    t.id
                                );
                            }),
                            e.jsx('button', { children: 'Autodesctruvtion' }),
                        ],
                    }),
                }),
            ],
        });
    },
    P = () =>
        e.jsx('div', {
            className:
                'pointBackground min-h-screen cursor-auto overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200',
            children: e.jsxs('div', {
                className:
                    'content relative flex h-full w-full overflow-hidden',
                children: [
                    e.jsxs(d, {
                        to: '/',
                        className:
                            'absolute top-4 left-4 z-20 flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-gray-700 shadow-md transition-colors hover:bg-gray-50',
                        children: [
                            e.jsx('svg', {
                                xmlns: 'http://www.w3.org/2000/svg',
                                className: 'h-5 w-5',
                                viewBox: '0 0 20 20',
                                fill: 'currentColor',
                                children: e.jsx('path', {
                                    fillRule: 'evenodd',
                                    d: 'M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z',
                                    clipRule: 'evenodd',
                                }),
                            }),
                            'Back',
                        ],
                    }),
                    e.jsx(G, {}),
                    e.jsxs('div', {
                        className:
                            'absolute right-10 bottom-10 z-10 flex flex-col gap-3 p-4',
                        children: [
                            e.jsx(d, {
                                to: '/assitance/ai',
                                className:
                                    'transform rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-blue-600',
                                children: 'AI Assistance',
                            }),
                            e.jsx(d, {
                                to: '/video/ia',
                                className:
                                    'transform rounded-lg bg-green-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-green-600',
                                children: 'Video',
                            }),
                        ],
                    }),
                    e.jsx('div', {
                        className: 'w-full',
                        children: e.jsx(N, {}),
                    }),
                ],
            }),
        });
export { P as default };

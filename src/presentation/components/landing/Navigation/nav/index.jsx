'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import Image from './Image';

import Image1 from '../../../../assets/illustrations/auth1.jpg';

const links = [
    {
        title: 'Home',
        href: '/',
        src: Image1,
    },
    {
        title: 'Shop',
        href: '/shop',
        src: 'shop.png',
    },
    {
        title: 'About Us',
        href: '/about',
        src: Image1,
    },
    {
        title: 'Lookbook',
        href: '/lookbook',
        src: Image1,
    },
    {
        title: 'Contact',
        href: '/contact',
        src: Image1,
    },
];

export default function Index() {
    const [selectedLink, setSelectedLink] = useState({
        isActive: false,
        index: 0,
    });

    return (
        <motion.div
            variants={height}
            initial="initial"
            animate="enter"
            exit="exit"
            className={styles.nav}
        >
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Body
                        links={links}
                        selectedLink={selectedLink}
                        setSelectedLink={setSelectedLink}
                    />
                    <Footer />
                </div>
                <Image
                    src={links[selectedLink.index].src}
                    isActive={selectedLink.isActive}
                />
            </div>
        </motion.div>
    );
}

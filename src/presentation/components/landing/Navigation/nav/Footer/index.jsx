import styles from './style.module.scss';
import { translate } from '../../anim';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                >
                    <span>Team </span>Supernova
                </motion.li>
            </ul>
            <ul>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                >
                    <span>Webcup </span>2025
                </motion.li>
            </ul>
            <ul>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                >
                    Privacy Policy
                </motion.li>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                >
                    Terms & Conditions
                </motion.li>
            </ul>
        </div>
    );
}

import { motion } from 'framer-motion';
import styles from './style.module.scss';
import { blur, translate } from '../../anim';
import { Link } from 'react-router-dom';

export default function Body({ links, selectedLink, setSelectedLink }) {
    const getChars = (word) => {
        let chars = [];
        word.split('').forEach((char, i) => {
            chars.push(
                <motion.span
                    custom={[i * 0.02, (word.length - i) * 0.01]}
                    variants={translate}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    key={char + i}
                >
                    {char}
                </motion.span>
            );
        });
        return chars;
    };

    return (
        <div className={styles.body}>
            {links.map((link, index) => {
                const { title, href } = link;
                return (
                    <a key={`l_${index}`} href="#contact">
                        <motion.p
                            onMouseOver={() => {
                                setSelectedLink({ isActive: true, index });
                            }}
                            onMouseLeave={() => {
                                setSelectedLink({ isActive: false, index });
                            }}
                            variants={blur}
                            // animate={
                            //     selectedLink.isActive &&
                            //     selectedLink.index != index
                            //         ? 'open'
                            //         : 'closed'
                            // }
                        >
                            {getChars(title)}
                        </motion.p>
                    </a>
                );
            })}
        </div>
    );
}

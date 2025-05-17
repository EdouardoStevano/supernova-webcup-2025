import { useRef } from 'react';
import styles from './style.module.css';
import { useInView } from 'react-intersection-observer';

export default function MaskText(phrases) {
    const body = useRef(null);

    const isInView = useInView(body, { once: true, margin: '75%' });

    const animation = {
        initial: { y: '100%' },

        enter: (i) => ({
            y: '0',
            transition: {
                duration: 0.75,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.075 * i,
            },
        }),
    };
    return (
        <div className={styles.body}>
            <div ref={body} className={styles.body}>
                {phrases.map((phrase, index) => {
                    return (
                        <div key={index} className={styles.lineMask}>
                            <motion.p
                                custom={index}
                                variants={animation}
                                initial="initial"
                                animate={isInView ? 'enter' : ''}
                            >
                                {phrase}
                            </motion.p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

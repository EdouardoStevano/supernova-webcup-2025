import React, { useEffect, useState } from 'react';
import './style.css';

const AnimatedText = ({ text }) => {
    const [displayedText, setDisplayedText] = useState([]);

    useEffect(() => {
        let index = 0;
        setDisplayedText([]);

        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText((prev) => [...prev, text[index]]);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 80);

        return () => clearInterval(interval);
    }, [text]);

    return (
        <div className="animated-text text-gray-700">
            {displayedText.map((char, i) => (
                <span key={i} className="char">
                    {char}
                </span>
            ))}
        </div>
    );
};

export default AnimatedText;

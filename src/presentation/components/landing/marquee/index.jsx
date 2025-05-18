import React from 'react';
import './styles.css'; // on importe les styles CSS
import { useTranslation } from 'react-i18next';

const Marquee = () => {
    const { t } = useTranslation();
    return (
        <div className="marquee-container">
            <div className="marquee">
                <span>{t('marquee.text')}</span>
                <span>{t('marquee.text')}</span>
            </div>
        </div>
    );
};

export default Marquee;

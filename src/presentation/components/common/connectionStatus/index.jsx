import React, { useState, useEffect, FC } from 'react';
import './style.css';

const ConnectionStatus = () => {
    const [isOnline, setIsOnline] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleOnlineStatus = () => {
            setIsOnline(true);
            setIsVisible(true);
            setTimeout(() => setIsVisible(false), 3000);
        };

        const handleOfflineStatus = () => {
            setIsOnline(false);
            setIsVisible(true);
        };

        window.addEventListener('online', handleOnlineStatus);
        window.addEventListener('offline', handleOfflineStatus);

        return () => {
            window.removeEventListener('online', handleOnlineStatus);
            window.removeEventListener('offline', handleOfflineStatus);
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    return isVisible ? (
        <>
            <div
                className={`ConnectionStatus ${
                    isOnline ? 'online' : 'offline'
                } font-poppins z-50 outline outline-offset-2 outline-slate-200`}
            >
                <div className="close-button" onClick={handleClose}></div>

                {isOnline ? (
                    <div>
                        <h1>Connexion rétablie</h1>
                        <p>Votre connexion internet est rétablie.</p>
                    </div>
                ) : (
                    <div>
                        <a
                            className="rounded-xl"
                            href="https://icons8.com/illustrations/author/7WmtYU90j36d"
                        >
                            Illustration by Fruzka
                        </a>
                        <h1>Pas d&apos;accès Internet</h1>
                        <p>
                            Il semble que vous n&apos;ayez actuellement pas
                            accès à Internet. Nous vous recommandons de vérifier
                            votre connexion Internet.
                        </p>
                    </div>
                )}
            </div>

            {/* <div className="fixed w-screen h-screen backdrop z-50-blur-sm bg-[#00000010]"></div> */}
        </>
    ) : null;
};

export default ConnectionStatus;

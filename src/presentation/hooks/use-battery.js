'use client';
import React from 'react';

export const BatteryState = {
    isSupported: false,
    isLoading: false,
    level: null,
    isCharging: null,
    chargingTime: null,
    dischargingTime: null,
};

export const useBattery = () => {
    const [state, setState] = React.useState({
        isSupported: true,
        isLoading: true,
        level: null,
        isCharging: null,
        chargingTime: null,
        dischargingTime: null,
    });

    React.useEffect(() => {
        if (!navigator.getBattery) {
            setState((s) => ({
                ...s,
                isSupported: false,
                isLoading: false,
            }));
            return;
        }

        let battery = null;

        const handleChange = () => {
            if (battery) {
                setState({
                    isSupported: true,
                    isLoading: false,
                    level: battery.level,
                    isCharging: battery.charging,
                    chargingTime: battery.chargingTime,
                    dischargingTime: battery.dischargingTime,
                });
            }
        };

        navigator.getBattery().then((b) => {
            battery = b;
            handleChange();

            b.addEventListener('levelchange', handleChange);
            b.addEventListener('chargingchange', handleChange);
            b.addEventListener('chargingtimechange', handleChange);
            b.addEventListener('dischargingtimechange', handleChange);
        });

        return () => {
            if (battery) {
                battery.removeEventListener('levelchange', handleChange);
                battery.removeEventListener('chargingchange', handleChange);
                battery.removeEventListener('chargingtimechange', handleChange);
                battery.removeEventListener(
                    'dischargingtimechange',
                    handleChange
                );
            }
        };
    }, []);

    return state;
};

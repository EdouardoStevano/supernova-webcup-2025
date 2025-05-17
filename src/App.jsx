import { useState } from 'react';
import viteLogo from '/vite.svg';
import { useToast } from './presentation/components/common/superToast';
import Button from './presentation/components/common/button';
import { FarewellProvider } from './context/FarewellContext';

function App() {
    const [count, setCount] = useState(0);
    const { addToast } = useToast();

    // Toast d'information (par défaut)
    const montrerInfo = () => {
        addToast('Voici une information importante');
    };

    // Toast de succès
    const montrerSucces = () => {
        addToast('Opération réussie !', 'success');
    };

    // Toast d'erreur
    const montrerErreur = () => {
        addToast("Une erreur s'est produite", 'error');
    };

    // Toast d'avertissement
    const montrerAvertissement = () => {
        addToast('Attention !', 'warning');
    };
    return (
        <>
            <div className="bg-primary-500 px-3.5">
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
            </div>

            <div className="gradient-bg h-[500px]"></div>
            <div>
                <button onClick={montrerInfo}>Info</button>
                <button onClick={montrerSucces}>Succès</button>
                <button onClick={montrerErreur}>Erreur</button>
                <button onClick={montrerAvertissement}>Avertissement</button>
            </div>
            <h1 className="loading-dots">Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <Button variant="primary" size="medium" audio="/path/to/sound.mp3">
                Medium Button
            </Button>
            <Button
                variant="secondary"
                size="medium"
                audio="/path/to/sound.mp3"
            >
                Medium Button
            </Button>
            <Button variant="outline" size="medium" audio="/path/to/sound.mp3">
                Medium Button
            </Button>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;

import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const GoogleSignIn = () => {
    const [userProfile, setUserProfile] = useState(null);

    const handleSuccess = (credentialResponse) => {
        const idToken = credentialResponse.credential;

        try {
            const decoded = jwtDecode(idToken);
            const { name, email, picture } = decoded;

            setUserProfile({ name, email, picture });
        } catch (error) {
            console.error('Erreur de décodage du token :', error);
        }
    };

    return (
        <div className="flex w-full flex-col items-center p-4 px-2">
            {!userProfile ? (
                <GoogleLogin
                    onSuccess={handleSuccess}
                    onError={() => {
                        console.log('Échec de la connexion Google');
                    }}
                />
            ) : (
                <div className="text-center">
                    <img
                        src={userProfile.picture}
                        alt="User profile"
                        className="mx-auto mb-2 h-16 w-16 rounded-full"
                    />
                    <p>Nom: {userProfile.name}</p>
                    <p>Email: {userProfile.email}</p>
                    <button
                        onClick={() => setUserProfile(null)}
                        className="mt-2 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                    >
                        Se déconnecter
                    </button>
                </div>
            )}
        </div>
    );
};

export default GoogleSignIn;

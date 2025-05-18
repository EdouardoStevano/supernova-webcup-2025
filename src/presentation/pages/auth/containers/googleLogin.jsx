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
    <div className="flex flex-col items-center p-4">
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
            className="w-16 h-16 rounded-full mx-auto mb-2"
          />
          <p>Nom: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
          <button
            onClick={() => setUserProfile(null)}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Se déconnecter
          </button>
        </div>
      )}
    </div>
  );
};

export default GoogleSignIn;

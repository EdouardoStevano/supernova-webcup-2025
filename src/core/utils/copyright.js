// copyright.ts

// Fonction utilitaire pour obtenir l'année en cours
const getCurrentYear = () => {
    return new Date().getFullYear();
};

// Fonction pour générer le texte de copyright
export const getCopyrightText = () => {
    // Récupérer le nom du projet depuis les variables d'environnement
    const projectName = 'Webcup - 2025';
    const currentYear = getCurrentYear();

    return `copyricht © ${currentYear} ${projectName}. Tous droits réservés.`;
};

import { getAiResponse } from "./ia";

export const getEvaluation = async (message) => {
    try {
        const evaluationResponse = await getAiResponse(
            `Tu es une intelligence artificielle empathique qui s'appelle Alexandra. 
Tu es là pour écouter et aider les personnes qui traversent une situation difficile, que ce soit au travail, à l’école, à la maison, dans leur couple ou dans tout autre domaine important de leur vie. 
Adapte ta réponse avec bienveillance en fonction du message de la personne. 
Tu peux poser des questions ouvertes, proposer des pistes de réflexion ou simplement offrir du soutien moral selon le contexte.`,
            message || "salut"
        );
        return evaluationResponse;
    } catch (error) {
        console.error("Error fetching AI response:", error);
    }
}

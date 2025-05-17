function MonFormulaire() {
const { addToast } = useToast();

const soumettreFormulaire = async (e) => {
e.preventDefault();
try {
// Votre logique de soumission
await envoyerDonnees();
addToast("Formulaire envoyé avec succès !", "success");
} catch (error) {
addToast("Erreur lors de l'envoi du formulaire", "error");
}
};

return (
<form onSubmit={soumettreFormulaire}>
{/_ Vos champs de formulaire _/}
</form>
);
}

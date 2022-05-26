document.addEventListener("DOMContentLoaded", () => {

    /* Petit problème quand je refresh la page sa n'enlève pas ce qui a était entré précedemment dans les champs
        À régler   */

    let prenom = document.querySelector('.prénom');
    let prenom_p = document.querySelector('.prenom_p');
    let nom = document.querySelector('.nom');
    let email = document.querySelector('.email');
    let mdp = document.querySelector('.mdp');

    prenom.addEventListener('keypress', event => {
        for (let i = 0; i < prenom.value.length; i++) {
            if (0 < prenom.value.length && prenom.value.length < 24) {
                prenom_p.style.display = "none";
                console.log('allalal');
            } else if (prenom.value.length > 24) {
                prenom.style.marginBottom = '0rem';
                prenom_p.style.display = "block";
                console.log('abane');
            }
        }
    });
});
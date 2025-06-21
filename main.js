// Les Variables
const clavier = document.querySelector("#clavier");
const listeMot = document.querySelector("#mot");
const zoneMauvaisesLettres = document.querySelector("#mauvaises-lettres");
const popupVictoire = document.querySelector("#popup-victoire");
const messageVictoire = document.querySelector("#message-victoire");
const btnRejouer = document.querySelector("#btn-rejouer");


// Définie les lettes du clavier 
const lettre = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
    "Y", "Z"
];

    // Créer et faire apparaitre le clavier
lettre.forEach(lettre => {
    const bouton = document.createElement("button");
    bouton.textContent= lettre;
    bouton.classList.add("touche");

    // Clic sur le bouton
bouton.addEventListener("click", () => {
    // console.log(`Lettre cliquée : ${lettre}`);
    bouton.disabled = true;
    bouton.classList.add("touche-utilisee");

    const lettreCliquee = bouton.textContent;

    if (motATrouver.includes(lettreCliquee)) {
        // Bonne lettre
        if (!lettresTrouvees.includes(lettreCliquee)){
            lettresTrouvees.push(lettreCliquee);
            
        }
        afficherMot()

        // Toute les lettre trouvées
            if (!listeMot.textContent.includes("_")) {
                afficherPopupVictoire(motATrouver);
            }
        }else {
            // Mauvaise lettre
            if (!mauvaisesLettres.includes(lettreCliquee)) {
                mauvaisesLettres.push(lettreCliquee);
            }
            afficherMauvaisesLettres();
            // Ajout du pendu
    }
});

    clavier.appendChild(bouton);
});


// Tableau des mots à deviner
const mots = [
    "PENDU", "ORDINATEUR", "PROGRAMMATION", "JAVASCRIPT", "DEVELOPPEUR", "ECRAN", "LOGICIEL",
    "MONTAGNE", "RIVIERE", "FORET", "RANDONNEE", "VELO", "PRAIRIE", "ESCALADE", "CAMPING", "ANIMAL", "PAYSAGE",
    "SAMOURAI", "NINJA", "SHONEN", "MANGA", "KATANA", "CHIBI", "ANIME", "COSPLAY", "SENPAI", "OUTIL", "SCIE", "PONCEUSE", 
    "VISSEUSE", "MARTEAU", "BOIS", "PEINTURE", "CHIFFON", "TOURNEVIS", "DELAI", "FACTURE", "PORTFOLIO", "REUNION", 
    "GOKU", "NARUTO", "BLEACH", "ONEPIECE", "DRAGONBALL", "AKIRA", "LION", "TIGRE", "ELEPHANT", "GIRAFFE", "ZEBRE", "RHINOCEROS",
    "DAUPHIN", "REQUIN", "PANDA", "KOALA", "OURS", "LOUP", "RENARD", "SINGE", "PERROQUET", "AIGLE", "FALCON", "HIBOU", "SERPENT",
    "CAMELLE", "CHEVAL", "CHAT", "CHIEN", "POULE", "TAUREAU", "AVION", "BAGAGE", "PASSPORT", "HOTEL", "ESCAPADE", "EXCURSION",
    "SAFARI", "CROISIERE", "AUBERGE", "TOURISME", "VOYAGEUR", "CARTE", "PATISSERIE", "CHOCOLAT", "FROMAGE", "BAGUETTE", "CUISSON",
    "EPICERIE", "FOURCHETTE", "CASSEROLE", "RECETTE", "SALADE", "BOISSON", "EPLUCHER", "FOOTBALL", "BASKET", "COURSE",
    "NATATION", "CYCLISME", "TENNIS", "JUDO", "SAUT", "MEDAILLE", "ENTRAINEUR"
];

// Générer mot aléatoire avec une fonction
function motAleatoire() {
    const index = Math.floor(Math.random() * mots.length);
    return mots[index];
};

// Initialisation du mot à trouver et tableau des lettres trouvées
let motATrouver = motAleatoire();
let lettresTrouvees = [];
let mauvaisesLettres = [];

//  Fonction pour afficher le mot à deviner en remplaçant les lettres non trouvées par des underscores
function afficherMot() {
    listeMot.innerHTML = "";

    for (let lettre of motATrouver) {
        const li = document.createElement("li");
        li.classList.add("lettre");

        if (lettresTrouvees.includes(lettre)) {
                li.textContent = lettre;
            } else {
                li.textContent = "_";
        }

        listeMot.appendChild(li);
    }
};

function afficherMauvaisesLettres() {
    const maxErreurs = 8;
    zoneMauvaisesLettres.textContent = mauvaisesLettres.join(" ");
}

function afficherPopupVictoire(mot) {
  messageVictoire.textContent = "Bravo ! Tu as trouvé le mot : " + mot;
  popupVictoire.classList.remove("hidden");
}

function nouvellePartie() {

    // Rénitialiser les variables
    lettresTrouvees = [];
    mauvaisesLettres = [];
    motATrouver = motAleatoire();
    afficherMot();

    // Réactiver le clavier
    const touches = document.querySelectorAll("#clavier button");
    touches.forEach(touche => {
        touche.disabled = false;
        touche.classList.remove("touche-utilisee");
    });

    // Cacher la popup
    popupVictoire.classList.add("hidden")

    afficherMauvaisesLettres();

}

// Clic sur rejouer
btnRejouer.addEventListener("click", nouvellePartie);

// Afficher mot au départ
afficherMot();

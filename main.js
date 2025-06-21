// Les Variables
const clavier = document.querySelector("#clavier");
const listeMot = document.querySelector("#mot");
const message = document.querySelector("#message-final");


// Clavier virtuel 
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
            message.textContent = "Bravo ! Tu as trouvé le mot : " + motATrouver;
        }
        else {
            // Mauvaise lettre
            console.log("Lettre mauvaise : " + lettreCliquee);
            // Ajout du pendu
        }
    }
});

    clavier.appendChild(bouton);
});


// Tableau des mots
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

// Générer mot aléatoire
function motAleatoire() {
    const index = Math.floor(Math.random() * mots.length);
    return mots[index];
};

// Afficher mot
let motATrouver = motAleatoire();
let lettresTrouvees = [];

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

// Afficher mot au départ
afficherMot();

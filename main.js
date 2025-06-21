// Clavier virtuel 
const lettre = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
    "Y", "Z"
];
const clavier = document.querySelector("#clavier");

// Créer et faire apparaitre le clavier
lettre.forEach(lettre => {
    const bouton = document.createElement("button");
    bouton.textContent= lettre;
    bouton.classList.add("touche");
    clavier.appendChild(bouton);
});
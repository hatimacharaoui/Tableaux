const prompt = require("prompt-sync")();

let tableau = [2];
for (let i = 0; i < 3; i++) {
  tableau[i] = prompt("entrer une chaine de caractere: ");
}
let recherche = prompt("entrer la chaine a rechercher: ");
for (let i = 0; i < 3; i++) {
  if (recherche == tableau[i]) {
    console.log("la chaine " + recherche + " a été trouvée a la position " + i);
  }
}

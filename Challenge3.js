const prompt = require("prompt-sync")();

let tableau = [7];
for (let i = 0; i <= 7; i++) {
  tableau[i] = prompt("Entrer un nombre positif: ");
}
let pos = 0;
let nombre = prompt("Entrer un nombre a rechercher: ");
for (let i = 0; i <= 7; i++) {
  if (nombre == tableau[i]) {
    pos = i;
  }
}
console.log("le nombre " + nombre + " est dans la position: " + pos);

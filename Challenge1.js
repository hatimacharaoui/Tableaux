const prompt = require("prompt-sync")();

let tableau = [4];
for (let i = 0; i <= 4; i++) {
  tableau[i] = prompt("Entrer un nombre positif: ");
}
tableau.reverse();
console.log(tableau);

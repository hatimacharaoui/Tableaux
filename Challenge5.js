const prompt = require("prompt-sync")();

let tab = [12, 34, 45, 56, 43, 21];

let grand = tab[0];
let petit = tab[0];

for (let i = 1; i < tab.length; i++) {
  if (tab[i] > grand) {
    grand = tab[i];
  }
  if (tab[i] < petit) {
    petit = tab[i];
  }
}

console.log("Le plus grand nombre : " + grand);
console.log("Le plus petit nombre : " + petit);

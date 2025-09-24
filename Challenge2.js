const prompt = require("prompt-sync")();

let som = 0;
let tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) {
  som = som + tableau[i];
}
let moy = som / 10;
console.log("la somme est : " + som);
console.log("la moyenne est : " + moy);

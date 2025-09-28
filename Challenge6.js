
const prompt = require("prompt-sync")();


let tab = [12, 34, 45, 56, 43, 21]

for (let i = 0; i < tab.length; i++) {
  console.log(tab[i] + " carrés = " + (tab[i] * tab[i]));
}
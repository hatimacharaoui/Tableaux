const prompt = require("prompt-sync")();

function EntrerNombre1() {
  let nombre1;
  do {
    nombre1 = +prompt("Entrer le premier nombre: ");
  } while (nombre1 <= 0);
  return nombre1;
}
function EntrerNombre2() {
  let nombre2;
  do {
    nombre2 = +prompt("Entrer le deuxieme nombre: ");
  } while (nombre2 <= 0);
  return nombre2;
}

function MenuPrincipal() {
  let choix = 1;
  do {
    console.log("*******  Choisir une opération:  *******");
    console.log("Pour l'Addition entrer (1): ");
    console.log("Pour la Soustraction entrer (2): ");
    console.log("Pour la Multiplication entrer (3): ");
    console.log("Pour la Division entrer (4): ");
    console.log("Pour la Puissance entrer (5): ");
    console.log("Pour le Racine carrée entrer (6): ");
    console.log("Pour le Factorielle entrer (7): ");

    choix = prompt("Opération: ");
  } while (choix < 1 || choix > 7);
  return choix;
}

function Addition(nbr1, nb2) {
  let addition = nbr1 + nb2;
  return addition;
}
function Soustraction(nbr1, nb2) {
  let soustraction = nbr1 - nb2;
  return soustraction;
}
function Multiplication(nbr1, nb2) {
  let multiplication = nbr1 * nb2;
  return multiplication;
}
function Division(nbr1, nb2) {
  let division = nbr1 / nb2;
  return division;
}
function Puissance(nbr1, nb2) {
  let puissance = Math.pow(nbr1, nb2);
  return puissance;
}
function RacineCarrée(nbr1) {
  let racine = Math.sqrt(nbr1);
  return racine;
}
function Factorielle(nbr1) {
  let resultat = 1;
  for (let i = 1; i <= nbr1; i++) {
    resultat *= i;
    return resultat;
  }
}
function calculer() {
  let nb1 = EntrerNombre1();
  let nbr2 = EntrerNombre2();
  let choix = MenuPrincipal();
  let resultat = 0;
  if (choix == 1) {
    resultat = Addition(nb1, nbr2);
  } else if (choix == 2) {
    resultat = Soustraction(nb1, nbr2);
  } else if (choix == 3) {
    resultat = Multiplication(nb1, nbr2);
  } else if (choix == 4) {
    resultat = Division(nb1, nbr2);
  } else if (choix == 5) {
    resultat = Puissance(nb1, nbr2);
  } else if (choix == 6) {
    resultat = RacineCarrée(nb1);
  } else if (choix == 7) {
    resultat = Factorielle(nb1);
  }
  return resultat;
}

let table = [];
let repeter;
let affichage;
do {
  table.push(calculer());
  repeter = prompt("Voulez vous continuer les calcules ou Quitter? Oui/Non :");
} while (repeter == "oui");

affichage = prompt("Voulez vous afficher l'historique des calculs? Oui/Non :");
if (affichage == "oui") {
  console.log(table);
}

var variable1 = 5;
var variable2 = 10;
var somme = variable1 + variable2;
alert("La somme des variables est : " + somme);
var age = prompt("Veuillez entrer votre âge :");
if (age >= 18) {
  alert("Vous êtes majeur.");
} else {
  alert("Vous êtes mineur.");
}

var age = prompt("Veuillez entrer votre âge :");
if (age >= 18) {
  alert("Vous êtes majeur.");
} else {
  alert("Vous êtes mineur.");
}

var annee = prompt("Veuillez entrer une annee :");
if ((annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0) {
  alert("L'annee est bissextile.");
} else {
  alert("L'annee n'est pas bissextile.");
}

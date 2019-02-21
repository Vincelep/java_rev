
// 2.2.1 Calculs rapides

n = prompt("De quel nombre veut tu calculer la factorielle ?");

function factorielle(n)
{
  if (n<0) {
    alert ("Veuillez Saisir Un Entier Positif ou null");
    return "### Erreur ###";
  }
  else {
    if (n == 0) {
      return 1;
    }
    else {
      return n * factorielle (n-1);
    }
  }
}
console.log(`Le résultat est : ${factorielle(n)}`);


function afficherPointeSapin(hauteur) {
  for (let i = 0; i < hauteur; i++) {
    console.log(
      " ".repeat(hauteur - i - 1) +
        "/" +
        "*".repeat(i + 1) +
        "|" +
        "*".repeat(i + 1) +
        "\\"
    );
  }
}

afficherPointeSapin("+" + 4);

// 1.1 Une ligne d'étoiles :
function afficherEtoiles(n) {
  console.log("*".repeat(n));
}

afficherEtoiles(2);
afficherEtoiles(5);

// 1.2 Carré d’étoiles
// Nous allons maintenant définir une nouvelle fonction afficherRectangle(hauteur, largeur)

function afficherRectangle(hauteur, largeur) {
  console.log("*".repeat(hauteur) + "\n" + "*".repeat(largeur));
}

afficherRectangle(5, 5);
afficherRectangle(5, 5);

// 1.3 Triangle d’étoiles
// Il semblerait donc que nous pouvons nous inspirer du comportement de notre précédente fonction pour en définir une nouvelle afficherTriangleDroite(n)

// ℹ️ ’Droite’ parce que ce triangle servira à la partie droite du sapin

function afficherTriangleDroite(n) {
  for (let i = 0; i < n; i++) {
    console.log(
      " ".repeat(n - i - 1) + " ".repeat(i + 1) + "*".repeat(i + 1) + "\\"
    );
  }
}

afficherTriangleDroite(5);

// 1.4 Seconde moitié et espaces
// Nous pouvons maintenant faire la seconde moitié de la pointe du sapin en faisant le symétrique !

function afficherTriangleGauche(n) {
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(n - i - 1) + "/" + "*".repeat(i + 1));
  }
}

afficherTriangleGauche(5);

// 1.5 Assemblage et décorations
// Dernière étape, nous allons combiner le travail effectué sur afficherTriangleGauche() & afficherTriangleDroite() pour réaliser une nouvelle fonction afficherPointeSapin(), en ajoutant le tronc | et l’étoile + au milieu ! (cf l’affichage plus haut, en début d’exercice)
// function afficherSapin() {
//   afficherTriangleGauche(5);
//   afficherTriangleDroite(5);
// }

// afficherSapin();

//Détails de l’étape 2
// Essayons d’appeler notre fonction afficherPointeSapin plusieurs fois de suite:

afficherPointeSapin(1);
afficherPointeSapin(2);
afficherPointeSapin(3);

// 2.1 Afficher un étage
// Changeons maintenant notre function afficherPointeSapin pour afficher n’importe quel étage du sapin ! Elle se nommera afficherEtage et prendra les paramètres suivant:

// function afficherEtage(hauteur, pointe_offset) {
//   // comment sauter les premières lignes d'étoiles pour ne commencer qu'à la ligne numero 'pointe_offset' ?
//   afficherPointeSapin();
// }

// afficherEtage(3, 0); // les 3 premières lignes
// afficherEtage(3, 1); // affiche à partir de la deuxième ligne, et continue sur 3 lignes
// afficherEtage(3, 2); // affiche à partie de la troisième lige, et continue sur 3 lignes

// 2.2 Aligner les étages
// Parce que la partie à aligner arrive en premier (les étages les plus hauts du sapin), il nous faut savoir en avance quel espacement sera nécessaire pour cet alignement. À partir de l’étape précédente, on peut voir qu’il aurait fallu 2 espacements au premier étage, et 1 seul au deuxième. Nous allons donc modifier notre fonction afficherEtage pour ajouter cet espacement:

function afficherEtage(hauteur, pointe_offset, espacement) {
  // afficher 'espacement' fois un espace ' '
  afficherPointeSapin(hauteur);
  console.log(" ".repeat(espacement));
  // [ ..reste de la fonction]
}

afficherEtage(3, 0, 3);
afficherEtage(3, 1, 2);
afficherEtage(3, 2, 1);
afficherEtage(3, 3, 0);

// Etape 3: Sapin de salon
// Il ne nous reste plus qu’à rendre notre sapin crédible pour le mettre dans notre salon (ou celui de nos ami.e.s !).

// Pour cela, nous allons tout d’abord lui rajouter un tronc puis des décorations o et + :
function sapinDeSalon(hauteur, espacement) {
  afficherPointeSapin(hauteur);
  console.log(" ".repeat(espacement));
  console.log("#".repeat(3));
  console.log("#".repeat(3));
  console.log("#".repeat(3));
}

sapinDeSalon(3, 3);

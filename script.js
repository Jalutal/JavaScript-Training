/* ####### STRUCTURE DU JEU ####### */
const listeMots = ["cachalot", "pétunia", "serviette"];
const listePhrases = ["pas de panique !", "la vie, l'univers et le reste", "merci pour le poisson"];
let score = 0;
let enterWord = 0;
// let enterWord = prompt("Entrez le mot : " + listeMots[0]);

// if (enterWord === listeMots[0]) {
//     console.log("Le mot est correct")
//     score += 1;
//     console.log("Votre score est maintenant de : " + score);
// } else {
//     console.log("Le mot est incorrect")
// }


// enterWord = prompt("Entrez le mot : " + listeMots[1]);
// if (enterWord === listeMots[1]) {
//     console.log("Le mot est correct")
//     score += 1;
//     console.log("Votre score est maintenant de : " + score);
// } else {
//     console.log("Le mot est incorrect")
//     console.log("Votre score est toujours de : " + score)
// }

// enterWord = prompt("Entrez le mot : " + listeMots[2]);
// if (enterWord === listeMots[2]) {
//     console.log("Le mot est correct")
//     score += 1;
//     console.log("Votre score est maintenant de : " + score);
// } else {
//     console.log("Le mot est incorrect")
//     console.log("Votre score est toujours de : " + score)
// }

let choice = 0;
choice = prompt("Choisissez vous la liste de mots ou la liste de phrases ? Ecrivez mots ou phrases");
let i = 0;
while (choice !== "mots" && choice !== "phrases") {
    console.log("Choisissez mots ou phrases");
    i++;
}
if (choice === "mots") {
    for (i = 0; i < listeMots.length; i ++) {
        enterWord = prompt("Ecrivez le mot : " + listeMots[i]);
        if (enterWord === listeMots[i]) {
            console.log("Parfait !");
            score += 1;
            console.log("Votre score est maintenant de : " + score);
        } else {
            console.log("Ca va pas...");
            console.log("Votre score est toujours de : " + score)
        }
    }
    console.log("Votre score final est de : " + score + " sur " + listeMots.length + " possibilités. Bravo !");
}

if (choice === "phrases") {
    for (i = 0; i < listePhrases.length; i ++) {
        enterWord = prompt("Ecrivez la phrase : " + listePhrases[i]);
        if (enterWord === listePhrases[i]) {
            console.log("Parfait !");
            score += 1;
            console.log("Votre score est maintenant de : " + score);
        } else {
            console.log("Ca va pas...");
            console.log("Votre score est toujours de : " + score)
        }
    }   
    console.log("Votre score final est de : " + score + " sur " + listePhrases.length + " possibilités. Bravo !"); 
}


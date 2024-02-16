/* ####### STRUCTURE DU JEU ####### */
const listeMots = ["Cachalot", "Pétunia", "Serviette"];
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

console.log("Votre score final est de : " + score + ". Bravo !");
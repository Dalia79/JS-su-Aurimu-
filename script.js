const biudzetas = Number(prompt("koks tavo vardas"));
const prekesKaina = 1000;

if (biudzetas > prekesKaina) {
    alert("galima pirkti");
} else if (biudzetas === prekesKaina) {
    alert("reikės susispausti dirzus");
} else {
    alert("neiperkama");
}

console.log ("programa baigta");

// PIRMA UZDUOTIS
// Deklaruoti savo biudzeto kaina
// Deklaruoti produkto kaina
// Jiegu turite daugiau pinigu nei prekes kaina -alert'inkit, kad turit pakankamai
// Jeigu ne, alert'inkit priesinga zinute.

// ANTRA UZDUOTIS
// Papildyti salyga:
// Jeigu yra lygiai tiek biudzete, kiek kainuoja preke - alet'inkit"reikes susipausti dirzus"

// TRECIA UZDUOTIS
// Pakeisti koda:
// biudzetas gali buti irasytas
// Crea un oggetto chiamato prodotto con le seguenti proprietà:
// nome: "Laptop"
// prezzo: 1200
// disponibile: true
// codice: "LP-XYZ-789"
// Elimina la proprietà codice dall'oggetto prodotto.
// Stampa l'oggetto prodotto in console per verificare che la proprietà codice non ci sia più.


const prodotto = {
    nome: "Laptop",
    prezzo: 1200,
    disponibile: true,
    codice: "LP-XYZ-789"
}

delete prodotto.codice
console.log(prodotto)
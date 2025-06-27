// Continuiamo con l'array prodotti dell'esercizio precedente.

// Aggiungi un nuovo prodotto alla fine dell'array prodotti: "Monitor", 300.00, true.

// Rimuovi il primo prodotto dall'array prodotti.

// Stampa l'intero array prodotti per verificare le modifiche.

const prodotti = [
    {
        prodotto: "Laptop",
        prezzo: 1200.00,
        disponibile: true
    },
    {
        prodotto: "Mouse",
        prezzo: 25.50,
        disponibile: true

    },
    {
        prodotto: "Tastiera",
        prezzo: 75.00,
        disponibile: false
    }
]

const nuovoProdotto =
{
    prodotto: "Monitor",
    prezzo: 300.00,
    disponibile: true
}


const aggProdotto = prodotti.push(nuovoProdotto)

console.log(prodotti)

const rimProdotto = prodotti.shift()
console.log(prodotti)
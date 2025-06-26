// Aggiungere nuove proprietà e modificare quelle esistenti in un oggetto.

// Prendi l'oggetto libro creato nell'Esercizio 1.
// Aggiungi una nuova proprietà chiamata genere (stringa, es: "Fantasy") e assegnala un valore.
// Modifica il valore di annoPubblicazione a un anno diverso (es: 1965).
// Stampa l'intero oggetto libro in console per vedere le modifiche.

const libro = {
    titolo: "La casa della morte",
    autore: "R. L. Stine",
    annoPubblicazione: "1997"
}

libro.genere = "Horror"
libro.annoPubblicazione = "1994"

console.log(libro);


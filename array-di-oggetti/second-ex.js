// Modificare le proprietà degli oggetti
// Per ogni libro nel seguente array, aggiungi una nuova proprietà disponibile impostata su true.



const libri = [
    { titolo: 'Il Signore degli Anelli', autore: 'J.R.R. Tolkien', anno: 1954 },
    { titolo: '1984', autore: 'George Orwell', anno: 1949 },
    { titolo: 'Orgoglio e Pregiudizio', autore: 'Jane Austen', anno: 1813 }
];

let nuovaProprietà = "disponibile";
let nuovoValore = "true";

libri.forEach(oggetto => oggetto[nuovaProprietà] = nuovoValore)
console.log(libri)
// Crea un array chiamato citta con i nomi di alcune città: ["Roma", "Milano", "Napoli", "Firenze", "Bologna"].
// Chiedi all'utente tramite prompt() di inserire il nome di una città.
// Usa un metodo degli array (o un ciclo for) per verificare se la città inserita dall'utente è presente nell'array.
// Stampa un messaggio appropriato: "La città [nome città] è presente nell'array." oppure "La città [nome città] non è presente nell'array.".

const citta = ["Roma", "Milano", "Napoli", "Firenze", "Bologna"];

const nameCity = prompt("inserisci il nome di una città");

if (citta.includes(nameCity)) {
    console.log(`La città "${nameCity}" è presente nell'array.`);
} else {
    console.log(`La città "${nameCity}" non è presente nell'array.`);
}

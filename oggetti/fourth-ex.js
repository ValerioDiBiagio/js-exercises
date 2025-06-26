// Crea un oggetto chiamato studente con le seguenti proprietà:
// nome (stringa, es: "Anna")
// cognome (stringa, es: "Verdi")
// voti (un oggetto annidato con proprietà per diverse materie, es: { matematica: 8, storia: 7, inglese: 9 })
// Stampa in console il nome e cognome dello studente.
// Stampa in console il voto di matematica dello studente.

const studente = {
    nome: "Luca",
    cognome: "Rossi",
    voti: {
        matematica: 8,
        storia: 7,
        inglese: 9
    }
}

console.log(`${studente.nome} ${studente.cognome}`);
console.log(`Voto matematica: ${studente.voti.matematica}`);
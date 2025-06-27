// Dichiara un array chiamato utenti con almeno 4 oggetti utente a tua scelta. Assicurati che alcuni utenti abbiano età diverse.

// Itera sull'array utenti e stampa il nome e l'eta di ogni utente utilizzando un ciclo for...of o forEach.

// Crea un nuovo array chiamato utentiMaggiorenni che contenga solo gli utenti con eta maggiore o uguale a 18. Stampa questo nuovo array.

const utenti = [
    {
        id: 1,
        nome: "Marco",
        eta: 15
    },
    {
        id: 2,
        nome: "Luca",
        eta: 18
    },
    {
        id: 3,
        nome: "Mattia",
        eta: 20
    },
    {
        id: 4,
        nome: "Stefano",
        eta: 17
    },
    {
        id: 5,
        nome: "Franco",
        eta: 22
    }
]

utenti.forEach(utente => console.log(utente.nome, utente.eta));

const utentiMaggiorenni = utenti.filter(utente => utente.eta >= 18);
console.log(utentiMaggiorenni)

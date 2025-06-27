//  Lavoriamo ancora con l'array utenti dell'esercizio precedente.

// Trova l'utente con un id specifico (es. id: 2). Una volta trovato, modifica la sua età a 30 (o a un nuovo valore a tua scelta). Stampa l'utente modificato.

// Cerca un utente per nome (es. "Mario"). Se lo trovi, stampa tutte le sue informazioni. Se non lo trovi, stampa un messaggio appropriato.

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

const utenteDue = utenti.find(utente => utente.id === 2);
console.log(utenteDue)

utenteDue.eta = 30;
console.log(utenteDue)


const nomeUtente = "Franco"
const utenteCercato = utenti.find(utente => utente.nome === nomeUtente)

if (utenteCercato) {
    console.log(`l'utente ${nomeUtente} è stato trovato`, utenteCercato)
} else {
    console.log(`l'utente ${nomeUtente} non è stato trovato`)
}



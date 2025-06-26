//  Aggiungere una funzione (metodo) a un oggetto.

// Crea un oggetto chiamato gatto con le seguenti proprietà:
// nome (stringa, es: "Whiskers")
// età (numero, es: 3)
// Aggiungi un metodo chiamato miagola a questo oggetto.
//  Quando viene chiamato, questo metodo dovrebbe stampare in console: "Meow! Il mio nome è [nome del gatto]."
// Chiama il metodo miagola dell'oggetto gatto.

const gatto = {
    nome: "Luna",
    eta: 10,
    miagola: function () {
        console.log(`Meow! Il mio nome è ${gatto.nome}`);
    }
}

gatto.miagola();
// Hai un array di numeri numeri = [7, 3, 10, 5, 12, 8]. 
// Utilizza il metodo find() per trovare il primo numero pari presente nell'array. 
// Stampa il numero trovato o un messaggio se nessun numero pari è stato trovato

const numeri = [7, 3, 10, 5, 12, 8];

const numeroPari = numeri.find(numero => numero % 2 === 0)

if (numeroPari !== undefined) {
    console.log(`il primo numero pari è ${numeroPari}`)

} else {
    console.log(`nessun numero pari è stato trovato`)
}


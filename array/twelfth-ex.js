// Hai un array di prezzi prezzi = [10.50, 20.00, 5.75, 15.25]. 
// Utilizza il metodo reduce() per calcolare la somma totale di tutti i prezzi nell'array. Stampa il risultato.

const prezzi = [10.50, 20.00, 5.75, 15.25];

const prezzoTot = prezzi.reduce((totale, quantita) => totale += quantita)
console.log(prezzoTot)
// Hai un array di prodotti. Ogni prodotto è un oggetto con:

// nome

// prezzo

// disponibile

// Trova solo i prodotti disponibili
// Calcola il prezzo totale di questi prodotti.
// Stampa il totale con un messaggio

// const prodotti = [{
//     nome: "Pc",
//     prezzo: 1245,
//     disponibile: true
// },
// {
//     nome: "Penna",
//     prezzo: 1,
//     disponibile: true
// },
// {
//     nome: "Monitor",
//     prezzo: 245,
//     disponibile: false
// },
// {
//     nome: "Libro",
//     prezzo: 12,
//     disponibile: true
// },
// ]

// let prodDisp = prodotti.filter(prodotto => prodotto.disponibile === true)
// console.log(prodDisp);

// const prezzoTot = prodDisp.reduce((totale, prodotti) => totale + prodotti.prezzo, 0);
// console.log(`il prezzo totale dei prodotti disponibili è: ${prezzoTot}`);
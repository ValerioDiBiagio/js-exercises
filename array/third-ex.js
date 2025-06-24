// Crea un array chiamato numeri con i seguenti valori: [10, 25, 5, 30, 15].
// Usa un ciclo for per scorrere l'array e stampare ogni numero nella console.
// Usa un ciclo for per calcolare la somma di tutti i numeri presenti nell'array numeri. Stampa la somma finale.
// Usa un ciclo for per trovare e stampare il numero più grande nell'array numeri.

const numeri = [10, 25, 5, 30, 15];

for (let i = 0; i < numeri.length; i++) {
    console.log(numeri[i])
}

let sum = 0;

for (let i = 0; i < numeri.length; i++) {
    sum += numeri[i]

}
console.log(sum)


let maxNum = numeri[0];

for (let i = 1; i < numeri.length; i++) {

    if (numeri[i] > maxNum) {
        maxNum = numeri[i]
    }
}
console.log(maxNum)
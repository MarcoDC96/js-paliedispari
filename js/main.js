
/*
//Chiediamo all'utente di inserire una parola
let inserisciParola=prompt("Inserisci una parola");
//creiamo una variabile e la poniamo uguale alla nostra funzione al cui interno inseriamo la parola dell'utente
let parolaUtenteInversa = palindromo(inserisciParola);
//Creiamo un if dove eguagliamo la parola inserita dall'utente alla variabile associata alla funzione, in modo tale che capiamo se la parola risulta palindroma.
if(inserisciParola==parolaUtenteInversa){
    console.log(inserisciParola + " è palindroma")
}
//Altrimenti non sarà palindroma
else{
    console.log(inserisciParola + " non è palindroma")
}

//Creiamo una funzione che riceverà una parola dall'utente e verrà invertita
function palindromo(parolaUtente){
//split trasforma la parola in un array di caratteri, reverse inverte l'array e join lo riunisce
    let parolaUtenteInversa = parolaUtente.split('').reverse().join('');
    return parolaUtenteInversa;

}
*/
//Chiediamo all'utente di scegliere tra pari e dispari tramite prompt
let pariDispari=prompt("Scegli tra pari e dispari");
console.log(pariDispari);
//Chiediamo all'utente di scegliere un numero
let number=prompt("Scegli un numero da 1 a 5");
//Trasformiamo in numero intero
number = parseInt(number);
console.log(number)
//Riprendiamo la funzione del numero random e mettiamo che il numero massimo che deve creare è il numero 5
let randomNumber = generateRandomNumberZeroToMaxNumber(5)
//Creiamo la variabile somma composta dal numero random che otterremo + il numero inserito dall'utente
let somma = number + randomNumber;
console.log(somma);
//Andiamo a creare una variabile associata alla funzione dove all'interno mettiamo il risultato della somma e cosa sceglie l'utente tra pari e dispari
let risultato = sumAndOddEven(somma, pariDispari);


//Funzione che crea un numero random con un tetto massimo scelto dall utente
function generateRandomNumberZeroToMaxNumber(maxNumber) {
    let randomNumber = Math.floor(Math.random() * (maxNumber + 1));
    return randomNumber;
}
//Funzione che indica tramite un if se il numero è pari o dispari e le varie combinazioni per vedere se l'utente vince o perde. 
function sumAndOddEven(numero, pariDispari1){
if(numero%2==0 && pariDispari1=="pari"){
console.log("Hai vinto");
}

else if(numero%2==0 && pariDispari1=="dispari"){
console.log("Hai perso");
}

else if(numero%2!=0 && pariDispari1=="pari"){
console.log("Hai perso");
}
else if(numero%2!=0 && pariDispari1=="dispari"){
    console.log("Hai vinto");
}
else{
    console.log("Ritenta");
}
}
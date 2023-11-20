
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



// console.log("Ciao!");

// let numero = 5;
// console.log(numero);

// let nome = "Ade Os";
// console.log(nome);

// let array = [1, 2, 3, 4, 5, 5];
// console.log(array);
// Un array è un oggetto che contiene diversi valori, racchiusi in delle quadre e divise dalla virgola.

// Una variabile è una chiave a cui assegnamo un valore, che può essere una stringa, un numero, un boolean, un array o un oggetto;


// let clessidra = { materiale: "vetro", colore: "trasrparente", misuraTempo: "sabbia" };
// //questa è la sintassi di un oggetto, un valore che rappresenta qualcosa di reale e che contiene informazioni su come è fatta. Per accedere a una info nello specifico ci basta aggiungere al nome della variabile l'info che ci interessa, come qui sotto:

// clessidra.materiale;
// console.log(clessidra.materiale);
// /*---------*/

// // let bottone = document.querySelector("button");
// // console.log(bottone);

// // bottone.onclick = function () {
// //     console.log("hai premuto!");
// // }

// //-------- PROVA GESTIONE DEGLI EVENTI DELLA VARIABILE TRAMITE UN EVENTLISTENER
// let segnala = document.getElementById("segnala");
// console.log(segnala) //controlla cosa ritorna la variabile su console

// segnala.addEventListener("click", function () {
//     console.log("hai premuto su segnala!");
// })

// segnala.addEventListener("dblclick", function () {
//     alert("hai effettuato un doppio click su segnala!");
// })

// //------- PROVA EVENTI DIRETTAMENTE SULLA VARIABILE
// let invia = document.getElementById("invia");
// console.log(invia);

// invia.onclick = function () {
//     console.log("hai premuto su invia");
// }
// invia.dblclick = function () {
//     alert("hai fatto doppio click su invia");

// }

// //prova conta la lunghezza di un testo
// let contaTesto = document.getElementById("contaTesto");
// console.log(contaTesto);
// console.log(contaTesto.innerHTML.length)

//ho come trovare la lunghezza del testo, ma non conta il contenuto del box

/* --------------------- CODICE JS  EFFETTIVO --------------------*/

// yasmin bellissima come sua mamma suo papa invece e aaaantipatico iiiiiiiidnaaaaan))98


//LISTA VARIABILI
let boxTesto = document.getElementById("boxTesto");
console.log(boxTesto); //check ok

let boxCharacters = document.getElementById("boxCharacters");
console.log(boxCharacters); //ok
let boxWords = document.getElementById("boxWords");
console.log(boxWords); //ok
let boxPhrases = document.getElementById("boxPhrases");
console.log(boxPhrases); //ok

//creiamo un array che ci riporta la lista delle parole, da qui prendiamo poi il numero di quest'ultime
let wordList = boxTesto.value.trim().split();


//GESTIONE EVENTI
boxTesto.addEventListener("input", function () {
    let lettere = boxTesto.value.replace(/\s+/g, '').length; //Ok! :)
    let parole = boxTesto.value.split(" ").length;
    //let frasi = boxTesto.value.match(/[^.!?]+[.!?]+/g).length;
    //trovare il modo che non restituisca errori nella console, match restituisce null se non arriva a 1, lenght non legge null percio all'inizio restituira sempre un errore su console, forse con if si puo ovviare alla cosa

    // if (frasi === null) {
    //     frasi.value == 0
    // } else {
    //     //run code
    // }

    //CONTROLLIAMO I VALORI CHE RITORNANO
    console.log(boxTesto.value.length);
    console.log(boxTesto.value.trim().length);

    console.log(lettere);
    console.log(parole);
    //console.log(frasi);

    //METTIAMO IL NUMERO ALL'INTERNO DEL BOX CHE VEDIAMO NEL SITO
    boxCharacters.innerHTML = lettere;
    boxWords.innerHTML = parole;
    //boxPhrases.innerHTML = frasi;

})
//differenza tra innerHTML e value; value viene usato per i form (da vedere successivamente perche), mentre innerHTML per gli altri elementi (p, ecc).

//Altra nota importante, tutto cio` che avviene all'interno della funzione non viene letto da 'fuori', percio` non possiamo mettere il valore del contatore fuori dalla funzione che di fatto si segna le lettere che conta.

//split() tiene conto appena rileva il criterio indicato, quindi se si mette come criterio un ! conta 
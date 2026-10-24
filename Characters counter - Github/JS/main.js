//LISTA VARIABILI
let boxTesto = document.getElementById("boxTesto");
console.log(boxTesto); //check ok

let boxCharacters = document.getElementById("boxCharacters");
console.log(boxCharacters); //ok
let boxWords = document.getElementById("boxWords");
console.log(boxWords); //ok
let boxPhrases = document.getElementById("boxPhrases");
console.log(boxPhrases); //ok


//GESTIONE EVENTI
boxTesto.addEventListener("input", function () {
    let lettere = boxTesto.value.replace(/\s+/g, '').length; //Ok! :)
    let parole;// = boxTesto.value.split(" ").length - 1; //Ok! :)
    let frasi; //Ok! :)
    //trovare il modo che non restituisca errori nella console, match restituisce null se non arriva a 1, length peró non legge null perció all'inizio restituirá sempre un errore su console, forse con if si puo ovviare alla cosa e gestire queste due  casistiche
    if (boxTesto.value.match(/[^.!?]+[.!?]+/g) == null) {
        console.log('frasi non cé ne sono');
        frasi = 0;
    } else {
        frasi = boxTesto.value.match(/[^.!?]+[.!?]+/g).length;
    }

    //considera l'ultima parola di una frase come tale tramite un altro criterio; qui infatti non troveremo " "
    parole = boxTesto.value.split('');
    console.log(parole);
    /*
        if () {
            console.log('abbiamo uno spazio ma non parole');
            parole = 0;
        } else {
            parole = boxTesto.value.split(" ").length;
        }*/

    //CONTROLLIAMO I VALORI CHE RITORNANO
    console.log(lettere);
    console.log(parole);
    console.log(frasi);

    //METTIAMO IL NUMERO ALL'INTERNO DEL BOX CHE VEDIAMO NEL SITO
    boxCharacters.innerHTML = lettere;
    boxWords.innerHTML = parole;
    boxPhrases.innerHTML = frasi;
})

   //GESTIONE EVENTI SPAZI E LIMIT NEL TESTO
    //variabili
    let excludeBox = document.getElementById("exclude");
    console.log(excludeBox);
    let limitBox = document.getElementById("setLimit");
    console.log(limitBox);

    excludeBox.addEventListener("click", function () {
        console.log("hai premuto sul quadratino!");

        if (excludeBox.value === true) {
            console.log("il tasto é attivo")
            //boxTesto.value.replace(/\s+/g, '') //restuiamo il testo senza spazi
        } else {
            console.log("il tasto non é attivo")
            //non cambia nulla
        }
    })

    //il value é fissato yes nel html, peró dobbiamo considerarlo come un valore booleano con quindi due opzioni intercambiabili, true e false; capire come fare in modo che ritorni in uno dei due e agire di conseguenza nella gestione dell'evento



/*----------  NOTE  ----------*/
//differenza tra innerHTML e value; value viene usato per i form (da vedere successivamente perche), mentre innerHTML per gli altri elementi (p, ecc).

//Altra nota importante, tutto cio` che avviene all'interno della funzione non viene letto da 'fuori', percio` non possiamo mettere il valore del contatore fuori dalla funzione perche l'evento che gestisce la conta é contenuto all'interno della funzione

//split() tiene il conto appena rileva il criterio indicato, quindi se si mette come criterio un ! conta quanti elementi sono divisi da ! e non il singolo carattere; il counter parte da 1

//match() confronta la stringa con la regex e ritorna null se non ci sono elementi previsti dalla regex; si potrebbe utilizzare al posto di split()anche per quanto riguarda il rilevamento delle parole.
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
    //la regex sul metodo match mi permette di individuare le punteggiature a fine frase, e cosi possiamo conteggiare quando abbiamo una frase :)

    //considera l'ultima parola di una frase come tale tramite un altro criterio; qui infatti non troveremo " "
    let words = boxTesto.value.split(' ');
    parole = words.length;

    console.log(words.length);
    console.log(parole);


    //GESTIONE COUNTER PAROLE -- DA VISIONARE
    boxTesto.addEventListener("input", function () {
        if (words === '') {
            parole = 0;
        } else {
            parole = words.length;
        }
    })
    //array rimane con [' '] perciò la proprietà length darà sempre 1, nel if cerchiamo di gestire questa condizione in cui se appare riportiamo come valore 0, ma per qualche motivo non va '-'




    //CONTROLLIAMO I VALORI CHE RITORNANO
    console.log(lettere);
    console.log(parole);
    console.log(frasi);

    //METTIAMO IL NUMERO ALL'INTERNO DEL BOX CHE VEDIAMO NEL SITO
    boxCharacters.innerHTML = lettere; //quello che risulta nel box tot caratteri
    boxWords.innerHTML = parole; //quello che risulta nel box tot parole
    boxPhrases.innerHTML = frasi; //box frasi
})

//GESTIONE EVENTI SPAZI E LIMITI NEL TESTO
//variabili
let excludeBox = document.getElementById("exclude");
console.log(excludeBox);
let limitBox = document.getElementById("setLimit");
console.log(limitBox);

let testoOriginale = ""; //lasciamo il campo vuoto, se mettiamo boxTesto.value ora viene letto prima che il campo sia compilato questo perche' se messo qui viene letto quando la pagina si carica;

excludeBox.addEventListener("change", function () {
    let testoModificato = boxTesto.value.replace(/\s+/g, ''); //assegnamo a questa variabile il testo modificato con la regex perché quest'ultima non puó essere inserita direttamente nel boxTesto tramite replace, questo perché replace() non ha accesso al DOM; mettiamo quindi il suo valore dentro una variabie e la iniettiamo a boxTesto! :)

    if (excludeBox.checked) {
        console.log("opzione attiva");
        console.log(testoModificato);
        testoOriginale = boxTesto.value;
        boxTesto.value = boxTesto.value.replace(/\s+/g, '');
    } else {
        //run normal code
        console.log("opzione disattiva");
        console.log(testoOriginale);
        boxTesto.value = testoOriginale;
    }
});




/*----------  NOTE  ----------*/
//differenza tra innerHTML e value; value viene usato per i form (da vedere successivamente perche), mentre innerHTML per gli altri elementi (p, ecc).

//Altra nota importante, tutto cio` che avviene all'interno della funzione non viene letto da 'fuori', percio` non possiamo mettere il valore del contatore fuori dalla funzione perche l'evento che gestisce la conta é contenuto all'interno della funzione

//split() tiene il conto appena rileva il criterio indicato, quindi se si mette come criterio un ! conta quanti elementi sono divisi da ! e non il singolo carattere; il counter parte da 1

//match() confronta la stringa con la regex e ritorna null se non ci sono elementi previsti dalla regex; si potrebbe utilizzare al posto di split()anche per quanto riguarda il rilevamento delle parole.

/*---------- FUNZIONALITA' DA AGGIUNGERE -----------*/
//calcolo corretto delle parole, noi calcoliamo ora la lunghezza dell'array che rimane 1 pur non avendo lettere nel boxTesto, questo perchè in quel caso l'array restituisce [' ',] che di per se da come valore 1

//non sarebbe male l'opzione di vedere visivamente la percentuale in un grafico di lettere presenti (es A 30%, B 27% e cosi via)
/* Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1: ( obbiettivo di ieri )
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.   */


let discoun20 = 0.2;
let discoun40 = 0.4;
let priceKilometr = 0.21;
// output
let out = document.querySelector('#out');
let outName = document.querySelector('.out-name');
let percent = document.querySelector('.percent');
let ticketPrice = document.querySelector('.ticket-price');

// function
function ticket() {


    let firstName = document.querySelector('#nome').value;
    let age = parseInt(document.querySelector('#eta').value);
    let km = Math.abs(parseFloat(document.querySelector('#chilometri').value));
    let price = priceKilometr * km;

    // variabili condizione
    let under18 = age < 18;
    let over65 = age > 65;

    if (under18) {
        const discountPrice = price - (price * discoun20);
        // out.innerHTML += `${firstName} ${discountPrice.toFixed(2)}`;

        outName.innerHTML += `${firstName} `;
        percent.innerHTML += `${discoun20 * 100}%`;
        ticketPrice.innerHTML += ` ${discountPrice.toFixed(2)}`;

    } else if (over65) {
        const discountPrice = price - (price * discoun40);
        // out.innerHTML += `${firstName} ${discountPrice.toFixed(2)}`;
        
        outName.innerHTML += `${firstName} `;
        percent.innerHTML += `${discoun40 * 100}%`;
        ticketPrice.innerHTML += ` ${discountPrice.toFixed(2)}`;
    }


    // document.querySelector('.bottone').addEventListener(onclick, function(){
    //     ticket( );
    // }  ).reset();
}
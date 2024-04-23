TRACCIA
MILESTONE 1
Per prima cosa, creiamo il markup statico come visto in mattinata. Costruiamo il container e inseriamo le immagini.
Solo una sarà visibile grazie a una sua classe, avremo così la struttura base. Condite con un pò di CSS per dare stile (senza esagerare).
Vi consiglio di rispolvere object-fit :occhiolino:
:roccia: MILESTONE 2
Ora dobbiamo scrivere del codice che al caricamento della pagina sposti la slide attiva da quella corrente alla successiva, non pensate al click.
Ragionate prima sul necessario. Devo recuperare un elemento specifico? Devo recuperare più elementi?
Aiutandovi anche e soprattutto con la console dell'ispettore recuperate tutti gli elementi necessari.
Scrivete poi il codice che all'avvio della pagina in automatico sposti la slide attiva dalla prima alla seconda.
:roccia: MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
Se abbiamo lavorato correttamente in milestone 2 dovrebbe bastarci poco. Creiamo un event listener per gestire il click sul pulsante.
All'interno spostiamo il codice scritto in milestone 2 per far si che la slide non venga cambia al caricamento della pagina, ma al nostro click sul pulsante.
Se superate l'ultima slide si spacca tutto e non fa nulla: è un bonus.
:roccia: MILESTONE 4
Create un ulteriore pulsante che vi permetta di fare il lavoro inverso: la slide attiva invece di andare avanti torna indietro.
Potete partire copiando il codice ma cosa dovete cambiare? In questa milestone vi assicurerete di aver davvero capito la precedente :occhiolino:

MILESTONE 1
Creazione del layout.
Creato un main, in cui dentro inizio con il creare una section in cui dovrò mettere il mio contenuto. Il main avrà un suo background mentre la section un altro.
Dentro la section avrò due contenitori, uno per il titolo l'altro per il carrosello.
Il carrosorello sarà composto da 4 slide, di cui se ne vedrà solo una.
I bottoni per cambiare slide andranno sotto o nel caso in positionabsolute sulle slide.(da definire)

MILESTONE 2
Ho impostato l'array contenente le slide, dopodichè imposto le variabili che andranno a modificare le slide (imgActive e nextSlide).
Imposto il ciclo in modo che la costante X corrisponda all'index dell'array slides, in modo che ne vai giri del ciclo, esso mi riconosca gli elementi di array e mi rimuova la classe css "active".
Dopo la fine del ciclo imposto la variabile nextSlide che mi andrà a aggiungere la classe "active" alla slide che verrà resa visibile.

MILESTONE 3
Dimenticato di inserire i button. Inserisco i bottoni "previous" e "next" e definisco la funzione sull'eventListener, che dovrà mandare avanti le slide, cambiando ovviamente l'index e spostando la classe "active".
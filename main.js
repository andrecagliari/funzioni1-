// function giocoDidadi(tiri) {
//     let player1 = 0;
//     let player2 = 0;


//     for (let i = 0; i < tiri; i++) {
//         let tiropl1 = Math.floor(Math.random() * (6 - 1) + 1);
//         let tiropl2 = Math.floor(Math.random() * (6 - 1) + 1);

//         player1 = player1 + tiropl1;
//         player2 = player2 + tiropl2;
        
//     }


//     if(player1 > player2){
//         return `Il vincitore è il giocatore 1, con un punteggio di ${player1}`;
//     }else if(player2 > player1){
//         return `Il vincitore è il giocatore 2, con un punteggio di ${player2}`;
//     }else {
//         return `Siete in parità, il vostro punteggio è: ${player1}`;
//     }

// }

// let tiri = Number(prompt(`Quanti tiri vuoi effettuare?`));

// let risultati = giocoDidadi(tiri);

// console.log(risultati);

function numeroACarattereDado(numero) {
  const facce = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
  return facce[numero - 1];
}

function giocoDiDadi(tiri) {
  let player1 = 0;
  let player2 = 0;

  const dado1 = document.getElementById('dado1');
  const dado2 = document.getElementById('dado2');

  let i = 0;

  function tira() {
    // Anima i dadi
    dado1.classList.add('tirando');
    dado2.classList.add('tirando');

    setTimeout(() => {
      let tiro1 = Math.floor(Math.random() * 6) + 1;
      let tiro2 = Math.floor(Math.random() * 6) + 1;

      player1 += tiro1;
      player2 += tiro2;

      // Mostra faccia del dado
      dado1.textContent = numeroACarattereDado(tiro1);
      dado2.textContent = numeroACarattereDado(tiro2);

      // Ferma l'animazione
      dado1.classList.remove('tirando');
      dado2.classList.remove('tirando');

      i++;
      if (i < tiri) {
        setTimeout(tira, 1000); // attesa tra i tiri
      } else {
        let risultato = '';
        if (player1 > player2) {
          risultato = `Il vincitore è il giocatore 1 con un punteggio di ${player1}`;
        } else if (player2 > player1) {
          risultato = `Il vincitore è il giocatore 2 con un punteggio di ${player2}`;
        } else {
          risultato = `Siete in parità, il vostro punteggio è: ${player1}`;
        }
        document.getElementById('risultato').textContent = risultato;
      }
    }, 500);
  }

  tira();
}

function gioca() {
  const tiri = Number(prompt("Quanti tiri vuoi effettuare?"));
  if (!isNaN(tiri) && tiri > 0) {
    document.getElementById('risultato').textContent = '';
    giocoDiDadi(tiri);
  } else {
    alert("Inserisci un numero valido!");
  }
}

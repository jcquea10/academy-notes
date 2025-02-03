// variables
numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;
let numeroUsuario = 0;
let intentos = 1;
// let palabraVeces = "vez";
let maximosIntentos = 3;

while (numeroUsuario != numeroSecreto) {
  let numeroUsuario = parseInt(
    prompt(`me indicas un numero entre 1 y ${numeroMaximoPosible} por favor:`)
  );

//   console.log(numeroUsuario);
  /*
    este codigo realiza
    la comparacion
    */
  if (numeroUsuario === numeroSecreto) {
    //aAcertamos, fue verdadera la condicion
    alert(
      `Acertaste, el numero es : ${numeroUsuario}. lo hiciste en ${intentos} ${
        intentos > 1 ? "veces" : "vez"
      }`
    );
    break;
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("el numero secreto es menor");
    } else {
      alert("el numero secreto es mayor");
    }
    //incrementamos el contador cuando no acierta
    // intentos = intentos + 1;
    // intentos += 1;
    intentos++;
    // palabraVeces = "veces";
    if (intentos > maximosIntentos) {
      alert(`llegaste al numero maximo de ${maximosIntentos} intentos`);
      break;
    }
    // la condicion no se cumplio
    //alert('lo siento, no acertaste el numero');
  }
}

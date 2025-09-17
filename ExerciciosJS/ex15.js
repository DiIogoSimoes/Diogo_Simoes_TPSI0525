const prompt = require('prompt-sync')();

function mostrarASCII() {
  let inicio = 0;
  const limite = 255;
  const passo = 20;

  while (inicio <= limite) {
    console.log("Códigos ASCII de " + inicio + " até " + Math.min(inicio + passo - 1, limite) + ":");

    for (let i = inicio; i < inicio + passo && i <= limite; i++) {
      console.log(i + " -> " + String.fromCharCode(i));
    }

    inicio += passo;

    if (inicio <= limite) {
      let continuar = prompt("Deseja continuar vendo os próximos 20? (s/n)");
      if (continuar.toLowerCase() !== "s") {
        console.log("Programa terminado.");
        break;
      }
    }
  }
}

mostrarASCII();

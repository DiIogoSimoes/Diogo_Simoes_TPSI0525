
const prompt = require("prompt-sync")();

function verificarNumeros() {
  for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt(`Escreva o ${i}º número: `));

    if (numero % 2 === 0) {
      console.log(`${numero} é PAR`);
    } else {
      console.log(`${numero} é ÍMPAR`);
    }
  }
}

verificarNumeros();
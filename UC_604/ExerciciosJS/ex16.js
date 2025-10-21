const prompt = require('prompt-sync')();
function mediaNumerosPares() {
  let soma = 0;
  let contador = 0;

  while (contador < 30) {
    let entrada = prompt(`Escreva um número par entre 1 e 50 (faltam ${30 - contador}):`);
    let numero = parseInt(entrada);

    if (isNaN(numero)) {
      alert("Escreva um número válido!");
      continue;
    }
    if (numero < 1 || numero > 50) {
      alert("O número deve estar entre 1 e 50!");
      continue;
    }
    if (numero % 2 !== 0) {
      alert("O número deve ser par!");
      continue;
    }

    soma += numero;
    contador++;
  }

  let media = soma / 30;
  alert("A média dos 30 números pares é: " + media);
}

mediaNumerosPares();

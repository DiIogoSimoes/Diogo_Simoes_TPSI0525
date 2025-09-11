const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarDivisores() {
  rl.question("Digite um número inteiro: ", (input) => {
    let num = parseInt(input);
    let contador = 0;

    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        contador++;
      }
    }

    console.log(`O número ${num} possui ${contador} divisores.`);
    rl.close();
  });
}

contarDivisores();

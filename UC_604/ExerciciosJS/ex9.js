const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirNumero() {
  let numero;

  function perguntar() {
    rl.question("Escreva um número entre 1 e 100: ", (input) => {
      numero = parseInt(input);

      if (numero >= 1 && numero <= 100) {
        console.log(`Número válido: ${numero}`);
        rl.close();
      } else {
        console.log("Número inválido, tente novamente!");
        perguntar(); 
      }
    });
  }

  perguntar();
}

pedirNumero();

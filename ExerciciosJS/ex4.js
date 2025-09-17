const num = require(prompt("➡ Escreva um número inteiro: "));

function verificarPrimo() {
    let num = parseInt(prompt("Escreva um número inteiro: "));

    if (num <= 1) {
        console.log(`${num} NÃO é primo.`);
        return;
    }

    let primo = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            primo = false;
            break;
        }
    }

    if (primo) {
        console.log(`${num} É primo`);
    } else {
        console.log(`${num} NÃO é primo`);
    }
}

verificarPrimo();

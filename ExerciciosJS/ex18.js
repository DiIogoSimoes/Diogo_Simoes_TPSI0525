
function ehPerfeito(numero) {
    let soma = 0;
    for (let i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) {
            soma += i;
        }
    }
    return soma === numero;
}

function contarPerfeitos(limite) {
    let contador = 0;
    for (let n = 2; n <= limite; n++) {
        if (ehPerfeito(n)) {
            console.log(n + " é um número perfeito");
            contador++;
        }
    }
    console.log("Total de números perfeitos até " + limite + ": " + contador);
}

contarPerfeitos(10000);

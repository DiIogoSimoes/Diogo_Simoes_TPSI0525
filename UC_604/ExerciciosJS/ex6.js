function ePrimo(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function mostrarPrimos() {
  let contador = 0;
  let numero = 2;

  while (contador < 10) {
    if (ePrimo(numero)) {
      console.log(numero);
      contador++;
    }
    numero++;
  }
}

mostrarPrimos();
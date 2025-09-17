function todasTabuadas() {
  for (let numero = 1; numero <= 100; numero++) {
    console.log("Tabuada do " + numero + ":");
    for (let i = 1; i <= 10; i++) {
      console.log(numero + " x " + i + " = " + (numero * i));
    }
    console.log("-------------------------");
  }
}

todasTabuadas();
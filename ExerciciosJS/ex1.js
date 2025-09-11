function mostrarNumeros() {
  console.log("30 primeiros números pares:");
  for (let i = 1; i <= 30; i++) {
    console.log(i * 2);
  }

  console.log("");

  console.log("30 primeiros números ímpares:");
  for (let i = 1; i <= 30; i++) {
    console.log(i * 2 - 1);
  }
}

mostrarNumeros();

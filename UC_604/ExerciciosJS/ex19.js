
function mostrarFibonacci(qtd) {
    let n1 = 1, n2 = 1;
    console.log(n1);
    console.log(n2);

    for (let i = 3; i <= qtd; i++) {
        let n3 = n1 + n2;
        console.log(n3);
        n1 = n2;
        n2 = n3;
    }
}

mostrarFibonacci(60);


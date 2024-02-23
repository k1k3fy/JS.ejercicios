function calcularFibonacci(n) {
    let fibonacci = [0, 1];

    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    return fibonacci;
}

function obtenerNumero() {
    let numero = prompt("Ingrese un número para generar la serie de Fibonacci:");
    
    if (isNaN(numero) || numero === null || numero === "") {
        alert("Por favor, ingrese un número válido.");
        return obtenerNumero();
    }

    return parseInt(numero);
}

function imprimirSerieFibonacci() {
    let numero = obtenerNumero();

    let fibonacci = calcularFibonacci(numero);

    console.log(`Serie de Fibonacci para ${numero}: ${fibonacci.join(", ")}`);
}

imprimirSerieFibonacci();

function calcularFactorial(numero) {
    if (numero === 0) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}

function obtenerNumero() {
    let input = prompt("Ingrese un número para calcular su factorial:");
    
    if (input === null) {
        return null; // Si el usuario cancela, retornamos null
    }

    let numero = parseFloat(input);
    
    if (isNaN(numero) || !Number.isInteger(numero) || numero < 0) {
        alert("Por favor, ingrese un número entero válido mayor o igual a cero.");
        return obtenerNumero(); // Pedimos nuevamente el número
    }

    return numero;
}

function calcularYMostrarFactorial() {
    let numero = obtenerNumero();

    if (numero !== null) {
        let factorial = calcularFactorial(numero);
        console.log(`El factorial de ${numero} es: ${factorial}`);
    } else {
        console.log("Se canceló la operación.");
    }
}

calcularYMostrarFactorial();

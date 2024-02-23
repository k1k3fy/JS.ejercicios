function convertirTemperatura() {
    let input = prompt("Ingrese la temperatura en grados Celsius:");
    
    if (input === null) {
        return null; 
    }

    let celsius = parseFloat(input);
    
    if (isNaN(celsius)) {
        alert("Por favor, ingrese un valor numérico para la temperatura.");
        return convertirTemperatura(); 
    }

    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;

    console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(2)}`);
    console.log(`Grados Kelvin: ${kelvin.toFixed(2)}`);
}

convertirTemperatura();


function generarNumeroSecreto() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  function adivinarNumeroSecreto() {
    const numeroSecreto = generarNumeroSecreto();
    const numerosIntroducidos = [];
    
    function solicitarNumero() {
      let input = prompt("Intenta adivinar el número secreto (entre 1 y 100):");
      let numero = parseInt(input);
      return numero;
    }

    function esNumeroValido(numero) {
      return !isNaN(numero) && numero >= 1 && numero <= 100;
    }
    
    function mostrarMensaje(mensaje) {
      console.log(mensaje); 
    }
    
    while (true) {
      let numeroUsuario = solicitarNumero();
      
      if (!esNumeroValido(numeroUsuario)) {
        mostrarMensaje("Error: Por favor, ingresa un número válido entre 1 y 100.");
        continue;
      }
      
      numerosIntroducidos.push(numeroUsuario);
      
      if (numeroUsuario === numeroSecreto) {
        mostrarMensaje("Felicidades, adivinaste el número secreto.");
        mostrarMensaje("Lista de números introducidos: " + numerosIntroducidos.join(", "));
        break; 
      } else {
        let pista = numeroUsuario < numeroSecreto ? "menor" : "mayor";
        mostrarMensaje("Ups, el número secreto es " + pista + " que " + numeroUsuario + ". Vuelve a intentarlo.");
      }
    }
  }
  
  adivinarNumeroSecreto();
  
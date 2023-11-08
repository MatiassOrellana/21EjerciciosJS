


function determinarParidad() {

    var numeroInput = document.getElementById("numeroInput");
    var resultado = document.getElementById("resultado");

    var numero = parseInt(numeroInput.value);

    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            resultado.textContent = "El número es par.";
          } else {
            resultado.textContent = "El número es impar.";
          }
    } else {
        resultado.textContent = "Ingresa un número válido.";
    }

    
  }

  
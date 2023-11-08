
function determinarTipoCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
      return "La cadena está formada solo por mayúsculas.";
    } else if (cadena === cadena.toLowerCase()) {
      return "La cadena está formada solo por minúsculas.";
    } else {
      return "La cadena es una mezcla de mayúsculas y minúsculas.";
    }
  }
  
  function mostrarResultado() {
    var cadenaInput = document.getElementById("cadenaInput");
    var resultado = document.getElementById("resultado");

    var cadena = cadenaInput.value;
    var tipo = determinarTipoCadena(cadena);

    resultado.textContent = "Resultado: " + tipo;
  }
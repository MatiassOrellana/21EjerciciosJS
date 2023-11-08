function esPalindromo(cadena) {
    // Convertir la cadena a minúsculas y eliminar espacios en blanco
    cadena = cadena.toLowerCase().replace(/ /g, '');
  
    // Comparar la cadena original con su inversa
    return cadena === cadena.split('').reverse().join('');
 }
  

function mostrarResultado() {
    var cadenaInput = document.getElementById("cadenaInput");
    var resultado = document.getElementById("resultado");

    var cadena = cadenaInput.value;

    if (esPalindromo(cadena)) {
        resultado.textContent = `"${cadena}" es un palíndromo.`;
      } else {
        resultado.textContent = `"${cadena}" no es un palíndromo.`;
      }


    
}
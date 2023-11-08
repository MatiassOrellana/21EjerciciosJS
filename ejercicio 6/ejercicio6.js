var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
//letras disponibles

// Solicitar al usuario el número y la letra del DNI
var numeroDNI = prompt("Por favor, ingresa el número de tu DNI (sin la letra):");//los numeros
var letraUsuario = prompt("Ingresa la letra de tu DNI (en mayúscula):");//el guion digito

// Verificar si el número de DNI es válido
if (numeroDNI < 0 || numeroDNI > 99999999) {
  alert("El número de DNI proporcionado no es válido.");//mensaje alerta desde el navegador
} else {
  // Calcular la letra del DNI
  var resto = numeroDNI % 23;
  var letraCalculada = letras[resto];

  // Comparar la letra calculada con la letra proporcionada por el usuario
  if (letraCalculada === letraUsuario) {
    alert("El número y la letra del DNI son correctos.");//mensaje alerta desde el navegador
  } else {
    alert("La letra que has indicado no es correcta.");//mensaje alerta desde el navegador
  }
}
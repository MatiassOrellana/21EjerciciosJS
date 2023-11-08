// Almacena el mensaje en la variable "mensaje"


//ejercicio 1
console.log("Hola Mundo!");
console.log("Soy el primer script");

//ejercicio 2
function mostrarMensaje() {
    // Obtener el elemento de párrafo por su ID
    var mensajeElement = document.getElementById("mensaje");

    //mensaje que se quiere imprimir
    var mensaje = "El primer script dice: Hola Mundo!\n";
    var mensaje1 = "Que facil es incluir 'comillas simples'\n";
    var mensaje2 = ' y "comillas dobles"';

    //mensaje de alerta desde el navegador
    alert(mensaje + mensaje1 + mensaje2);
  }
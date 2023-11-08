// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtén todos los enlaces de la página
    var enlaces = document.getElementsByTagName("a");
  
    // Muestra el número de enlaces de la página
    console.log("Número de enlaces de la página: " + enlaces.length);
  
    // Obtiene la dirección a la que enlaza el penúltimo enlace
    if (enlaces.length >= 2) {
      var penultimoEnlace = enlaces[enlaces.length - 2];
      var direccionPenultimoEnlace = penultimoEnlace.href;
      console.log("Dirección del penúltimo enlace: " + direccionPenultimoEnlace);
    }
  
    // Obtiene el número de enlaces que enlazan a 'http://prueba'
    var enlacesAHttpPrueba = document.querySelectorAll('a[href="http://prueba"]').length;
    console.log("Número de enlaces que enlazan a http://prueba: " + enlacesAHttpPrueba);
  
    // Obtiene el tercer párrafo
    var parrafos = document.getElementsByTagName("p");
    if (parrafos.length >= 3) {
      var tercerParrafo = parrafos[2];
      var enlacesEnTercerParrafo = tercerParrafo.getElementsByTagName("a").length;
      console.log("Número de enlaces en el tercer párrafo: " + enlacesEnTercerParrafo);
    }
  });
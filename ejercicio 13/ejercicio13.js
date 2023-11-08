
/**Crear una expresión regular valide una fecha en formato "XX/XX/XXXX", 
 * donde "X" es un dígito. Probarlo con la expresión: "Nací el 05/04/1982 en Donostia.".*/
var regexFecha = /^\d{2}\/\d{2}\/\d{4}$/;
var texto = "Nací el 05/04/1982 en Donostia.";
var resultado = regexFecha.test(texto);
console.log(resultado); // Devolverá true si la fecha está en el formato correcto.

/**Crear una expresión regular que valide una dirección de email. 
 * Para simplificar, los valores antes de la @ pueden contener cualquier carácter alfanumérico, y 
 * los caracteres . y -, mientras que los valores tra la @ pueden contener caracteres alfanuméricos,
 *  y el tipo de dominio puede tener una longitud de 2 o 3 caracteres. */
var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
var email = "usuario@example.com";
var resultado1 = regexEmail.test(email);
console.log(resultado1); // Devolverá true si la dirección de correo es válida.

/**Codigo Mejorado*/
function escapeHTML(text) {
    return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**Dados un nombre y un apellido, crear la expresión regulatr necesaria 
 * para mostrarlos en orden inverso y separados por una coma. Por ejemplo,
 *  la cadena "John Smith", convertirla en "Smith, John".*/
var nombreCompleto = "John Smith";
var regexNombreApellido = /(\w+) (\w+)/;
var resultado2 = nombreCompleto.replace(regexNombreApellido, "$2, $1");
console.log(resultado2); // Devolverá "Smith, John".

/**Crear una expresión regular que elimine las etiquetas 
 * potencialmente peligrosas (<script>...</script>) y todo su contenido de una cadena HTML.*/
var textoHTML = "<p>Este es un <script>alert('peligroso')</script> texto.</p>";
var regexEliminarEtiquetasPeligrosas = /<script[\s\S]*?<\/script>/g;
var resultado3 = textoHTML.replace(regexEliminarEtiquetasPeligrosas, "");
console.log(resultado3); // Eliminará cualquier contenido entre <script> y </script>.

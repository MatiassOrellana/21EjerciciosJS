var valores = [true, 5, false, "hola", "adios", 2];

//parte 1
var texto1 = valores[3];//se agarra "hola"
var texto2 = valores[4];//se agarra "adios"

if (texto1.length > texto2.length) {
  console.log(texto1 + " es mayor que " + texto2);
} else if (texto2.length > texto1.length) {
  console.log(texto2 + " es mayor que " + texto1);
} else {
  console.log("Ambos textos tienen la misma longitud.");
}

//parte 2
var booleano1 = valores[0];
var booleano2 = valores[1];

var resultadoTrue = booleano1 && booleano2;
var resultadoFalse = booleano1 || booleano2;

console.log("Resultado True: " + resultadoTrue);
console.log("Resultado False: " + resultadoFalse);

//parte 3
var numero1 = valores[1];
var numero2 = valores[5];

var suma = numero1 + numero2; // Suma
var resta = numero1 - numero2; // Resta
var multiplicacion = numero1 * numero2; // Multiplicación
var division = numero1 / numero2; // División
var modulo = numero1 % numero2; // Módulo (resto de la división)

console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log("Módulo: " + modulo);



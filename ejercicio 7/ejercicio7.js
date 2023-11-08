var numero = prompt("Por favor, ingresar un número");

var factorial = 1;

if(numero == 0){

    console.log(factorial);

}else if(numero < 0){

    console.log("tiene que ser positivo");

} else {

    for (var i = numero; i > 0 ; i--) {
    
        factorial = factorial * i
    
      }

      console.log(factorial);

}





  
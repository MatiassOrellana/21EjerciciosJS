// Función para lanzar un dado y obtener un número aleatorio entre 1 y 6
function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }
  function mostrarResultado() {

// Inicializar un array para contar las sumas de los lanzamientos
  const sumaApariciones = new Array(11).fill(0);
  const numLanzamientos = 36000;
  document.getElementById("resultado").innerHTML = "";

  // Simular 36,000 lanzamientos de dos dados
  for (let i = 0; i < numLanzamientos; i++) {
    const dado1 = lanzarDado();
    const dado2 = lanzarDado();
    const suma = dado1 + dado2;
    sumaApariciones[suma - 2]++; // Restamos 2 porque las sumas posibles van de 2 a 12
  }
  
  // Mostrar los resultados
  for (let i = 0; i < sumaApariciones.length; i++) {
    document.getElementById("resultado").innerHTML += `Suma ${i + 2}: ${sumaApariciones[i]} veces.`+"\n";
  }
    
  
}
  
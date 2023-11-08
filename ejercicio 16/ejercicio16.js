function anade() {
    var lista = document.getElementById("miLista");
    var nuevoElemento = document.createElement("li");
    var texto = document.createTextNode("Lorem.");
    nuevoElemento.appendChild(texto);
    lista.appendChild(nuevoElemento);
}
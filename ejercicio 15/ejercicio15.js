function muestra(enlace) {
    var contenido = document.getElementById("contenido");
    if (contenido.style.display === "none") {
        contenido.style.display = "block";
        enlace.style.display = "none";
    }
}
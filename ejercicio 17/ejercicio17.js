function toggleSection(seccion) {
    var seccionId = "seccion" + seccion;
    var seccionElement = document.getElementById(seccionId);
    var enlaceElement = document.querySelector(".enlace[href='#'][onclick='toggleSection(" + seccion + ")']");

    if (seccionElement.style.display === "none") {
        seccionElement.style.display = "block";
        enlaceElement.innerHTML = "Ocultar contenidos ";
    } else {
        seccionElement.style.display = "none";
        enlaceElement.innerHTML = "Mostrar contenidos ";
    }
}
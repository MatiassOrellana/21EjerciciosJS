const mensajeElement = document.getElementById("mensaje");

document.onclick = informarZonaClicRaton;

function informarZonaClicRaton(event) {
    const tamanoVentana = tamanoVentanaNavegador();
    const mitadAncho = tamanoVentana[0] / 2;
    const mitadAlto = tamanoVentana[1] / 2;

    const x = event.clientX;
    const y = event.clientY;

    let zona = '';

    if (x < mitadAncho && y < mitadAlto) {
        zona = 'Izquierda Arriba';
    } else if (x < mitadAncho && y >= mitadAlto) {
        zona = 'Izquierda Abajo';
    } else if (x >= mitadAncho && y < mitadAlto) {
        zona = 'Derecha Arriba';
    } else {
        zona = 'Derecha Abajo';
    }

    const mensaje = `Has hecho clic en la zona: ${zona}`;
    mensajeElement.textContent = mensaje;
}

function tamanoVentanaNavegador() {
    const ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return [ancho, alto];
}
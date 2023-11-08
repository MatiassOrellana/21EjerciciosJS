const mensajeElement = document.getElementById("raton");
const mensajeElement1 = document.getElementById("teclado");

        document.onmousemove = muestraInformacionRaton;
        document.onkeydown = muestraInformacionTeclado;
        document.onmousedown = cambiaFondoAmarillo;
        document.onmouseup = cambiaFondoBlanco;

        
        function muestraInformacionRaton(event) {
            const posXNavegador = event.clientX;
            const posYNavegador = event.clientY;
            const posXPagina = event.pageX;
            const posYPagina = event.pageY;

            const mensaje = `Posición en el navegador: (${posXNavegador}, ${posYNavegador}) | Posición en la página: (${posXPagina}, ${posYPagina})`;
            resultado.textContent = mensaje;
        }

        function muestraInformacionTeclado(event) {
            const tecla = event.key;
            const codigoAscii = tecla.charCodeAt(0);
            const mensaje = `Tecla pulsada: (${tecla}) | Codigo de tecla: (${codigoAscii})`;
            resultado1.textContent = mensaje;
        }

        function cambiaFondoAmarillo() {
            mensajeElement.style.backgroundColor = "#FFFFCC";
            //mensajeElement1.style.backgroundColor = "#CCE6FF";
        }

        function cambiaFondoBlanco() {
            mensajeElement.style.backgroundColor = "white";
            //mensajeElement1.style.backgroundColor = "white";
        }
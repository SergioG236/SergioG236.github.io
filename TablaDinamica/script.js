function generarTabla() {
    nav = document.getElementById("nav");
    titulo = document.createElement("h2");
    tablaDeVerdad = document.createElement("table")
    tabla = document.getElementById("tabla");
    cantidad = document.getElementById("cantidad");

    if (tabla.value != 0 && cantidad.value != 0) {
        titulo.innerText = "Tabla del " + tabla.value + " " + cantidad.value + " veces";
        nav.appendChild(titulo);

        for (let index = 0; index < cantidad.value; index++) {
            fila = document.createElement("tr");
            columna = document.createElement("th");
            columna0 = document.createElement("th");
            columna.innerText = index + 1;
            columna0.innerText = tabla.value * (index + 1);
            tablaDeVerdad.appendChild(fila);
            tablaDeVerdad.appendChild(columna);
            tablaDeVerdad.appendChild(columna0);
        }
        nav.appendChild(tablaDeVerdad);
    }
}
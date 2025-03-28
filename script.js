// Array de datos
const nombres = [
    { id: 549736, nombre: "Getsemani" },
    { id: 549923, nombre: "Erick" },
    { id: 550382, nombre: "Jake" },
];

// Referencia al cuerpo de la tabla
const tablaNombres = document.getElementById("tabla-nombres");

// Generar dinámicamente las filas
nombres.forEach(persona => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${persona.id}</td>
        <td>${persona.nombre}</td>
    `;
    tablaNombres.appendChild(fila);
});
const listadoTareas = document.getElementById("listado-tareas");
const input = document.getElementById("inputTarea");
const boton = document.getElementById("btnAñadir");

function crearTarea(texto) {

    const tarea = document.createElement("div");
    tarea.classList.add("tarea");

    tarea.innerHTML = `
    
    <div class="izquierda">

        <span>${texto}</span>

    </div>

    <div class="centro">

        <h3>NO COMPLETADO</h3>

    </div>

    <div class="botones-derecha">

        <button class="clip">
        Ver clip
        </button>

        <button class="clip papelera">
        Eliminar
        </button>

        <button class="clip completado">
        Marcar como completado
        </button>
        
    </div>
`;

    const botonCompletar = tarea.querySelector(".completado");
    const estado = tarea.querySelector("h3");

    botonCompletar.addEventListener("click", function () {

        if (estado.textContent === "NO COMPLETADO") {
            estado.textContent = "COMPLETADO";
        } else {
            estado.textContent = "NO COMPLETADO";
        }

    });

    const botonEliminar = tarea.querySelector(".papelera");
    botonEliminar.addEventListener("click", function () {
        listadoTareas.removeChild(tarea);
    });


    const botonClip = tarea.querySelector(".clip");
    botonClip.addEventListener("click", function () {
        alert("¡Clip de la tarea: " + texto + "!");
    });

    listadoTareas.appendChild(tarea);

}


boton.addEventListener("click", function () {

    crearTarea(input.value);

});



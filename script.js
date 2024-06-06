// Selecciona los elementos del DOM necesarios
const tareaInput = document.getElementById('tareaInput');
const agregarTareaButton = document.getElementById('agregarTareaButton');
const listaDeTareas = document.getElementById('listaDeTareas');

// Añade un evento al botón de agregar tarea
agregarTareaButton.addEventListener('click', () => {
    // Obtiene el texto ingresado en el input
    const tareaTexto = tareaInput.value;

    // Verifica si el input está vacío
    if (tareaTexto === '') {
        alert("Por favor ingresa una tarea."); // Muestra una alerta si el input está vacío
        return; // Sale de la función si no hay texto
    }

    // Crea un nuevo elemento de lista (li) para la tarea
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = tareaTexto; // Establece el texto de la tarea

    // Crea un botón de eliminar para la tarea
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar'; // Establece el texto del botón

    // Añade un evento al botón de eliminar
    botonEliminar.addEventListener('click', () => {
        // Remueve la tarea de la lista cuando se hace clic en el botón de eliminar
        listaDeTareas.removeChild(nuevaTarea);
    });

    // Crea un botón de cambiar tarea
    const botonCambiar = document.createElement('button');
    botonCambiar.textContent = 'Cambiar Tarea'; // Establece el texto del botón

    // Añade un evento al botón de cambiar tarea
    botonCambiar.addEventListener('click', () => {
        // Pide al usuario que ingrese el nuevo texto para la tarea
        const nuevoTexto = prompt("Ingresa el nuevo texto para la tarea:", tareaTexto);

        // Si se ingresa un texto nuevo, actualiza el contenido de la tarea
        if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
            nuevaTarea.firstChild.textContent = nuevoTexto;
        }
    });

    // Añade los botones al nuevo elemento de tarea
    nuevaTarea.appendChild(botonCambiar);
    nuevaTarea.appendChild(botonEliminar);

    // Añade la nueva tarea a la lista de tareas
    listaDeTareas.appendChild(nuevaTarea);

    // Limpia el input para que esté listo para una nueva entrada
    tareaInput.value = '';
});



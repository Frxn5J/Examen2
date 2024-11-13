let taskToDelete = null; // Variable global para almacenar la tarea a eliminar

function addTask() {
    const taskContainer = document.getElementById("taskContainer");
    const taskInput = document.getElementById("taskInput");
    const prioritySelect = document.getElementById("prioritySelect");

    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;

    // Validar que el campo de tarea no esté vacío, no se pidio, pero no esta de mas validarlo
    if (taskText === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    // Crear la tarjeta de tarea
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    // Asignar color según la prioridad seleccionada
    switch (priority) {
        case "Alta":
            taskCard.classList.add("alta");
            break;
        case "Media":
            taskCard.classList.add("media");
            break;
        case "Baja":
            taskCard.classList.add("baja");
            break;
    }

    // Añadir el texto y botón de eliminar a la tarjeta
    taskCard.innerHTML = `<p>${taskText}</p>`;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.classList.add("delete-btn");

    // Función para mostrar el popup de confirmación antes de eliminar la tarea de alta prioridad
    deleteBtn.onclick = function () {
        if (priority === "Alta") {
            taskToDelete = taskCard; 
            showModal(); // Muestra popup de confirmación
        } else {
            taskContainer.removeChild(taskCard); // Elimina directamente si no es de alta prioridad
        }
    };

    taskCard.appendChild(deleteBtn);
    taskContainer.appendChild(taskCard);

    // Limpiar el input
    taskInput.value = "";
}

// Función para mostrar pop up
function showModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
}

// Función para ocultar el popup (Ocultrar :D)
function hideModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Configura los botones de confirmación del pop up
document.getElementById("confirmDelete").onclick = function () {
    if (taskToDelete) {
        const taskContainer = document.getElementById("taskContainer");
        taskContainer.removeChild(taskToDelete); // 
        taskToDelete = null; // Reinicia la variable
    }
    hideModal(); // Ocultar :D
};

document.getElementById("cancelDelete").onclick = function () {
    taskToDelete = null; // Cancela la eliminación (se cancela todo jja)
    hideModal(); // Ocultar :D
};

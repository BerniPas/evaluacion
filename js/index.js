// Validar que las calificaciones no superen el máximo permitido
document.querySelectorAll('.score-input').forEach(input => {
    input.addEventListener('change', function () {
        const maxScore = parseInt(this.getAttribute('data-max'));
        if (this.value > maxScore) {
            alert(`La calificación no puede ser mayor a ${maxScore} para este indicador`);
            this.value = maxScore;
        }
        if (this.value < 0) {
            this.value = 0;
        }
    });
});

// Calcular la calificación total
function calculateGrade() {
    let total = 0;
    document.querySelectorAll('.score-input').forEach(input => {
        if (input.value) {
            total += parseInt(input.value);
        }
    });
    document.getElementById('total-score').textContent = total;

    // Mostrar mensaje según la calificación
    let message = `Calificación total: ${total}/100. `;
    if (total >= 90) {
        message += "¡Excelente trabajo!";
    } else if (total >= 70) {
        message += "Buen trabajo, pero hay aspectos a mejorar.";
    } else if (total >= 60) {
        message += "Trabajo aprobado pero con varias áreas de mejora.";
    } else {
        message += "Trabajo no aprobado. Se requiere revisión y mejora.";
    }

    alert(message);
}

// Función para limpiar todas las calificaciones
function clearAllScores() {
    if (confirm("¿Está seguro de que desea eliminar todas las calificaciones? Esta acción no se puede deshacer.")) {
        document.querySelectorAll('.score-input').forEach(input => {
            input.value = '';
        });
        document.getElementById('total-score').textContent = '0';
        document.querySelectorAll('textarea').forEach(textarea => {
            textarea.value = '';
        });
        alert("Todas las calificaciones y comentarios han sido eliminados.");
    }
}
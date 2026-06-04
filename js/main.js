
// ========== JAVASCRIPT COMPARTIDO ==========
// Persona 3 puede agregar aquí el contador de partidos

// ========== PERSONA 3: CONTADOR PRÓXIMO PARTIDO ==========

document.addEventListener('DOMContentLoaded', () => {
    // Configura la fecha del próximo partido (13 de Junio de 2026, 18:00:00)
    const matchDate = new Date('June 13, 2026 18:00:00').getTime();

    // Actualiza la cuenta regresiva cada 1 segundo
    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = matchDate - now;

        // Cálculos de tiempo para días, horas, minutos y segundos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Obtener los elementos del HTML
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');

        // Si los elementos existen, actualizarlos
        if (daysElement && hoursElement && minutesElement && secondsElement) {
            daysElement.innerText = days < 10 ? '0' + days : days;
            hoursElement.innerText = hours < 10 ? '0' + hours : hours;
            minutesElement.innerText = minutes < 10 ? '0' + minutes : minutes;
            secondsElement.innerText = seconds < 10 ? '0' + seconds : seconds;
        }

        // Si la cuenta regresiva termina, escribir un mensaje
        if (distance < 0) {
            clearInterval(countdownInterval);
            const countdownBox = document.getElementById('countdown');
            if (countdownBox) {
                countdownBox.innerHTML = "<div style='font-size: 1.5rem; font-weight: bold; color: var(--primary); padding: 10px;'>¡El partido ha comenzado! ⚽</div>";
            }
        }
    }, 1000);
});

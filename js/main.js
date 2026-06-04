
// ========== JAVASCRIPT COMPARTIDO ==========
// Persona 3 puede agregar aquí el contador de partidos
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// ========== PERSONA 3: CONTADOR PRÓXIMO PARTIDO ==========

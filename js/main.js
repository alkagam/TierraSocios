// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Función para alternar el menú
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('menu-open');
}

// Función para redirigir a la página del proceso
function iniciarProceso() {
    window.location.href = 'proceso.html';
}

// Manejo del formulario
function handleSubmit(event) {
    event.preventDefault();
    alert('Formulario enviado con éxito.');
}

// Mostrar/ocultar la barra de navegación
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }

    if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

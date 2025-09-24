// Efecto de scroll para navbar
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Formulario de WhatsApp con validación
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos para enviarnos un mensaje.');
        return;
    }

    // Validar email básico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    const numeroWhatsapp = '56967092468'; // Reemplaza con tu número real (código de país + número)
    const textoWhatsapp = `Hola, soy ${nombre} (${email}).\nMensaje: ${mensaje}\n\n¡Gracias por contactar al Ministerio Raíz y Roca!`;
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(textoWhatsapp)}`;

    // Limpiar formulario después de enviar
    document.getElementById('contact-form').reset();
    window.open(urlWhatsapp, '_blank');
});
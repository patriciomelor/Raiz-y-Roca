document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    const numeroWhatsapp = '56967092468'; // Reemplaza con tu número de WhatsApp con el código de país.

    const textoWhatsapp = `Hola, mi nombre es ${nombre}. Mi correo es ${email}. Mensaje: ${mensaje}`;
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(textoWhatsapp)}`;

    window.open(urlWhatsapp, '_blank');
});
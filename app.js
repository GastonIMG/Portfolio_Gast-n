
// EFECTO DESVANECIMIENTO SOBRE LOS ELEMENTOS DEL NAV

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.opacity = '0.7';
        this.style.transition = 'opacity 0.3s ease';
    });

    link.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
    });
});

// SERVICIOS; FUNCIÓN "LEER MÁS"

document.querySelectorAll('.leer-mas').forEach((btn) => {
    btn.addEventListener('click', function () {
      const infoAdicional = this.nextElementSibling;
      infoAdicional.style.display =
        infoAdicional.style.display === 'block' ? 'none' : 'block';
    });
});
  
  
// MENU HAMBURGUESA

const hamburgerMenu = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('header nav');

  hamburgerMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});


// EFECTO HEADER AL HACER SCROLL

// Selecciona el menú de navegación
const header = document.querySelector('header');

// Función que maneja el scroll
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY; // Posición actual del scroll
    const windowHeight = window.innerHeight; // Altura de la ventana

    // Mostrar el header solo si estamos en el 10% superior de la página
    if (scrollTop <= windowHeight * 0.1) {
        header.style.transform = 'translateY(0)'; // Mostrar el header
        header.style.transition = 'transform 0.3s ease-in-out'; // Animación suave
    } else {
        header.style.transform = 'translateY(-100%)'; // Ocultar el header
    }
});



// VALIDACIÓN FORMULARIO

document.getElementById("contactoForm").addEventListener("submit", function (event) {
    // Evita que el formulario se envíe por defecto
    event.preventDefault();

    // Obtén los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Referencias a los mensajes de error
    const errorNombre = document.getElementById("errorNombre");
    const errorEmail = document.getElementById("errorEmail");
    const errorMensaje = document.getElementById("errorMensaje");

    // Reinicia los mensajes de error
    errorNombre.textContent = "";
    errorEmail.textContent = "";
    errorMensaje.textContent = "";

    let isValid = true;

    // Validación del nombre
    if (nombre === "") {
        errorNombre.textContent = "El nombre es obligatorio.";
        isValid = false;
    } else if (nombre.length < 3) {
        errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
        isValid = false;
    }

    // Validación del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        errorEmail.textContent = "El correo electrónico es obligatorio.";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        errorEmail.textContent = "El correo electrónico no es válido.";
        isValid = false;
    }

    // Validación del mensaje
    if (mensaje === "") {
        errorMensaje.textContent = "El mensaje es obligatorio.";
        isValid = false;
    } else if (mensaje.length < 10) {
        errorMensaje.textContent = "El mensaje debe tener al menos 10 caracteres.";
        isValid = false;
    }

    // Si todos los campos son válidos, muestra un mensaje de éxito
    if (isValid) {
        alert("Formulario enviado correctamente.");
        
    }
});




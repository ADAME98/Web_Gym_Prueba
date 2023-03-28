document.addEventListener("DOMContentLoaded", function () {
    // Agrega la función para el botón de envío del formulario de contacto
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Gracias por contactarnos. Tu mensaje ha sido enviado.");
            contactForm.reset();
        });
    }

    // Agrega la función para el botón de suscripción al boletín informativo
    const newsletterForm = document.querySelector("form.form-inline");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const emailInput = document.getElementById("correoBoletin");
            alert(
                `Gracias por suscribirte al boletín informativo, ${emailInput.value}.`
            );
            newsletterForm.reset();
        });
    }

    // Agrega la función para el cambio de color de los títulos de sección al pasar el cursor
    const sectionTitles = document.querySelectorAll("section h2");
    sectionTitles.forEach(function (title) {
        title.addEventListener("mouseenter", function () {
            title.classList.add("text-gym-secondary");
        });
        title.addEventListener("mouseleave", function () {
            title.classList.remove("text-gym-secondary");
        });
    });
});

// Función para el botón "Volver arriba"
function scrollToTop() {
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.id = "scrollTopBtn";
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.style.position = "fixed";
    scrollTopBtn.style.bottom = "20px";
    scrollTopBtn.style.right = "20px";
    scrollTopBtn.style.zIndex = "1000";
    scrollTopBtn.style.border = "none";
    scrollTopBtn.style.backgroundColor = "#1a1a1a";
    scrollTopBtn.style.color = "#fff";
    scrollTopBtn.style.cursor = "pointer";
    scrollTopBtn.style.padding = "10px";
    scrollTopBtn.style.borderRadius = "5px";
    scrollTopBtn.style.display = "none";

    document.body.appendChild(scrollTopBtn);

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });
}

scrollToTop();

// Función para mostrar el modal de promoción especial automáticamente
$(document).ready(function () {
    setTimeout(function () {
        $('#promoModal').modal('show');
    }, 3000);
});

// Función para la sección de contador
function updateCounter(elementId, targetValue) {
    const element = document.getElementById(elementId);
    let currentValue = parseInt(element.textContent, 10);
    const increment = Math.ceil((targetValue - currentValue) / 100);

    function updateValue() {
        currentValue += increment;
        if (currentValue < targetValue) {
            element.textContent = currentValue;
            requestAnimationFrame(updateValue);
        } else {
            element.textContent = targetValue;
        }
    }

    requestAnimationFrame(updateValue);
}

updateCounter("membersCount", 5000);
updateCounter("trainersCount", 200);
updateCounter("classesCount", 50);

// Animación de aparición de elementos al hacer scroll
function onElementInView(element, callback) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                callback(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(element);
}

function animateElement(element) {
    element.classList.add('animated', 'fadeInUp');
}

document.querySelectorAll('.animate-on-scroll').forEach((element) => {
    onElementInView(element, animateElement);
});

// Inicialización del carrusel de testimonios
$('#testimonialCarousel').carousel({
    interval: 5000
});

$(document).ready(function () {
    // Animación al hacer scroll
    $(window).scroll(function () {
        $('.animate-scroll').each(function () {
            var posicionElemento = $(this).offset().top;
            var posicionScroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (posicionScroll + windowHeight > posicionElemento) {
                $(this).addClass('animate__fadeIn');
            }
        });
    });
});

// Función para hacer que el menú de navegación sea fijo
function fixedNavbar() {
    const navbar = document.querySelector('.navbar');
    const sticky = navbar.offsetTop;

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > sticky) {
            navbar.classList.add('fixed-top');
        } else {
            navbar.classList.remove('fixed-top');
        }
    });
}

fixedNavbar();

// Función para crear una galería de imágenes con efecto lightbox
function lightboxGallery() {
    const images = document.querySelectorAll('.gallery img');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.display = 'none';
    lightbox.style.position = 'fixed';
    lightbox.style.zIndex = '1000';
    lightbox.style.left = '0';
    lightbox.style.top = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    document.body.appendChild(lightbox);

    images.forEach((image) => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightbox.style.justifyContent = 'center';
            lightbox.style.alignItems = 'center';
            const img = document.createElement('img');
            img.src = image.src;
            img.style.maxWidth = '90%';
            img.style.maxHeight = '90%';
            img.style.borderRadius = '5px';
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
}

lightboxGallery();

// Función para cambiar el tema de la página
function toggleTheme() {
    const themeToggleButton = document.createElement('button');
    themeToggleButton.id = 'themeToggleButton';
    themeToggleButton.innerHTML = 'Cambiar tema';
    themeToggleButton.style.position = 'fixed';
    themeToggleButton.style.bottom = '20px';
    themeToggleButton.style.left = '20px';
    themeToggleButton.style.zIndex = '1000';
    themeToggleButton.style.border = 'none';
    themeToggleButton.style.backgroundColor = '#1a1a1a';
    themeToggleButton.style.color = '#fff';
    themeToggleButton.style.cursor = 'pointer';
    themeToggleButton.style.padding = '10px';
    themeToggleButton.style.borderRadius = '5px';

    document.body.appendChild(themeToggleButton);

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
}

toggleTheme();
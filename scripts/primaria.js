// Variables para el contenedor de las imágenes y los botones
const slider = document.querySelector('.bautismos');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Variables para controlar el índice de la imagen visible
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.bautismo').length;

// Función para actualizar el transform y mover el slider
function updateSlider() {
    const offset = -currentIndex * 33.33; // Cada imagen tiene un ancho de 33.33%
    slider.style.transform = `translateX(${offset}%)`;
}

// Función para avanzar al siguiente slide
function nextSlide() {
    if (currentIndex < totalSlides - 1) { // Comprobamos que no estemos en el último slide
        currentIndex++;
        updateSlider();
    }
}

// Función para retroceder al slide anterior
function prevSlide() {
    if (currentIndex > 0) { // Comprobamos que no estemos en el primer slide
        currentIndex--;
        updateSlider();
    }
}

// Añadir eventos a los botones
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

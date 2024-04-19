// Rotate icon based on scroll position
window.addEventListener('scroll', function() {
    var logo = document.querySelector('.icon-under-carousel');
    var scrollPosition = window.scrollY;
    // Adjust rotation to make it smoother and more visually appealing
    var rotation = scrollPosition / 5; // You can adjust the division factor to control the rotation speed
    logo.style.transform = 'rotate(' + rotation + 'deg)';
});

function ampliarImagen(images) {
    document.getElementById("imagenModalSrc").src = images;
  }
  
  // script.js

  document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón de ordenar
    var ordenarBtn = document.getElementById('ordenarBtn');

    // Agregar un listener de clic al botón de ordenar
    ordenarBtn.addEventListener('click', function() {
        // Obtener todas las tarjetas
        var tarjetasContainer = document.querySelector('.album .container');
        var tarjetas = tarjetasContainer.querySelectorAll('.row .col');

        // Convertir NodeList a un array para poder usar el método sort()
        var tarjetasArray = Array.from(tarjetas);

        // Ordenar las tarjetas por precio de menor a mayor
        tarjetasArray.sort(function(a, b) {
            var precioA = parseFloat(a.querySelector('.precio').innerText.replace('"', '').replace('$', '').replace(/,/g, ''));
            var precioB = parseFloat(b.querySelector('.precio').innerText.replace('"', '').replace('$', '').replace(/,/g, ''));

            return precioA - precioB;
        });

        // Limpiar el contenedor de tarjetas
        tarjetasContainer.innerHTML = '';

        // Agregar las tarjetas ordenadas al contenedor
        tarjetasArray.forEach(function(tarjeta) {
            tarjetasContainer.appendChild(tarjeta);
        });
    });
});
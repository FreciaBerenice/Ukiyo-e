const openBtn = document.getElementById('openBtn');
const closeFormBtn = document.getElementById('closeFormBtn');
const closeMessageBtn = document.getElementById('closeMessageBtn');
const popupForm = document.getElementById('popupForm');
const popupMessage = document.getElementById('popupMessage');

openBtn.addEventListener('click', function() {
  popupForm.style.display = 'block';
});

closeFormBtn.addEventListener('click', function() {
  popupForm.style.display = 'none';
});

popupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  popupForm.style.display = 'none';
  popupMessage.style.display = 'block';
});

closeMessageBtn.addEventListener('click', function() {
  popupMessage.style.display = 'none';
});

// Esperamos a que se cargue completamente el contenido de la página
document.addEventListener("DOMContentLoaded", function() {
  // Obtenemos el footer
  var footer = document.querySelector('.footer');

  // Función para verificar si el footer debe mostrarse
  function checkFooter() {
    // Obtenemos la altura del footer
    var footerHeight = footer.offsetHeight;

    // Obtenemos la altura total de la ventana (incluyendo el contenido que no está visible debido al desplazamiento)
    var windowHeight = window.innerHeight;

    // Obtenemos la posición vertical actual del scroll
    var scrollY = window.scrollY || window.pageYOffset;

    // Calculamos la distancia entre el final del contenido visible y el final de la página
    var distanceToBottom = document.body.offsetHeight - (scrollY + windowHeight);

    // Si la distancia al final es menor que la altura del footer, mostramos el footer
    if (distanceToBottom < footerHeight) {
      footer.style.display = 'block';
    } else {
      footer.style.display = 'none';
    }
  }

  // Llamamos a la función checkFooter cuando se desplace la página
  window.addEventListener('scroll', checkFooter);

  // Llamamos a la función checkFooter también cuando cambie el tamaño de la ventana
  window.addEventListener('resize', checkFooter);
  
  // Llamamos a checkFooter una vez para asegurarnos de que el footer se muestre correctamente al cargar la página
  checkFooter();
});









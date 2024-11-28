// Función para alternar el acordeón
  function toggleAccordion(id) {
    const container = document.getElementById(id);
    const icon = container.previousElementSibling.querySelector('svg');
    
    // Alternar la visibilidad
    if (container.classList.contains('hidden')) {
      container.classList.remove('hidden');
      icon.classList.add('rotate-180'); // Rotar el icono hacia abajo
    } else {
      container.classList.add('hidden');
      icon.classList.remove('rotate-180'); // Rotar el icono hacia arriba
    }
  }
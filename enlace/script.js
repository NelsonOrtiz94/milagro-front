window.addEventListener("wheel", function(event) {
  event.preventDefault();
  window.scrollBy({
      top: event.deltaY * 0.5, // Ajusta este valor para cambiar la sensibilidad
      behavior: "smooth"
  });
}, { passive: false });


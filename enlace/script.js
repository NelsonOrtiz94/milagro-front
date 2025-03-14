document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".testimonio img");

  // Lista de imágenes de respaldo en orden (hombre, mujer, hombre, mujer)
  const fallbackImages = ["img/default-male.jpg", "img/default-female.jpg", "img/default-male.jpg", "img/default-female.jpg"];

  images.forEach((img, index) => {
      img.onerror = function () {
          this.onerror = null; // Evita el bucle infinito
          this.src = fallbackImages[index]; // Asigna la imagen correspondiente
      };
  });
});

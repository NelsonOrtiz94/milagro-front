window.addEventListener(
  "wheel",
  function (event) {
    event.preventDefault();
    window.scrollBy({
      top: event.deltaY * 10, // Ajusta este valor para cambiar la sensibilidad
      behavior: "smooth",
    });
  },
  { passive: false }
);

document.querySelectorAll('a[href*="w.app/"]').forEach((boton) => {
  boton.addEventListener("click", () => {
    gtag("event", "conversion", {
      send_to: "AW-16932118716/rFSvCLLyqa0aELzB7ok_",
    });
  });
});

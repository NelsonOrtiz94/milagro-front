document.querySelectorAll('a[href*="w.app/"]').forEach((boton) => {
  boton.addEventListener("click", () => {
    gtag("event", "conversion", {
      send_to: "AW-16932118716/rFSvCLLyqa0aELzB7ok_",
    });
  });
});

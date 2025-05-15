// Ejecutar el evento solo cuando se haga clic o envíe un formulario
document.querySelectorAll('.whatsapp-float, .call-float').forEach(boton => {
  boton.addEventListener('click', () => {
    gtag('event', 'conversion', {
      'send_to': 'AW-16932118716/rFSvCLLyqa0aELzB7ok_'
    });
  });
});


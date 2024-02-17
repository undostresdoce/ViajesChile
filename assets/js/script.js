$(document).ready(function () {
  // Inicializar tooltips
  $('[data-bs-toggle="tooltip"]').tooltip();

  // Titulos
  let avion = $("#avion");
  let montana = $("#montana");
  let camino = $("#camino");

  // Parrafos
  let pavion = $("#pavion");
  let pmontana = $("#pmontana");
  let pcamino = $("#pcamino");

  avion.click(function () {
    pavion.toggle();
  });

  montana.click(function () {
    pmontana.toggle();
  });

  camino.click(function () {
    pcamino.toggle();
  });

  // Resalta las tarjetas al pasar el puntero
  $(".card").hover(
    function () {
      $(this).addClass("highlight");
    },
    function () {
      $(this).removeClass("highlight");
    }
  );

  // Añadir un evento click al botón
  $("#btnEnviar").click(function () {
    alert("¡Mensaje enviado con éxito!");
  });

  // Agregar evento de clic a las tarjetas
  $(".card").click(function () {
    // Mostrar alerta al hacer clic en una tarjeta
    alert("¡Viaja con nosotros!");
  });

  // Toggle de logo en el menú de navegación
  $("#nav-mundo").click(function () {
    $("#logo-mundo").toggle();
  });
});

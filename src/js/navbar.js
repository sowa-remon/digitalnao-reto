// Función para cambiar el enlace activo en la barra de navegación cuando se desplaza hacia una sección
export function cambiarEnlaceActivo() {
    var secciones = document.querySelectorAll('.seccion');
    var enlaces = document.querySelectorAll('.nav-link');
  
    secciones.forEach(function(seccion, index) {
      var distanciaDesdeLaCima = seccion.getBoundingClientRect().top;
  
      if (distanciaDesdeLaCima < window.innerHeight / 2) {
        enlaces.forEach(function(enlace) {
          enlace.classList.remove('active'); // Eliminar la clase 'active' de todos los enlaces
        });
        enlaces[index].classList.add('active'); // Añadir la clase 'active' al enlace correspondiente
      }
    });
  }
  
  // Llamar a la función cuando se desplaza la página
  window.addEventListener('scroll', cambiarEnlaceActivo);
  
  // Llamar a la función cuando se hace clic en un enlace
  document.querySelectorAll('.nav-link').forEach(function(enlace) {
    enlace.addEventListener('click', function() {
      document.querySelectorAll('.nav-link').forEach(function(enlace) {
        enlace.classList.remove('active'); // Eliminar la clase 'active' de todos los enlaces
      });
      this.classList.add('active'); // Añadir la clase 'active' al enlace clicado
    });
  });
  
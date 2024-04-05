// colores principales
const darkGreen = "#12372A";
const light = "#FBFADA";

// Función para cambiar el color de fondo cuando se desplaza hacia una sección
function changeBG() {
  var navbar = document.getElementById("navbar");
  var home = document.getElementById("home");
  var linkHome = document.getElementById("link-home");
  var about = document.getElementById("about");
  var linkAbout = document.getElementById("link-about");
  var signup = document.getElementById("signup");
  var linkSignup = document.getElementById("link-signup");
  var brandLight = document.getElementById("brand-light");
  var brandDark = document.getElementById("brand-dark");
  var distanciaHome = home.getBoundingClientRect().top;
  var distanciaAbout = about.getBoundingClientRect().top;
  var distanciaSignup = signup.getBoundingClientRect().top;

  if (distanciaHome < window.innerHeight / 2) {
    document.body.style.backgroundColor = darkGreen;
    navbar.style.backgroundColor = darkGreen;
    linkHome.classList.add("active");
    linkAbout.classList.remove("active");
    linkAbout.style.color = "";
    linkSignup.classList.remove("active");
    brandLight.style.display= 'block';
    brandDark.style.display= 'none';
  }

  // Si la sección "Sobre mí" está visible
  if (distanciaAbout < window.innerHeight / 2) {
    document.body.style.backgroundColor = light;
    navbar.style.backgroundColor = light;
    linkHome.classList.remove("active");
    linkAbout.classList.add("active");
    linkAbout.style.color = darkGreen;
    linkSignup.classList.remove("active");  
    brandLight.style.display= 'none';
    brandDark.style.display= 'block';
  
  }

  // Si la sección de registro está visible
  if (distanciaSignup < window.innerHeight / 2) {
    document.body.style.backgroundColor = darkGreen;
    navbar.style.backgroundColor = darkGreen;
    linkHome.classList.remove("active");
    linkAbout.classList.remove("active");
    linkAbout.style.color = "";
    linkSignup.classList.add("active");
    brandLight.style.display= 'block';
    brandDark.style.display= 'none';
  
  }
}

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault()
      if (!form.checkValidity()) {

        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// Llamar a la función cuando se desplaza la página
window.addEventListener("scroll", changeBG);

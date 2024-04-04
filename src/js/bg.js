
const darkGreen = '#12372A';
const light = '#FBFADA';

// Función para cambiar el color de fondo cuando se desplaza hacia una sección
export function changeBG() {
  
    var navbar = document.getElementById('navbar');
    var navActive = document.querySelector('.active');
    var home = document.getElementById('home');
    var about = document.getElementById('about');
    var signup = document.getElementById('signup');

    var distanciaHome = home.getBoundingClientRect().top;
    var distanciaAbout = about.getBoundingClientRect().top;
    var distanciaSignup = signup.getBoundingClientRect().top;
  
    if (distanciaHome < window.innerHeight / 2) {
        document.body.style.backgroundColor = darkGreen;
        navbar.style.backgroundColor = darkGreen;
      }
    
      // Si la sección 2 está visible
    if (distanciaAbout < window.innerHeight / 2) {
    document.body.style.backgroundColor = light;
    navbar.style.backgroundColor = light;
    
    }

    // Si la sección 3 está visible
    if (distanciaSignup < window.innerHeight / 2) {
    document.body.style.backgroundColor = darkGreen;
    navbar.style.backgroundColor = darkGreen;
    }
}

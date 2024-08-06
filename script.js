//alert("Hola Mundo! <3");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {

  loop: true,

  delay: 75,

});

// Usar el punto es para llamar a una propiedad o a una acción del objeto.

// Acciones se distinguen por los paréntesis ()

typewriter

  .pauseFor(2500)

  .typeString('Isabel Garcia Contreras')

  .pauseFor(300)

  .deleteAll()

  .typeString('Estudiante de ingenieria Industrial')

  .pauseFor(1000)

  .start();
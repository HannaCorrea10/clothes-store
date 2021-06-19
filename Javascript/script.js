let numero1 = 200;
let numero2 = 10;
let nombre = "Ely";
let apellido = "Correa";
let esHombre = false;
let nombreEstudiantes = ["jose", "Hanna", "Pipe", "Francy", "Manuela", "Yesid"];
let edadesEstudiantes = [25, 23, 25, 21, 24, 25];

function sumar() {
  console.log(numero1 + numero2);
}

function restar() {
  console.log(numero1 - numero2);
}

function multiplicar() {
  console.log(numero1 * numero2);
}

function dividir() {
  console.log(numero1 / numero2);
}

function presentarme() {
  console.log("Mi nombre es ", nombre, ", mi apellido es ", apellido);
}

function miGenero() {
  if (esHombre === true) {
    console.log("Soy un hombre");
  } else {
    console.log("Soy una mujer");
  }
}

function imprimirEdad(posicion) {
  console.log(
    "EL estudiante ",
    nombreEstudiantes[posicion],
    "tiene ",
    edadesEstudiantes[posicion],
    "años"
  );
}

presentarme();
//miGenero();
//imprimirEdad(0);

/*for (let i = 0; i < nombreEstudiantes.length; i = i + 1) {
  console.log(
    "el estudiante " +
      nombreEstudiantes[i] +
      " tiene " +
      edadesEstudiantes[i] +
      " años"
  );
}

for (let i = 0; i < edadesEstudiantes; i = i + 1) {
  console.log(edadesEstudiantes[i]);
}*/

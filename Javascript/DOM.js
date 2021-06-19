// Document Object Model. Es la forma como manipulamos el html desde el Javascript

function buscar() {
  let barraBusqueda = document.getElementById("barraDeBusqueda");
  let usuario = document.getElementById("iconoPerfil");
  usuario.innerHTML = barraBusqueda.value;
}

function agregarAlCarrito() {
  let test = document.getElementById("test");
  console.log(test.children.forEach((item) => {}));
}

//Crea una lista de contactos con datos predefinidos, cada contacto debe contener
//el nombre y apellido como una sola cadena de caracteres

const lista_Contacto = [
  {
    Nombre: "Elvin Herrera",
    Edad: 29,
    Email: "elvinherrera16@gmail.com",
    Telefono: 3002887944,
  },
  {
    Nombre: "María Peréz",
    Edad: 35,
    Email: " MaryPerez@gmail.com",
    Telefono: 3205584478,
  },
  {
    Nombre: "Ana Peréz",
    Edad: 25,
    Email: " anaPerez@gmail.com",
    Telefono: 3005584478,
  },
];

//Crea una función para añadir un nuevo contacto a una lista

function agregarContacto({ Nombre, Edad, Email, Telefono }) {
  const nuevoContacto = {
    Nombre: "Jhosua",
    Edad: 28,
    Email: " JCoronel@gmail.com",
    Teléfono: 3002154575,
  };

  lista_Contacto.push(nuevoContacto);
  console.log(lista_Contacto);
}
agregarContacto(lista_Contacto);

// Crea una función para borrar un contacto existente de la lista
function eliminarContacto({ Nombre, Edad, Email, Teléfono }) {
  let elementoEliminado = lista_Contacto.pop();
  console.log(lista_Contacto);
}
eliminarContacto(lista_Contacto);

//Crea una función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
  for (var i = 0; i < lista_Contacto.length; i++) {
    console.log(lista_Contacto[i]);
  }
}
imprimirContactos();

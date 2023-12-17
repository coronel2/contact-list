
const lista_Contacto = [
  {
    id: 1702788010527,
    nombre: "Juana Perez",
    edad: 19,
    email: "juanan155@gmail.com",
    telefono: 30122255447,
    ubicacion: {
      ciudad: "Medellin",
      direccion: "comuna 13",
    },
  },
];

// nuevo Contacto

function agregarContacto(
  nombre,
  edad,
  email,
  telefono,
  ubicacion,
  ciudad,
  direccion
) {
  const user = {
    id: Date.now(), //da un id unico
    nombre: nombre,
    edad: edad,
    email: email,
    telefono: telefono,
    ubicacion: {
      ciudad: ciudad,
      direccion: direccion,
    },
  };
  lista_Contacto.push(user);
}

const user1 = agregarContacto(
  "elvin Herrera",
  25,
  "elvinherrera16@gmail.com",
  321022200,
  "Bolivar",
  "cartagena",
  "olaya herrera"
);
const user2 = agregarContacto(
  "Jvin Hera",
  30,
  "el556@gmail.com",
  311122200,
  "Usa",
  "Florida",
  "Palm beach"
);

console.log(lista_Contacto);

// Crea una función para borrar un contacto  de la lista
function eliminarContacto(id) {
  const user = lista_Contacto.findIndex((user) => user.id === id);
  if (user !== -1) {
    lista_Contacto.splice(user, 1);
    console.log(`Usuario con el id ${id} eliminada con éxito.`);
  } else {
    console.log(`No se encontró ninguna usuario con el id ${id}.`);
  }
}

const eliminar = eliminarContacto(1702788010527);

//Crea una función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
  for (var i = 0; i < lista_Contacto.length; i++) {}
  console.log(lista_Contacto[i]);
}

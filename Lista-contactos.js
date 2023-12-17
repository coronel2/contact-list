
//Crea una lista de contactos con datos predefinidos, cada contacto debe contener
//el nombre y apellido como una sola cadena de caracteres

const lista_Contacto = [
  { id:1,
    Nombre: "Elvin Herrera",
    Edad: 29,
    Email: "elvinherrera16@gmail.com",
    Telefono: 3002887944,
  },
  { id:2,
    Nombre: "María Peréz",
    Edad: 35,
    Email: " MaryPerez@gmail.com",
    Telefono: 3205584478,
  },
  { id:3,
    Nombre: "Ana Peréz",
    Edad: 25,
    Email: " anaPerez@gmail.com",
    Telefono: 3005584478,
  },
];

//Crea una función para añadir un nuevo contacto a una lista

function agregarContacto( nombre, edad, email, telefono ) {
  const user= {
    id: Date.now(), //da un id unico
    nombre: nombre,
    edad: edad,
    email: email,
    telefono: telefono
  };
 
  lista_Contacto.push(user);
  console.log(lista_Contacto);
}


// Crea una función para borrar un contacto existente de la lista
function eliminarContacto(id) {

const user= lista_Contacto.findIndex(user => user.id === id)
if (user !== -1) {
  lista_Contacto.splice(user, 1);
  console.log(`Usuario con el id ${id} eliminada con éxito.`);
} else {
  console.log(`No se encontró ninguna usuario con el id ${id}.`);
}

}


//Crea una función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
  for (var i = 0; i < lista_Contacto.length; i++) {
    console.log(lista_Contacto[i]);
  }
}



agregarContacto(" Pedro",25, "juancito@gmail.com", 3124558755)
eliminarContacto(2)

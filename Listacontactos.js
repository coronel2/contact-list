
const lista_Contacto = [];

 // nuevo Contacto
 function Contacto (id, Nombre,Apellido,Edad, Email, Teléfono, ciudad, Direccion){ 

        this.id = id;
        this.Nombre = Nombre,
        this.Apellido = Apellido,
        this.Edad = Edad,
        this.Email =Email,
        this.Teléfono = Teléfono,
        this.Ubicación = {
                  ciudad: ciudad,
                  Direccion: Direccion,
                 }

                
}

  let contacto1 = new Contacto (0,'Elvin', 'Herrera',  29, 'elvinherrera16@gmail.com', 3002887944, 'Cartagena', 'Olaya Herrera, sector Playas Blancas')
 lista_Contacto.push(contacto1)

 let contacto2 = new Contacto (1,'Kevin', 'Florez',  29, 'kevinflorez@gmail.com', 3005887944, 'Bolivar', 'La Estela sector Playas Blancas')
 lista_Contacto.push(contacto2)
 
 let contacto3 = new Contacto (2,'Junior', 'Marin',  25, 'Jm@gmail.com', 3005587944, 'Sucre', ' sector Las Delicias')
 lista_Contacto.push(contacto3)

 console.log(lista_Contacto);


 //Eliminar contacto(el Ultimo)
function eliminarContacto(){
   let removerContacto = [1];
  lista_Contacto.pop(removerContacto)
  
}
eliminarContacto();
console.log(lista_Contacto)

 //imprimir los contactos presentes en la lista.


 function imprimir (){ 

  for(var i=0; i<lista_Contacto.length; i++){

   }

 }

imprimir();
console.log(lista_Contacto)
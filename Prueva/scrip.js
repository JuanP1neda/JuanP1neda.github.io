// //OBJETOS
// let nombre;
// let apellido;
// let edad;
// //variables de objetos
// let persona = {
//     nombre: "Juan", 
//     apellido: "Pineda", 
//     edad: 20 
// };
// console.log(persona);
// console.log(persona.nombre);
// console.log(persona['edad']);
// let llave = 'apellido';
// console.log(persona[llave]);

// //se elimina una variable
// delete persona.apellido;
// console.log(persona);
// //FIN OBJETOS


// //ARRAY
// let animales = ['Caballo', 'Cerdo'];
// console.log(animales);
// console.log(animales[0]);
// animales[2] = 'dragon';
// console.log(animales);

// animales[10] = 'Pez';
// console.log(animales);

// console.log(animales.length);
// //FIN ARRAY


// //FUNCTION
// function suma(a, b) {
//     return a + b;
// }
// let resultado = suma(5, 6);
// console.log(resultado)
// //FIN FUNCTION


//CAMBIAR COLOR
function color(nuevoColor){
const elem = document.getElementById("para");
elem.style.color = nuevoColor;
}
//CAMBIAR COLOR FIN


// MOSTRAR TEXTO

function ver(){
    let texto = document.getElementById("text").value;
    alert(texto);
}
// MOSTRAR TEXTO FIN


function rellenar(nuevoColor1){
    let relleno = document.getElementById("para");
    relleno.style.backgroundColor = nuevoColor1;
}
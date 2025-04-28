function iniciarSesion(){
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("contraseña").value;

        
        if (user === "Skyblue2005") {
          if (pass==="3013196606Juanpineda") {
            modal.showModal()
          }else{
            modalPassMal.showModal()
          }
        } else {
            modalUserMal.showModal()
        }
}  

const pass = document.getElementById("contraseña");
const verPassButton = document.getElementById("verPass");
let passwordVisible = false;

verPassButton.addEventListener("click", () => {
  passwordVisible = !passwordVisible;
  pass.type = passwordVisible ? "text" : "password";
});

function regístrate(){
  alert("Recuerda amor en 'Respuesta del Acertijo' escribe en minúscula")
  modalAcertijos.showModal();
}

function comprobarAcertijo(){
  let resp = document.getElementById("acertijocText").value;

  if(resp === 'contraseña del pc' || resp === 'clave del pc' || resp === 'contraseña del portátil' || resp === 'contraseña del portatil' || resp === 'clave del portatil' || resp === 'clave del portátil' || resp === 'la contraseña del pc' || resp === 'la clave del pc' || resp === 'la contraseña del portátil' || resp === 'la contraseña del portatil' || resp === 'la clave del portatil' || resp === 'la clave del portátil') {

    alert("muy bien bien amor, esa es la respuesta, ahora bien la contraseña de mi portátil es la contraseña que usaras como contraseña para acceder a la pagina")

  }else{
    alert("No amor, sigue inténtalo y si no lo logras me puedes escribir y te doy pista o la respuesta")
  }
}
        

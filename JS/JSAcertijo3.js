

function acertijo3_1(){
    let mal = Math.round(Math.random() *2)

    if(document.getElementById("cumpleaños").checked)
        {
            alert("¡¡Muy bien amor, sigue así!!");
        
        }else{
            if(mal=="0"){
                alert("No amor, esa no es la respuesta");
            }else if(mal=="1"){
                alert("Esta mal mi niña, inténtalo otra vez");
            }else if(mal=="2"){
                alert("Venga amor tu puedes, te equivocaste pero aun lo puedes lograr")
            }
        }
}   

function acertijo3_2(){
    let mal = Math.round(Math.random() *2)

    if(document.getElementById("añoNuevo1").checked)
        {
            alert("!!Muy bien mi amor¡¡ Ya casi terminamos");
        
        }else{
            if(mal=="0"){
                alert("No amor, esa no es la respuesta");
            }else if(mal=="1"){
                alert("Esta mal mi niña, inténtalo otra vez");
            }else if(mal=="2"){
                alert("Venga amor tu puedes, te equivocaste pero aun lo puedes lograr")
            }
        }
}

function acertijo3_3(){
    let mal = Math.round(Math.random() *2)

    if(document.getElementById("noviazgo").checked)
        {
            alert("Muy bien mi amor vallamos al ultimo punto");
        
        }else{
            if(mal=="0"){
                alert("No amor, esa no es la respuesta");
            }else if(mal=="1"){
                alert("Esta mal mi niña, inténtalo otra vez");
            }else if(mal=="2"){
                alert("Venga amor tu puedes, te equivocaste pero aun lo puedes lograr")
            }
        }
}

function acertijo3_cuestTodo(){

    if(document.getElementById("cumpleaños").checked && 
    document.getElementById("añoNuevo1").checked && 
    document.getElementById("noviazgo").checked)
        {
            modalCuest.showModal();
        }else{
            modalMal.showModal();
        }
}
function acertijo3_cuestFinal(){
    let resp=document.getElementById("request3_F").value;
    if(resp=="162506"){
        modal.showModal();
        modalCuest.close();
    }else{
        modalMal.showModal();
    }
}
function acertijo3_FAatra(){
    window.location="Acertijo3.html"
}
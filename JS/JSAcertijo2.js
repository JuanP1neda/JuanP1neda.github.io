

function acertijo2_1(){
    let mal = Math.round(Math.random() *2)

    if(document.getElementById("zombie").checked)
        {
            alert("!!Muy bien amor¡¡ Hay vamos");        
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

function acertijo2_2(){
    let mal = Math.round(Math.random() *2)

    if(document.getElementById("tren").checked)
    {
        alert("y baila lento flor morada que me recuerdas a mi amada, ella me esta esperando en casa y yo muriendo por volveer (canta mientras espera)... a ya terminaste amor, bien sigue así");
    
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

function acertijo2_3()
{
    let mal = Math.round(Math.random() *2)

    if(document.getElementById("coreaSur").checked)
        {
            alert("!!ESOOOOO VAMOS SIGUE ASI¡¡");
        
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

function acertijo2_FCuestTodo(){

    if(document.getElementById("zombie").checked &&
    document.getElementById("tren").checked &&
    document.getElementById("coreaSur").checked)
    {
        modalCuest.showModal();
    }else{
        modalMal.showModal();
    }
}
function acertijo2_FCuestFin(){
    if(document.getElementById("EstaciónZ").checked){
        modal.showModal();
        modalCuest.close();
    }else{
        modalMal.showModal();
    }
}

function acertijo2_FAatra(){
    window.location="Acertijo2.html"
}
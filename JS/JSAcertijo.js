

function acertijo1_1(){
    let mal = Math.round(Math.random() *2);

    if(document.getElementById("amor").checked)
    {
        alert("!!Correcto¡¡ Empezamos bien");
    
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

function acertijo1_2(){
    let mal = Math.round(Math.random() *2)

    if(document.getElementById("dia").checked)
    {
        alert("Muy bien mi amor");
    
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

function acertijo1_3(){
    let mal = Math.round(Math.random() *2)

    if(document.getElementById("parejas").checked)
        {
            alert("!!Perfecto amor¡¡");
        }else if(mal=="0"){
            alert("No amor, esa no es la respuesta");
        }else if(mal=="1"){
            alert("Esta mal mi niña, inténtalo otra vez");
        }else if(mal=="2"){
            alert("Venga amor tu puedes, te equivocaste pero aun lo puedes lograr")
        }
}

function acertijo1_FCuestTodo(){

    if( document.getElementById("amor").checked &&
    document.getElementById("dia").checked && 
    document.getElementById("parejas").checked)
    {
        modalCuest.showModal();
    }else{
        modalMal.showModal();
    }
}

function acertijo1_FF(){
    if(document.getElementById("SanValentin").checked){
        modal.showModal();
        modalCuest.close()
    }else{
        modalMal.showModal();
    }
}

function acertijo1_FAatra(){
    window.location="Acertijo.html"
}

iniciarTemporizador(10, "h1");

function formatearTemporizador(seg){
    let min = Math.floor(seg / 60);
    let fseg = seg - (Math.floor(seg/60)*60 );

    min = min > 9 ? min : "0" + min;
    fseg = fseg > 9 ? fseg : "0" + fseg;
    return min + ":" + fseg;
}

function iniciarTemporizador(tiempo, elemento, cb = console.log){
    document.tiempo = tiempo;
    document.querySelector(elemento).innerHTML = formatearTemporizador(document.tiempo);
    document.temporizador = setInterval(function(){
        document.tiempo--;
        document.querySelector(elemento).innerHTML = formatearTemporizador(document.tiempo);
        if(document.tiempo <= 0){
            clearInterval(document.temporizador);
            cb("Aqui se puede ejecutar la funcion necesaria de cuando se acaba el tiempo");
        }    

    }, 1000);
}
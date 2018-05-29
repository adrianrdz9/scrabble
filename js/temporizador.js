/***************************************************************/
/*    Dar formato mm:ss                                        */
/*    Parametros:                                              */ 
/* 1.- seg -> Segundos para dar formato, minimo 0, maximo 3599 */
/*    Salida:                                                  */
/*      Cadena ya con formato                                  */
/*        Tipo -> string                                       */
/************************************************************* */
function formatearSegundo(seg){
    let min = Math.floor(seg / 60);
    let fseg = seg - (Math.floor(seg/60)*60 );

    min = min > 9 ? min : "0" + min;
    fseg = fseg > 9 ? fseg : "0" + fseg;
    return min + ":" + fseg;
}

/***************************************************************/
/*    Iniciar el temporizador                                  */
/*    Parametros:                                              */ 
/* 1.- tiempo -> Segundos con los que se empieza,              */
/*               minimo 0, maximo 3599                         */
/* 2.- elemento -> Selector para el elemento donde             */ 
/*                 se mostrara el tiempo                       */
/* 3.- cb -> Funcion que se ejecutara cuando el                */
/*           tiempo llegue a 0                                 */
/*    Salida:                                                  */
/*        Tipo -> undefined                                       */
/************************************************************* */
function iniciarTemporizador(tiempo, elemento, cb = alert){
    document.tiempo = tiempo;
    document.querySelector(elemento).innerHTML = formatearSegundo(document.tiempo);
    document.temporizador = setInterval(function(){
        document.tiempo-= 0.1;
        document.querySelector(elemento).innerHTML = formatearSegundo(Math.ceil(document.tiempo));
        if(document.tiempo <= 0){
            clearInterval(document.temporizador);
            clearInterval(document.bonus);
            cb("Se acabo el tiempo");
        }    

    }, 100);
}
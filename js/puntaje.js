var letras = [];
letras[0] = ["0"];
letras[1] = ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"];
letras[2] = ["D", "G"];
letras[3] = ["B", "C", "M", "P"];
letras[4] = ["F", "H", "V", "Y"];
letras[5] = ["CH", "Q"];
letras[6] = ["0"];
letras[7] = ["0"];
letras[8] = ["J", "LL", "Ñ", "RR", "X"];
letras[9] = ["0"];
letras[10] = ["Z"];
//console.log(letras);

function obtenerPuntaje(palabra){
    var miArre = new Array();
    var pala = palabra.toUpperCase().split("");
    var x = 0;
    var cont = 0;
    var beat;
    for (var i of pala){
        for(x = 0; x<=10; x++){
            var pos = letras[x].indexOf(i);
            if(pos>-1){
            //console.log("soy arre"+x);
            beat = parseInt(x);
            //console.log("soy beat "+beat);
            cont=cont+beat;
            }
        }
    }

    return cont;
}

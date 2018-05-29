let c = document.querySelector("#fichas");
let ctx1 = c.getContext("2d");

var fichas = ["A", "B", "C", "D", "E", "F", "G"];
var f = [...fichas];
var palabra = [];

function fichasD(){
    for (let i = 0; i < fichas.length; i++) {
        if(fichas[i] != ""){
            ctx1.fillStyle = "#FFDEAD";
            ctx1.strokeStyle = "#CDB79E";
            ctx1.fillRect(tamCuadro + tamCuadro*(i*2), 100+tamCuadro, tamCuadro, tamCuadro )
            ctx1.strokeRect(tamCuadro + tamCuadro*(i*2), 100+tamCuadro, tamCuadro, tamCuadro )
            ctx1.fillStyle = "black";
            ctx1.font = "24px Arial";
            ctx1.fillText(fichas[i], tamCuadro*1.25 + tamCuadro*(i*2), 100+tamCuadro*1.7 )
        }
        
    }
}

function palD(){
    for (let i = 0; i < palabra.length; i++) {
        ctx1.fillStyle = "#FFDEAD";
        ctx1.strokeStyle = "#CDB79E";
        ctx1.fillRect(tamCuadro + tamCuadro*(i*1.2), tamCuadro, tamCuadro, tamCuadro )
        ctx1.strokeRect(tamCuadro + tamCuadro*(i*1.2), tamCuadro, tamCuadro, tamCuadro )
        ctx1.fillStyle = "black";
        ctx1.font = "24px Arial";
        ctx1.fillText(palabra[i], tamCuadro*1.25 + tamCuadro*(i*1.2), tamCuadro*1.7 )
    }
}

fichasD();


$(c).on("mousemove", function(ev){
    ctx1.clearRect(0,0,canvas.width, canvas.height);
    fichasD();
    palD();
    var rx = x = ev.originalEvent.layerX;
    var ry = y = ev.originalEvent.layerY;

    var px = Math.floor(map(x, 0, c.width, 0, 7));
    x = Math.floor(map(x, 0, c.width, 0, 15));
    x = Math.floor(x/2);
    x = (x*tamCuadro*2)+tamCuadro;
    if(rx >= x && ry >= (100+tamCuadro) && ry <= (100+tamCuadro*2) && fichas[px] != ""){
        ctx1.save();
        ctx1.fillStyle ="rgba(0,0,0,0.3)";
        ctx1.fillRect(x, 100+tamCuadro, tamCuadro,tamCuadro );
        ctx1.restore();
    }
        
    
});

$(c).on("click", function(ev){    
    ctx1.clearRect(0,0,canvas.width, canvas.height);
    fichasD();
    palD();
    var rx = x = ev.originalEvent.layerX;
    var ry = y = ev.originalEvent.layerY;

    var px = Math.floor(map(x, 0, c.width, 0, 7));
    x = Math.floor(map(x, 0, c.width, 0, 15));
    x = Math.floor(x/2);
    x = (x*tamCuadro*2)+tamCuadro;
    if(rx >= x && ry >= (100+tamCuadro) && ry <= (100+tamCuadro*2) && fichas[px] != ""){
        agregarLetra(fichas[px], px );
        fichas[px] = "";
    }
    
})

$("#listo").on("click", function(){
    if(palabra.length == 0){
        alert("Por favor primero arma una palabra")
    }else{
        var p = palabra.join('');
        buscar(p).then((result)=>{
            if(result !== false){
                palabra = [];
                alert("Ahora coloca tu palabra");
                ponerPalabra(p); 
            }else{
                alert("Esa no es una palabra");
            }
        });
    }
})

$("#reset").on("click", function(){
    fichas = f;
    f = [...fichas];
    palabra = [];
    ctx1.clearRect(0,0,c.width,c.height);
    fichasD();
})


function agregarLetra(letra, origin){
    var times = 0;
    var oX = tamCuadro + tamCuadro*(origin*2);
    var oY =  100+tamCuadro;

    var dest = palabra.length 

    var dX = tamCuadro + tamCuadro*(dest*1.2);
    var dY = tamCuadro;

    var stepX = (dX - oX)/100;
    var stepY= (dY - oY)/100;

    var anim  = setInterval(function(){
        if(times >= 99){
            clearInterval(anim);
            palabra.push(letra);
        }
        oX += stepX;
        oY += stepY;

        ctx1.clearRect(0,0,c.width,c.height);

        ctx1.fillStyle = "#FFDEAD";
        ctx1.strokeStyle = "#CDB79E";
        ctx1.fillRect(oX, oY, tamCuadro, tamCuadro )
        ctx1.strokeRect(oX, oY, tamCuadro, tamCuadro )
        ctx1.fillStyle = "black";
        ctx1.font = "24px Arial";
        ctx1.fillText(letra, oX+ tamCuadro/3.7, oY+ tamCuadro/1.45)
        fichasD();
        palD();
        
        times ++;
    }, 2)


    
}


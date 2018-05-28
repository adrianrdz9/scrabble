var canvas = document.querySelector("#tablero");
var ctx = canvas.getContext("2d");
var tamCuadro = canvas.width/15;

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';

    for(var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
        }
        else {
        line = testLine;
        }
    }
    context.fillText(line, x, y);
}

function tablero(){
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
            bgColor = "rgba(0,0,0,0.13)"
            txtColor = "black";
            ctx.save();
    
            if(table[i][j].valores == "TW"){
                bgColor = "orange";            
            }else if(table[i][j].valores == "DL"){
                bgColor = "teal";
                txtColor = "white"
            }else if(table[i][j].valores == "DW"){
                bgColor = "pink";
            }else if(table[i][j].valores == "TL"){
                bgColor = "blue";
                txtColor = "white";
            }else if(table[i][j].valores == "E"){
                bgColor = "red";
                txtColor = "white";
            }else{
                bgColor = "rgba(0,0,0,0.13)"
            }
            ctx.fillStyle = bgColor;
            ctx.fillRect(i*tamCuadro, j*tamCuadro, tamCuadro,tamCuadro);
            ctx.fillStyle = txtColor;
            if(table[i][j].valores == "E"){
                ctx.font = "24px Arial";
                ctx.fillText("E", (i*tamCuadro)+tamCuadro/4.5, (j*tamCuadro)+tamCuadro/1.5 )
            }else{
                wrapText(ctx, table[i][j].casilla, (i*tamCuadro)+5, (j*tamCuadro)+15, tamCuadro-5, 10  )
            }
            ctx.restore()
        }
    }
}

$(document).ready(function(){
     tablero();  
});

iniciarTemporizador(100, "#tiempo");




function ponerPalabra(palabra){
    $(canvas).on("mousemove", function(ev){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        tablero();
        var x = ev.originalEvent.layerX;
        var y = ev.originalEvent.layerY;
        var letras = palabra.split('');
        var posible = true;

        letras.forEach(function(letra, i){
            var xi = x, yi = y;
            xi = Math.floor(map(xi, 0, canvas.width, 0, 15));
            yi = Math.floor(map(yi, 0, canvas.height, 0, 15));

            if(table[xi+i][yi].casilla != "")
                posible = false;
        })
   
        letras.forEach(function(letra, i){
            x = Math.floor(map(x, 0, canvas.width, 0, 15))* tamCuadro;
            y = Math.floor(map(y, 0, canvas.height, 0, 15)) * tamCuadro;
            ctx.save();
            ctx.fillStyle = posible ? "rgba(0,100,0,0.7)" : "rgba(255,0,0,0.7)";
            ctx.fillRect(x+(i*tamCuadro), y, tamCuadro,tamCuadro );
            ctx.fillStyle = "white";
            ctx.font = "24px Arial";
            ctx.fillText(letra.toUpperCase(), x+(i*tamCuadro)+tamCuadro/4.5, y+tamCuadro/1.5);
            ctx.restore();
        });
    });

    $(canvas).on("click", function(ev){    
        var x = ev.originalEvent.layerX;
        var y = ev.originalEvent.layerY;
        var tableResp = new Array();

        x = Math.floor(map(x, 0, canvas.width, 0, 15));
        y = Math.floor(map(y, 0, canvas.height, 0, 15));
        
        var letras = palabra.split('');
        var posible = true;

        letras.forEach(function(letra, i){
            if(table[x+i][y].casilla != "")
                posible = false;
        })
        if(posible){
            letras.forEach(function(letra, i){
                table[x+i][y].casilla = letra;
            })
    
            ctx.clearRect(0,0,canvas.width, canvas.height);
            tablero();
        }
        
    })
}

ponerPalabra("hola");



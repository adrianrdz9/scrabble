var canvas = document.querySelector("#tablero");
var ctx = canvas.getContext("2d");
var tamCuadro = canvas.width/15;

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

for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
        bgColor = "rgba(0,0,0,0.13)"
        txtColor = "black";
        ctx.save();

        if(table[i][j].valores == "TW"){
            bgColor = "orange";            
        }else if(table[i][j].valores == "DL"){
            bgColor = "teal";
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
            ctx.font = "24px FontAwesome";
            ctx.fillText("\uF005", (i*tamCuadro)+tamCuadro/4.5, (j*tamCuadro)+tamCuadro/1.5 )
        }else{
            wrapText(ctx, table[i][j].casilla, (i*tamCuadro)+5, (j*tamCuadro)+15, tamCuadro-5, 10  )
        }
        ctx.restore()
    }
}



  
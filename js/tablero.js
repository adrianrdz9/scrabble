
function tablero(coordenadaX,coordenadaY,valores,casilla){//Objeto tablero
    this.coordenadaX = coordenadaX;
    this.coordenadaY = coordenadaY;
    this.valores = valores;//Letra en el tablero
    this.casilla = casilla;//Casilla especial
};
var maxNum = 15; //tamaño de la tabla
var x, y; //contadores
var table = new Array();

for(x=0; x<maxNum; x++){//renglones
    table[x] = new Array();
    for (y=0; y<maxNum; y++)//columnas
    {
        if((x==0 && y==0)||(x==7 && y==0)||(x==14 && y==0)||(x==0 && y==7)||
            (x==14 && y==7)||(x==0 && y==14)||(x==7 && y==14)||(x==14 && y==14))
            table[x][y] = new tablero(x, y, "TW", "Triple word score");
        else

        if((x==3 && y==0)||(x==11 && y==0)||(x==6 && y==2)||(x==8 && y==2)||
            (x==0 && y==3)||(x==7 && y==3)||(x==14 && y==3)||(x==2 && y==6)||
            (x==6 && y==6)||(x==8 && y==6)||(x==12 && y==6)||(x==3 && y==7)||
            (x==11 && y==7)||(x==2 && y==8)||(x==6 && y==6)||(x==8 && y==8)||
            (x==12 && y==8)||(x==0 && y==11)||(x==7 && y==11)||(x==14 && y==11)||
            (x==6 && y==12)||(x==8 && y==12)||(x==3 && y==14)||(x==11 && y==14))
            table[x][y] = new tablero(x, y, "DL", "Double letter score");
        else
        //for(c=1; c<=4; c++)
            if((x==1 && y==1)||(x==2 && y==2)||(x==3 && y==3)||(x==4 && y==4)||
                (x==13 && y==1)||(x==12 && y==2)||(x==11 && y==3)||(x==10 && y==4)||
                (x==1 && y==13)||(x==2 && y==12)||(x==3 && y==11)||(x==4 && y==10)||
                (x==10 && y==10)||(x==11 && y==11)||(x==12 && y==12)||(x==13 && y==13))
                table[x][y] = new tablero(x, y, "DW", "Double word score");
        else
        if((x==5 && y==1)||(x==9 && y==1)||(x==1 && y==5)||(x==5 && y==5)||
            (x==9 && y==5)||(x==13 && y==5)||(x==1 && y==9)||(x==5 && y==9)||
                (x==9 && y==9)||(x==13 && y==9)||(x==5 && y==13)||(x==9 && y==13))
                table[x][y] = new tablero(x, y, "TL", "Triple letter score");
        else
        if((x==7 && y==7))
            table[x][y] = new tablero(x, y, "E", "Especial");
        else
            table[x][y] = new tablero(x, y, "", "");
        var columnas = document.createElement("td");

    }
}

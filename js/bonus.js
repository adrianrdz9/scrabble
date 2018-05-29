var divbon = document.getElementById("bonusTiempo");
var divpun = document.getElementById("bonusPuntaje");

//alert(i1+" "+i2);

document.bonus = setInterval(function(){
    var i1 = Math.floor(Math.random()*5+1);//del 1 al 5, dpendiendo de este num, aparece el botón bonus
    var i2 = Math.floor(Math.random()*5+1);// del 1 al 5, dependiendo de éste aparece el botón punt

    setTimeout(function(){
        var bon = divbon.children[0];
        bon.classList.remove("esc");
        bon.classList.add("bot");
        mover(bon);
        bon.addEventListener("click", function(){
            document.tiempo ++;
        });
        setTimeout(function(){
            bon.classList.remove("bot");
            bon.classList.add("esc");
        }, 3000);


    }, i1*1000);
    setTimeout(function(){
        var pun = divpun.children[0];
        pun.classList.remove("esc");
        pun.classList.add("bot");
        mover(pun);
        pun.addEventListener("click", function(){
            //Puntaje ++
        });
        setTimeout(function(){
            pun.classList.remove("bot");
            pun.classList.add("esc");
        }, 3000);


    }, i2*1000);
}, 10000);

function mover(boton){
    switch(Math.floor(Math.random()*4)){
        case 0:
            boton.style.top = "5%";
            boton.style.right = "5%";
            break;
        case 1:
            boton.style.left = "5%";
            boton.style.bottom = "5%";
            break;

        case 2:
            boton.style.top = "5%";
            boton.style.left = "5%";
            break;

        case 3:
            boton.style.right = "5%";
            boton.style.bottom = "5%";
            break;

        default:
            boton.style.top = "5%";
            boton.style.right = "5%";
            break;
    }
}
var letrasDisp = ["A","A","A","A","A","A","A","A","A","A",
              "A","A","B","B","C","C","C","C","C","D",
              "D","D","D","D","E","E","E","E","E","E",
              "E","E","E","E","E","E","F","G","G","H",
              "H","I","I","I","I","I","I","J","L","L",
              "L","L","L","M","M","N","N","N","N","N",
              "Ñ","O","O","O","O","O","O","O","O","O",
              "P","P","Q","R","R","R","R","R","R","S",
              "S","S","S","S","S","T","T","T","T","U",
              "U","U","U","U","V","X","Y","Z",];

function obtenerSet(set){
    letrasDisp.push(...set);
    var newSet = [];
    for (let i = 0; i < 7; i++) {
         let l = Math.floor(Math.random() * letrasDisp.length);
         let letra = letrasDisp[l];
         letrasDisp.splice(l, 1);
         newSet.push(letra);
    }

    return newSet;
}
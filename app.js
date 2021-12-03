/* for(var i=0; i<10; i++){
    x = random(0, 1);
    document.write(x);
} */
/* var x = random(10,20); */
/* btn.addEventListener("click", console.log("Funciona")); */ 

var texto = "";

function run(){
    texto = "";
    setTimeout(function () {mensaje.style.display='none'}, 1000);
    mensaje.style.display = "initial";
    ciclo();
}

function ciclo(){
    var largo = 800;
    while (texto.length !== 55) {
        password(largo);     
    }

    if (texto.length == 55){
        /*console.log("El largo del password es de " + texto.length + " chars: " + texto);*/
    }
}


function random(nmin, nmax){
    var resultado = "";
    resultado = Math.floor(Math.random ()* (nmax - nmin + 1)) + nmin;
    return resultado;
}


function password(length){
    let salida = "";
    for(var l=0; l < length; l++){
    let bloque = "";
        for(var i=0; i<10; i++){
            x = random(0, 1);
            bloque = bloque + x;
        }
            salida = salida + " " + bloque;

    }

    let clave = binaryAgent(salida); 
    document.getElementById("main-input").value = clave.replace(/[^1-9a-zA-Z!@%$&?¿]/g, "");
    texto = document.getElementById("main-input").value;
    const aux = document.createElement("input");
    aux.setAttribute("value", texto);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    document.getElementById("mensaje").innerHTML = "Passblock copied to clipboard!";

}


function binaryAgent(str) {
    let binString = "";
    str = str.toString();
    str.split(' ').map(function(bin) {
        binString += String.fromCharCode(parseInt(bin, 2));
      });
    return binString;
}

/* document.getElementById("main-input").value = clave.replace(/[^a-zA-Z]/g, ""); */
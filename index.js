// DOM
let elemento_tablero= document.getElementById("tablero");
let boton_play= document.getElementById("play");
let boton_pause= document.getElementById("pause");
let boton_reset= document.getElementById("reset");

//Atributos cronometro
let activo= false;
let time={
    decimas: 0,
    segundos: 0,
    minutos: 0
}
 
//la tarea de la función formato es garantizar que siempre hayan 2 digitos
function formato(numeroX){
    if(numeroX<10){
        return "0"+numeroX;
    }else{
        return numeroX;
    }
}

// Minuto= 60 segundos / Segundos =10 decimas / decimas = 1/10 segundos
function actualizar(){
    time.decimas++;
    if(time.decimas==10){
        time.decimas=0;
        time.segundos++;
    }
    if(time.segundos==60){
        time.segundos=0;
        time.minutos++;
    }

    elemento_tablero.innerHTML= `${formato(time.minutos)}:${formato(time.segundos)}:${formato(time.decimas)}`

    if(activo== true){
        setTimeout(actualizar,100)
    }

}

//botones
function playCrono(){
    if(activo==false){
        activo= true;
        actualizar();
    }
}

function pauseCrono(){
    activo= false;
}

function resetCrono(){
    time.decimas= 0;
    time.segundos= 0;
    time.minutos = 0;
    elemento_tablero.innerHTML= `${formato(time.minutos)}:${formato(time.segundos)}:${formato(time.decimas)}`
}

//Eventos
boton_play.addEventListener('click',playCrono);
boton_pause.addEventListener('click',pauseCrono);
boton_reset.addEventListener('click',resetCrono);


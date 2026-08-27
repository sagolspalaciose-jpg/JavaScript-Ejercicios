function velocidadNormal (){
let distancia = Number (prompt("Ingresa el valor de la distancia"));
let tiempo = Number (prompt("Ingresa el valor del tiempo"));
    if (tiempo === 0){
        alert("El tiempo no puede ser 0");
    } else {
        let resultado = distancia/tiempo;
        alert(`Funcion Normal: El valor de la distancia <${distancia}> dividido entre el valor del tiempo <${tiempo}> nos da como resultado <${resultado}>`)
    }
}

const velocidadArrow = () => {
let distancia = Number (prompt("Ingresa el valor de la distancia"));
let tiempo = Number (prompt("Ingresa el valor del tiempo"));
    if (tiempo === 0){
        alert("El tiempo no puede ser 0");
    } else {
        let resultado = distancia/tiempo;
        alert(`Funcion Arrow: El valor de la distancia <${distancia}> dividido entre el valor del tiempo <${tiempo}> nos da como resultado <${resultado}>`)
    }  
}

function volumenEsferaNormal() {
    let radio = Number(prompt("Ingresa el valor del radio"));
    if (radio < 0) {
        alert("El radio no puede ser negativo");
    } else {
        let volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
        alert(`Función normal: el volumen de la esfera con radio <${radio}> es <${volumen}>`);
    }
}

const volumenEsferaArrow = () => {
    let radio = Number(prompt("Ingresa el valor del radio"));
    if (radio < 0) {
        alert("El radio no puede ser negativo");
    } else {
        let volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
        alert(`Arrow function: el volumen de la esfera con radio <${radio}> es <${volumen}>`);
    }
}

velocidadNormal();
velocidadArrow();
volumenEsferaNormal();
volumenEsferaArrow();

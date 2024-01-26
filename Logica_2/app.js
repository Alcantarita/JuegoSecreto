let numeroSecreto = 0;
let intentos = 1;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    //
    if (listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se asignaron todos los numeros posibles');
    } else {

    //si el numero generado esta incluido se realiza una condicion

    if (listaNumeroSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalos
    condicionesIniciales();
    //generar el numero aleatorio
    //inicializar el numero de intentos
    //Desabilitar el boton 
   document.querySelector('#reiniciar').setAttribute('disabled','true')
}

condicionesIniciales();
//variables
let numeroMaximoPosible = 100;
let numeroSecreto =Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 4;
console.log(numeroSecreto);
while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible}:`));

    console.log(typeof(numeroUsuario));
    /*
    Aqui realizamos la comparacion
    */
    if (numeroUsuario == numeroSecreto){
        alert(`Adivinaste, el numero: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else{
        if (numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        intentos ++;
        if(intentos > maximosIntentos){
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
        }
}
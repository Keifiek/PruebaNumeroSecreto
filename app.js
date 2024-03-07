let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log (intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        //El ususario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }
        else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecretos() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    if (listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se asignaro todos los numeros posibles');
    }
    else
    {
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecretos()
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
        
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
function condicionesIniciales (){
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}` ); 
    numeroSecreto = generarNumeroSecretos();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();






















/*Hola();
holaN('Cesar');
doble(20);
promedio(1,2,10);
mayor(12,9);
cuadrado(4);
function Hola()
{
    console.log('Hola mundo');
}
function holaN(nombre)
{
    console.log (`Hola ${nombre}`);
}
function doble(numero)
{
    console.log(parseInt(numero)*2);
}
function promedio(numero1,numero2,numero3)
{
    console.log (parseFloat((numero1+numero2+numero3)/3));
}
function mayor (numero1, numero2)
{
    if (numero1>numero2)
    {
        console.log (numero1);
    }
    else {
        console.log (numero2);
    }
}
function cuadrado(numero){
    console.log(numero*numero);
}*/
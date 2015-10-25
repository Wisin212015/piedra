//Genera un numero aleatorio en un rango de neteros
function aleatorio (minimo, maximo)
{
    var numero=Math.floor( Math.random()*(maximo - minimo + 1) + minimo);
    return numero;
}
var piedra=0;
var papel=1;
var tijera=2;
var opciones =[ "piedra", "papel", "tijera"];

// Definimos el resultado de cada combinación en el orden "piedra", "papel" y "tijera"
var opcionPiedra = ["Empate!","Perdiste!","Ganaste!"];
var opcionPapel = ["Ganaste!","Empate!","Perdiste!"];
var opcionTijera = ["Perdiste!","Ganaste!","Empate!"];


var opcionUsuario;
var opcionMaquina= aleatorio(0,2);

opcionUsuario= prompt( "¿ Que eliges? \n Piedra: 0 \n Papel:1 \n Tijeras :2 ",0)

// Limitante o condicion para que el juego funcione o advierte al usuario una opcion invalida antes  de comenzar el juego
if (opcionUsuario == 0 ||opcionUsuario == 1 || opcionUsuario == 2  ) 
{
   

   alert("Elegiste " + opciones[opcionUsuario]);


  alert("Javascript eligio " + opciones[opcionMaquina]);

 if(opcionUsuario == 0)
    {
        alert(opcionPiedra[opcionMaquina]);
    }
 else if(opcionUsuario == 1)
    {
        alert(opcionPapel[opcionMaquina]);
    }
 else if(opcionUsuario == 2)
    {
        alert(opcionTijera[opcionMaquina]);
    }
    
 }
else {
    alert("Opción no valida!");
}

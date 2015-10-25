// para hacer un numero aleatorio se debe crear una funcion
//Math es el paquete de matematicas de jascript
//math.floor redondear el numero decimal 
//math.random es una funcion que general numeros que van del 0 al 1 pero nunca 0 ni 1
//la funcion aleatorio genera un numero aleatorio entre un rango de enteros
function aleatorio(minimo, maximo)
{
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo)
	return	numero;
}
//alert("Funciona");
var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];
//alert(opciones[1]);//para verificar el array de funciones 

var opcionUsuario;
//var opcionMaquina = 1; se omite para correr la funcion
var opcionMaquina = aleatorio(0,2);

opcionUsuario = prompt("Que eliges?\nPiedra: 0\nPapel: 1\ntijera: 2", 0);

//para que funcione el alert con opciones se debe quitar los otros alert
alert("Elegiste " + opciones[opcionUsuario]);// esto es array
alert("Javascript eligió " + opciones[opcionMaquina]);

if(opcionUsuario == 0)
{
 	//alert("Elegiste Piedra!"); para que funcione alert con opciones
 	if(opcionMaquina==0)
 	{
 		alert("Empate!");
 	}
 	else if(opcionMaquina==1)
 	{
 		alert("Perdiste!");
 	}
 	if(opcionMaquina==2)
 	{
 		alert("Ganaste!");
 	}
}
else if(opcionUsuario == 1)
{
//	alert("Elegiste Papel!");
	if(opcionMaquina==0)
 	{
 		alert("Ganaste!");
 	}
 	else if(opcionMaquina==1)
 	{
 		alert("Empate");
 	}
 	if(opcionMaquina==2)
 	{
 		alert("Perdiste!");
 	}
}
else if(opcionUsuario == 2)
{
//	alert("Elegist Tijera!");
	if(opcionMaquina==0)
 	{
 		alert("Perdiste!");
 	}
 	else if(opcionMaquina==1)
 	{
 		alert("Ganaste!");
 	}
 	if(opcionMaquina==2)
 	{
 		alert("Empate!");
 	}
}
else
{
	alert("¿Pues que carajo!?");
}

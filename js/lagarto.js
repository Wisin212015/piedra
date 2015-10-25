//alert("funciona")
function aleatorio(minimo, maximo)
{
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo)
	return	numero;
}
var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,4);

opcionUsuario = prompt("Que eliges?\nPiedra: 0\nPapel: 1\ntijera: 2\nLagarto: 3\nSpock: 4", 0);

if (opcionUsuario < 4.1) 
{
alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligió " + opciones[opcionMaquina]);
}

	if(opcionUsuario == opcionMaquina)
	{
 	 		alert("Empate!");
	}
 	else if((opcionUsuario == 0 && opcionMaquina==1)||(opcionUsuario == 0 && opcionMaquina==4))
 	{
 			alert("Perdiste!");
 	}
 	else if((opcionUsuario == 0 && opcionMaquina==2)||(opcionUsuario == 0 && opcionMaquina==3))
 	{
 		alert("Ganaste!");
 	}
	else if((opcionUsuario == 1 && opcionMaquina==2)||(opcionUsuario == 1 && opcionMaquina==3))
	{
		alert("Perdiste!");
 	}
 	else if((opcionUsuario == 1 && opcionMaquina==0)||(opcionUsuario == 1 && opcionMaquina==4))
 	{
 		alert("Ganaste!");
 	}

	else if((opcionUsuario == 2 && opcionMaquina==0)||(opcionUsuario == 2 && opcionMaquina==4))
	{
		alert("Perdiste!");
 	}
 	else if((opcionUsuario == 2 && opcionMaquina==1)||(opcionUsuario == 2 && opcionMaquina==3))
 	{
 		alert("Ganaste!");
 	}

	else if((opcionUsuario == 3 && opcionMaquina==0)||(opcionUsuario == 3 && opcionMaquina==2))
	{
		alert("Perdiste!");
 	}
 	else if((opcionUsuario == 3 && opcionMaquina==1)||(opcionUsuario == 3 && opcionMaquina==4))
 	{
 		alert("Ganaste!");
 	}

	else if((opcionUsuario == 4 && opcionMaquina==1)||(opcionUsuario == 4 && opcionMaquina==3))
 	{
		alert("Perdiste!");
 	}
 	else if((opcionUsuario == 4 && opcionMaquina==0)||(opcionUsuario == 4 && opcionMaquina==2))
 	{
 		alert("Ganaste!");
 	}

else
{
	alert("Opción No Valida!\nGracias Por Participar!?");
}

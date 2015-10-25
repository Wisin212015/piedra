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

opcionUsuario = prompt("Que eliges?\nPiedra: 0\nPapel: 1\n
	tijera: 2\nLagarto: 3\nSpock: 4", 0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligió " + opciones[opcionMaquina]);

if(opcionUsuario == opcionMaquina)
{
 	 		alert("Empate!");
 
 	else if(opcionUsuario == 0)
 	{
 		if ((opcionMaquina==1)||(opcionMaquina==4))
 		{
 			alert("Perdiste!");
 		}
 		if((opcionMaquina==2)||(opcionMaquina==3))
 		{
 			alert("Ganaste!");
 		}
	}
}
else if(opcionUsuario == 1)
{
	if((opcionMaquina==2)||(opcionMaquina==3))
 	{
 		alert("Perdiste!");
 	}
 	if((opcionMaquina==0)||(opcionMaquina==4))
 	{
 		alert("Ganaste!");
 	}
}
else if(opcionUsuario == 2)
{
	if((opcionMaquina==0)||(opcionMaquina==4))
 	{
 		alert("Perdiste!");
 	}
 	if((opcionMaquina==1)||(opcionMaquina==3))
 	{
 		alert("Ganaste!");
 	}
}

else if(opcionUsuario == 3)
{
	if((opcionMaquina==0)||(opcionMaquina==2))
 	{
 		alert("Perdiste!");
 	}
 	if((opcionMaquina==1)||(opcionMaquina==4))
 	{
 		alert("Ganaste!");
 	}
}

else if(opcionUsuario == 4)
{
	if((opcionMaquina==1)||(opcionMaquina==3))
 	{
 		alert("Perdiste!");
 	}
 	if((opcionMaquina==0)||(opcionMaquina==2))
 	{
 		alert("Ganaste!");
 	}
}

else
{
	alert("¿Pues que carajo!?");
}

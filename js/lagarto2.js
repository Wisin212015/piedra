function aleatorio(minimo, maximo) {
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}
var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;
var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
var opcionUsuario;
var opcionMaquina = aleatorio(0,2);
opcionUsuario = prompt("Qué Eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4", 0);
alert("Elegiste: " + opciones[opcionUsuario]);
alert("Sheldon Eligió: " + opciones[opcionMaquina]);
if (opcionUsuario == piedra) {
    if (opcionMaquina == piedra) {
        alert("Empate!");
    }
    else if (opcionMaquina == papel) {
        alert("Perdiste!, Papel cubre la piedra");
    }
    else if (opcionMaquina == tijera) {
        alert("Ganaste!, Piedra destroza las tijeras");
    }
    else if (opcionMaquina == lagarto) {
        alert("Ganaste!, Piedra aplasta al lagardo");
    }
    else if (opcionMaquina == spock) {
        alert("Perdiste!, Spock vaporiza la piedra");
    }
}
else if (opcionUsuario == papel) {
    if (opcionMaquina == piedra) {
        alert("Ganaste!, Papel cubre la piedra");
    }
    else if (opcionMaquina == papel) {
        alert("Empate!");
    }
    else if (opcionMaquina == tijera) {
        alert("Perdiste!, Tijera corta al papel");
    }
    else if (opcionMaquina == lagarto) {
        alert("Perdiste!, Lagarto se come al papel");
    }
    else if (opcionMaquina == spock) {
        alert("Ganaste!, Papel refuta a spock");
    }
        
}
else if (opcionUsuario == tijera) {
    if (opcionMaquina == piedra) {
        alert("Perdiste!, Piedra destroza tijeras");
    }
    else if (opcionMaquina == papel) {
        alert("Ganaste!, Tijeras cortan al papel");
    }
    else if (opcionMaquina == tijera) {
        alert("Empate!");
    }
    else if (opcionMaquina == lagarto) {
        alert("Ganaste!, Tijeras decapitan al lagarto");
    }
    else if (opcionMaquina == spock) {
        alert("Perdiste!, Spock destroza tijeras");
    }
}
else if (opcionUsuario == lagarto) {
    if (opcionMaquina == piedra) {
        alert("Perdiste!, Piedra aplasta a lagarto");
    }
    else if (opcionMaquina == papel) {
        alert("Ganaste!, Lagarto se come el papel");
    }
    else if (opcionMaquina == tijera) {
        alert("Perdiste!, Tijeras decapitan al lagarto");
    }
    else if (opcionMaquina == lagarto) {
        alert("Empate!");
    }
    else if (opcionMaquina == spock) {
        alert("Perdiste!, Lagarto envenena a Spock");
    }
}
else if (opcionUsuario == spock) {
    if (opcionMaquina == piedra) {
        alert("Ganaste!, Spock pulveriza la piedra");
    }
    else if (opcionMaquina == papel) {
        alert("Perdiste!, El papel refuta a Spock");
    }
    else if (opcionMaquina == tijera) {
        alert("Ganaste!, Spock destroza las tijeras");
    }
    else if (opcionMaquina == lagarto) {
        alert("Perdiste, Lagarto envenena a spock!");
    }
    else if (opcionMaquina == spock) {
        alert("Empate");
    }
}
else {
    alert("Cagaste el juego IDIOTA!");
}


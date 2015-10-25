//Genera un número aleatorio entre un rango de enteros
function aleatorio(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}
function comparacion()
{
    if (opciones[opcionUsuario] == opciones[opcionMaquina])
    {
        alert("¡Huvo un empate!");
    }
    else
    {
        if (opciones[opcionMaquina] == "Piedra" && opciones[opcionUsuario] == "Papel")
        {
            alert("¡Ganaste!");
        }
        else if (opciones[opcionMaquina] == "Piedra" && opciones[opcionUsuario] == "Tijera")
        {
            alert("¡Perdistes :(!");
        }
        else if (opciones[opcionMaquina] == "Papel" && opciones[opcionUsuario] == "Piedra")
        {
            alert("¡Perdistes :(!");
        }
        else if (opciones[opcionMaquina] == "Papel" && opciones[opcionUsuario] == "Tijera")
        {
            alert("¡Ganaste!");
        }
        else if (opciones[opcionMaquina] == "Tijera" && opciones[opcionUsuario] == "Papel")
        {
            alert("¡Perdistes :(!");
        }
        else if (opciones[opcionMaquina] == "Tijera" && opciones[opcionUsuario] == "Piedra")
        {
            alert("¡Ganaste!");
        }
    }
}
var piedra = 0;
var papel = 1;
var tijera = 2;
var opciones = ["Piedra", "Papel", "Tijera"];
var opcionUsuario;
var opcionMaquina = aleatorio(0,2);
opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);
if (opciones[opcionUsuario] == undefined)
{
    alert("Cometiste un error, debes escoger una opción para poder jugar con el código.");
}
else
{
    alert("Elegiste " + opciones[opcionUsuario]);
    alert("Javascript eligió " + opciones[opcionMaquina]);
    comparacion();
}

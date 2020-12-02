var images;
var numbers;
var images = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
var activa = document;
var activas = 0;
var able = 0;
var inicio = 0;
var tiempo = document.getElementById("tiempo");
var time;
var puntuacion = document.getElementById("puntos");
var puntos = 0;

function shuffle() {
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    numbers = numbers.sort(function(){return Math.random() - 0.5})
    for (let index = 0; index < numbers.length; index++) {
        images[index] = "url('img/img" + numbers[index] + ".png')";
    }
}

function temporizador() {
    tiempo.innerHTML = parseInt(tiempo.innerHTML) - 1;
    if (parseInt(tiempo.innerHTML) == 0) {
        alert("Perdiste!");
        iniciar();
    }
}

function iniciar() {
    if (inicio == 0) {
        shuffle();
        ocultarT();
        document.getElementById("boton").innerHTML = "Reiniciar";
        time = window.setInterval(temporizador, 1000);
        inicio = 1;
        able = 1;
    } else {
        document.getElementById("boton").innerHTML = "Iniciar";
        window.clearInterval(time);
        ocultarT();
        tiempo.innerHTML = "60";
        puntuacion.innerHTML = "";
        inicio = 0;
        activas = 0;
        able = 0;
    }
}

function ocultarT() {
    for (let i = 1; i <= 16; i++) {
        document.getElementById("c" + i).style.backgroundImage = "";
    }
}

function ocultar(num, activa) {
    activa.style.backgroundImage = "";
    document.getElementById("c" + num).style.backgroundImage = "";
}

function clickCard(num) {
    if (able == 1) {
        if (activas == 0) {
            document.getElementById("c" + num).style.backgroundImage = images[num - 1];
            activa = document.getElementById("c" + num);
            activas++;
        } else if (activas == 1) {
            document.getElementById("c" + num).style.backgroundImage = images[num - 1];
            if (activa.style.backgroundImage == document.getElementById("c" + num).style.backgroundImage) {
                activa = document;
                puntos++;
                puntuacion.innerHTML = puntos;
                activas = 0;
                if (puntos == 8) {
                    alert("Ganaste!");
                    iniciar();
                }
            } else {
                window.setTimeout(ocultar, 500, num, activa);
                activas = 0;
                activa = document;
            }
        }
        

        
    }
}
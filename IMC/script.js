function calcular() {
    peso = document.getElementById("peso");
    altura = document.getElementById("altura");
    res = document.getElementById("res");
    res2 = document.getElementById("res2");
    
    if (peso.value != "" && altura.value != "") {
        resultado = (peso.value / (altura.value * altura.value));
        resultado = Math.round(resultado * 100) / 100;
        res.innerHTML = resultado
        console.log(resultado);

        if (resultado < 18.5) {
            res2.innerHTML = "Inferior";
            document.getElementById("lado").style.backgroundImage = "url('img/thin.png')";
        } else if (resultado >= 18.5 && resultado < 25) {
            res2.innerHTML = "Normal";
            document.getElementById("lado").style.backgroundImage = "url('img/normal.png')";
        } if (resultado >= 25 && resultado < 30) {
            res2.innerHTML = "Sobrepeso";
            document.getElementById("lado").style.backgroundImage = "url('img/thick.png')";
        } if (resultado >= 30) {
            res2.innerHTML = "Obesidad";
            document.getElementById("lado").style.backgroundImage = "url('img/thiccc.png')";
        }
    } else {
        res2.innerHTML = "Datos Erroneos";
    }
}
function opcion() {
    nav = document.getElementById("nav");
    valor = document.getElementById("seleccion").value;
    nav.innerText = "";
    if (valor == "factorial") {
        label = document.createElement("label");
        label.innerText = "Numero";
        input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("name", "numero");
        input.setAttribute("id", "numero");
        boton = document.createElement("button");
        boton.setAttribute("onclick", "factorial();");
        boton.innerText = "Calcular";
        nav.appendChild(label);
        nav.appendChild(input);
        nav.appendChild(boton);
    } else {
        label = document.createElement("label");
        label.innerText = "Numero";
        input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("name", "numero");
        input.setAttribute("id", "numero");
        label2 = document.createElement("label");
        label2.innerText = "Potencia";
        input2 = document.createElement("input");
        input2.setAttribute("type", "text");
        input2.setAttribute("name", "potencia");
        input2.setAttribute("id", "potencia");
        boton = document.createElement("button");
        boton.setAttribute("onclick", "potencia();");
        boton.innerText = "Calcular";
        nav.appendChild(label);
        nav.appendChild(input);
        nav.appendChild(label2);
        nav.appendChild(input2);
        nav.appendChild(boton);
    }
    resultados = document.createElement("div");
    resultados.setAttribute("id", "resultados");
    nav.appendChild(resultados);
}

function factorial() {
    nav = document.getElementById("nav");
    resultados = document.getElementById("resultados");
    resultados.innerText = "";
    input = parseInt(document.getElementById("numero").value);
    fact = 1;
    for (let i = 1; i <= input; i++) {
        fact *= i;
    }
    res = document.createElement("h2");
    res.innerText = fact;
    resultados.appendChild(res);
}

function potencia() {
    nav = document.getElementById("nav");
    resultados = document.getElementById("resultados");
    resultados.innerText = "";
    input = parseInt(document.getElementById("numero").value);
    input2 = parseInt(document.getElementById("potencia").value);
    potenciado = Math.pow(input, input2);
    res = document.createElement("h2");
    res.innerText = potenciado;
    resultados.appendChild(res);
}
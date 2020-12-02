var valor1 = 0;
var valor2 = 0;
var valor3 = 0;
var oper = '';

function boton(valor) {
    calcular = document.getElementById("calcular");
    if (calcular == null) {
        calcular.innerText = valor 
    } else {
        switch (valor) {
            case '+':
                console.log(calcular);
                valor1 = parseInt(calcular.innerText);
                oper = '+';
                calcular.innerText = "";
                console.log(valor1);
                break;
            case '-':
                console.log(calcular);
                valor1 = parseInt(calcular.innerText);
                oper = '-';
                calcular.innerText = "";
                console.log(valor1);
                break;
            case '*':
                console.log(calcular);
                valor1 = parseInt(calcular.innerText);
                oper = '*';
                calcular.innerText = "";
                console.log(valor1);
                break;
            case '/':
                console.log(calcular);
                valor1 = parseInt(calcular.innerText);
                oper = '/';
                calcular.innerText = "";
                console.log(valor1);
                break;
            case '=':
                console.log(oper);
                valor2 = parseInt(calcular.innerText);
                switch (oper) {
                    case '+':
                        valor3 = (valor1 + valor2);
                        calcular.innerText = valor3;
                        valor1 = 0;
                        valor2 = 0;
                        break;
                    case '-':
                        valor3 = (valor1 - valor2);
                        calcular.innerText = valor3;
                        valor1 = 0;
                        valor2 = 0;
                        break;
                    case '*':
                        valor3 = (valor1 * valor2);
                        calcular.innerText = valor3;
                        valor1 = 0;
                        valor2 = 0;
                        break;
                    case '/':
                        valor3 = (valor1 / valor2);
                        calcular.innerText = valor3;
                        valor1 = 0;
                        valor2 = 0;
                    default:
                        break;
                }
                break;
            case 'c':
                oper = "";
                valor1 = 0;
                valor2 = 0;
                calcular.innerText = "";
                break;
            default:
                calcular.innerText += valor;
                break;
        }
    }
    
}
let titulo = "Calculadora let" // escopo global
//var titulo = "Calculadora var" // escopo window
//NaN -> Not a Number
//"Olá" + 3 = NaN
//undefined + 1 = NaN
// null + = NaN 
let numero1 = 0;
let numero2 = 0;
let resultado = 0;

function calcular(operador){
    numero1 = parseFloat(document.getElementById("num1").value)
    numero2 = parseFloat(document.getElementById("num2").value)
    resultado = numero1 + operador + numero2
    alert(eval(resultado))
}
//eval => recebe o texto como parâmetro e o executa como Javascript
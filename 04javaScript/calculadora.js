document.getElementById("somar").addEventListener('click', somar)
document.getElementById("subtrair").addEventListener('click', subtrair)
document.getElementById("multiplicar").addEventListener('click', multiplicar)
document.getElementById("dividir").addEventListener('click', dividir)
document.getElementById("limpar").addEventListener('click', limpar)
function somar() {
    let valor1 = Number(numero1.value);
    let valor2 = Number(numero2.value);
    let resultado = valor1 + valor2;
    alert(resultado);
}

function subtrair() {
    let valor1 = Number(numero1.value);
    let valor2 = Number(numero2.value);
    let resultado = valor1 - valor2;
    alert(resultado);
}

function multiplicar() {
    let valor1 = Number(numero1.value);
    let valor2 = Number(numero2.value);
    let resultado = valor1 * valor2;
    alert(resultado);
}

function dividir() {
    let valor1 = Number(numero1.value);
    let valor2 = Number(numero2.value);
    let resultado = valor1 / valor2;
    alert(resultado);
}

function limpar() {
    numero1.value = "";
    numero2.value = "";
}
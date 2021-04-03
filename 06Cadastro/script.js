function abrir() {
    document.querySelector(".menu").classList.add("menu-aberto");
}
function fechar() {
    document.querySelector(".menu").classList.remove("menu-aberto");
}
function salvar() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value

    if (name == "") {
        alert("O nome é obrigatório")
    }

    if (email == "") {
        alert("O E-mail é obrigatório")
    }
}
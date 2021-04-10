let docZero = document.getElementById("chatAction").innerHTML

function activeButton(number) {
    clean()
    switch (number) {
        case 0: {
            let a = document.getElementById("emoticon").src = "icon/rosto-feliz.svg"
            document.getElementById("chatAction").innerHTML += `
        <span class="msgResposta" id="actionButton">Olá!</span>
        <span class="msgCara" id="responseButton">E aí!</span>`
        }
        break;
        case 1: {
            let a = document.getElementById("emoticon").src = "icon/rosto-triste.svg"
            document.getElementById("chatAction").innerHTML += `
        <span class="msgResposta" id="actionButton">Não te gosto!</span>
        <span class="msgCara" id="responseButton">:'(</span>`
        }
        break;
        case 2: {
            let a = document.getElementById("emoticon").src = "icon/rosto-alegre.svg"
            document.getElementById("chatAction").innerHTML += `
        <span class="msgResposta" id="actionButton">Está elegante hoje!</span>
        <span class="msgCara" id="responseButton">Você também ein!</span>`
        }
        break;
    }
}

function clean() {
    let a = document.getElementById("emoticon").src = "icon/rosto-normal.svg"
    if (document.getElementById("actionButton") != null) {
        var no = document.getElementById("actionButton");
        if (no.parentNode) {
            no.parentNode.removeChild(no);
        }
        var no = document.getElementById("responseButton");
        if (no.parentNode) {
            no.parentNode.removeChild(no);
        }
    }
}
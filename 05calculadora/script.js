let viewer = document.getElementById("calcViewer");

function insertText(param){
    viewer.value += param
}

function cleanText(){
    window.confirm("Deseja limpar o campo?")
    viewer.value = ""
}
function runEval(){
/*     window.alert(viewer.value); */
    viewer.value=eval(viewer.value);

}
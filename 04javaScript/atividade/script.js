export  var arr = ['Olá! :D', 'Sério', 'Tudo!', 'Sei não em', 'Peixe'];
export function alertBox(ele) {
    window.alert(ele)
};

export function setup(){
    document.querySelectorAll("button").forEach((button,i) => {
        button.addEventListener("click", function(){
            alertBox(arr[i]);
        });
    });
}
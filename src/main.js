//Adicionando botão ao menu
addButton();
function addButton(){
    setTimeout(() => {
        var menu = document.getElementsByTagName('p')[0];
        url = window.location.href;
        if(menu != undefined){
            menu.appendChild(buttonNoticia);
        }else{
            addButton();
        }
    }, 2000);
}


//download da imagem
buttonNoticia.addEventListener('click', () => {
    analisaNoticia(url);
});
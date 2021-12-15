//Adicionando botão ao menu
/*addButton();
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
*/


//download da imagem
var botaoEx = document.getElementById('btnExtensao');
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    url = tabs[0].url;
    console.log(url);
    botaoEx.addEventListener('click', () => {
        analisaNoticia(url);
    });
});



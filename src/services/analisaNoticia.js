'use strict'
async function analisaNoticia(url){
        const flaskUrl = `https://28eb-34-71-210-236.ngrok.io/${url}`
        const dados = await fetch(flaskUrl);
        const json = await dados.json();
        var labelNoticia = document.createElement('h1');
        labelNoticia.innerHTML = json;
        var menu = document.getElementsByTagName('p')[0];
        menu.appendChild(labelNoticia);     
        
        
}
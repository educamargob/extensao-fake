'use strict'
async function analisaNoticia(url){
        const flaskUrl = `http://f22a-35-238-121-243.ngrok.io/${url}`
        const dados = await fetch(flaskUrl);
        const json = await dados.json();
        var labelNoticia = document.createElement('h1');
        labelNoticia.innerHTML = json;
        var menu = document.getElementsByTagName('p')[0];
        menu.appendChild(labelNoticia);     
        
        
}
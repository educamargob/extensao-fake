'use strict'

async function analisaNoticia(url){
        console.log("analisando");
        const flaskUrl = `http://473d-34-71-73-94.ngrok.io/${url}`
        const dados = await fetch(flaskUrl);
        const json = await dados.json();
        var labelNoticia = document.createElement('h1');
        labelNoticia.innerHTML = json;
        var menu = document.getElementsByTagName('p')[0];
        menu.appendChild(labelNoticia);     
        
        
}
'use strict'

async function analisaNoticia(url){
        console.log("analisando");
        const flaskUrl = `http://e1a5-34-123-232-17.ngrok.io/${url}`
        const dados = await fetch(flaskUrl);
        const json = await dados.json();
        var labelNoticia = document.createElement('h1');
        labelNoticia.innerHTML = json;
        var menu = document.getElementsByTagName('p')[0];
        console.log(json);
        if(json == "[1.]"){
                labelNoticia.innerHTML = 'Notícia Verdadeira';
        }else{
                labelNoticia.innerHTML = 'Notícia Falsa'; 
        }
        var menu = document.getElementsByTagName('p')[0];
        menu.appendChild(labelNoticia);
        
          
        
        
}
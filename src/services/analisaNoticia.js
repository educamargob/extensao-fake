'use strict'

async function analisaNoticia(url){
        console.log("analisando");
        const flaskUrl = `http://9c06-34-132-53-211.ngrok.io/${url}`
        const dados = await fetch(flaskUrl);
        const json = await dados.json();
        var labelNoticia = document.createElement('img');
        //labelNoticia.innerHTML = json;
        var menu = document.getElementsByTagName('p')[0];
        labelNoticia.style = 'display: inline-block; margin-left: 5px;'
        console.log(json);
        if(json == "[1.]"){
                labelNoticia.src="../../true.png";
        }else{
                labelNoticia.src="../../false.png";
        }
        var menu = document.getElementsByTagName('p')[0];
        menu.appendChild(labelNoticia);
        
          
        
        
}
'use strict'

async function analisaNoticia(url){
        console.log("analisando");
        const flaskUrl = `http://7aa7-104-198-155-94.ngrok.io/${url}`
        const dados = await fetch(flaskUrl);
        const json = await dados.json();
        var labelNoticia = document.createElement('img');
        var probNoticia = document.createElement('p')
        probNoticia.innerHTML = json[1];
        probNoticia
        //labelNoticia.innerHTML = json;
        labelNoticia.style = 'display: inline-block; margin-left: 16%;'
        probNoticia.style = 'display: inline-block; margin-left: 5px;'
        var menu = document.getElementsByTagName('p')[0];
        console.log(json);
        if(json[2] == "[1.]"){
                labelNoticia.src="../../true.png";
        }else{
                labelNoticia.src="../../false.png";
        }
        var menu = document.getElementsByTagName('p')[0];
        
        if(document.getElementsByTagName('p')[1] == undefined){
                menu.appendChild(labelNoticia);
                menu.appendChild(probNoticia);
        }
        
        
          
        
        
}
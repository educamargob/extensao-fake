'use strict'

async function analisaNoticia(url){
        console.log("analisando");
        const flaskUrl = `http://822b-35-184-225-226.ngrok.io/${url}`
        const dados = await fetch(flaskUrl);
        const json = await dados.json();
        var labelNoticia = document.createElement('img');
        var probNoticia = document.createElement('p');
        //Função para separar o json da acuracia
        function separajson(json){
                json = json.replaceAll("[", "");
                json = json.replaceAll("]", "");
                json = json.replaceAll("\"", "");
                json = json.split(",")
                return json;
        }
        const jsonString = JSON.stringify(json[1]);
        const jsonSeparado = separajson(jsonString)
        
        //Porcentagem de acuracia falso
        var pfake = jsonSeparado[0];
        pfake = parseFloat(pfake);
        pfake = pfake * 100;
        pfake = pfake.toFixed(1);

        //Porcentagem de acuracia verdadeiro
        var ptrue = jsonSeparado[1];
        ptrue= parseFloat(ptrue);
        ptrue = ptrue* 100;
        ptrue = ptrue.toFixed(1);

        //Só retorna a porcentagem de acuracia do maior elemento
        if(ptrue > pfake){
                probNoticia.innerHTML = ptrue+"%";
        }else{
                probNoticia.innerHTML = pfake+"%";
        }

        //labelNoticia.innerHTML = json;
        //Define estilo
        labelNoticia.style = 'display: inline-block; margin: 5px 0px 0px 16%;'
        probNoticia.style = 'display: inline-block; margin-left: 5px;'

        var menu = document.getElementById('label');
        
        //Define a imagem de verdadeiro ou falso
        if(json[2] == "[1.]"){
                labelNoticia.src="../../true.png";
        }else{
                labelNoticia.src="../../false.png";
        }
       
        
        if(document.getElementsByTagName('p')[1] == undefined){
                menu.appendChild(labelNoticia);
                menu.appendChild(probNoticia);
        }
        
        
          
        
        
}
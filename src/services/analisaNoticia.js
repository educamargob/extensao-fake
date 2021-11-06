'use strict'
function analisaNoticia(url){
        const flaskUrl = `https://9749-34-70-121-154.ngrok.io//${url}`
        fetch(flaskUrl).then(responde => console.log(responde.json()));
}
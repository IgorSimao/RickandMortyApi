import * as webservice from './webservice.js'
window.addEventListener("load", init)

let btnNextPage = document.querySelector(".nextPage")
btnNextPage.addEventListener('click', nextPage);

var page = 1;

function init () {
    webservice.pegaPersonagens(page);
}

export function exibePersonagens(data) {
    for (let i=0; i < data.length; i++){
        let personagem = data[i]

        let url = personagem.image

        let container  = document.querySelector(".container")
        let article = document.createElement("article")
        article.className = "article"

        let div = document.createElement("div")
        div.className = 'personagem'

        let titulo = document.createElement("h2")
        titulo.className = "titulo"

        let divImage = document.createElement("div")
        let image = document.createElement("img")

        let status = document.createElement("span")
        let statusIcon = document.createElement("span")
        status.className = 'status'
        
        let textoCinza = document.createElement("span")
        textoCinza.className = "textoCinza"
        let origen = document.createElement("span")

        image.className = 'image'
        image.src = url
        
        
        titulo.innerHTML  = `
        ${personagem.name}`

        status.innerHTML = `
            ${personagem.status}
            - 
            ${personagem.species}
        `
        textoCinza.innerHTML = `
        Origem:
        `

        origen.innerHTML = `
            ${personagem.origin.name}
        `

        container.appendChild(article)
        divImage.appendChild(image)
        article.appendChild(divImage)
        
        div.appendChild(titulo)
        if(personagem.status == "Alive"){
            statusIcon.className = 'statusAlive'
        }else{
            statusIcon.className = 'statusOther'
        }
        div.append(statusIcon)
        div.appendChild(status)
        div.appendChild(textoCinza)
        div.appendChild(origen)
        article.appendChild(div)
        
        
        
    }
}

function nextPage() {
    if(page <= 5){
        page += 1
        webservice.pegaPersonagens(page);
    }else{
        alert("Você carregou todos os personagens!")
    }
    
    

}
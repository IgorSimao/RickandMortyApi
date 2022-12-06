// let btnEnviar = document.querySelector("#enviar");
// btnEnviar.addEventListener('click', pegaPersonagens)
import * as index from './index.js'

export async function pegaPersonagens(page) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json;charset=utf-8");

//     var raw = JSON.stringify({
        
// });

    var request = {
        method: "GET",
        headers: myHeaders,
        // body: raw
        
    };
    console.log(request)

    fetch("https://rickandmortyapi.com/api/character/?page="+ page, request)
    .then(response =>{
        if(response.status != 200){
            alert("Erro ao carregar os personagens!")
        }
        console.log(response)
        return response.json();

    })
    .then(data => {
        // anuncios.mostraAnuncios(data)
        // console.log(data.results)
        index.exibePersonagens(data.results)
   
        })
    .catch(error => console.log('error', error));
}
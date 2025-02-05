let listaDeAmigos = []; //cria a lista onde o nome dos amigos serao adicionados

//funcao para adicionar os nomes a lista
function adicionarAmigo(){

    let amigo = document.querySelector('input').value; //pega os nomes digitados na pagina

    let listaHTML = document.getElementById("listaAmigos");
    let novoElemento = document.createElement("li");


    listaDeAmigos.push(amigo); //adiciona os nomes a lista

    novoElemento.textContent = amigo;
    listaHTML.appendChild(novoElemento); //exibe a lista de nomes na pagina

    amigo.value = ""; //limpa o campo
    
}

//funcao para sortear o amigo
function sortearAmigo(){

    let tamanhoLista = listaDeAmigos.length;
    let resultado = document.getElementById("resultado");
    let numeroSorteado = parseInt(Math.random() * tamanhoLista); //sorteia um elemento da lista pelo seu indice
    let amigoSorteado = listaDeAmigos[numeroSorteado]

    resultado.textContent ="Amigo sorteado foi: " + amigoSorteado; //exibe na tela o nome sorteado

    listaDeAmigos = []; // limpa a lista
    document.getElementById("listaAmigos").innerHTML = ""; // limpa a exibição da pagina
}

let listaAmigos = [];

function adicionarAmigo() {
    let input = document.querySelector('input');
    let nomeAmigo = input.value.trim(); // Remove espaços extras

    if (nomeAmigo === '') {
        alert("Por favor, insira um nome.");
        return;
    }

    if (listaAmigos.includes(nomeAmigo)) {
        escreverTexto('h2', 'Esse amigo já está incluso, digite outro nome!');
    } else {
        listaAmigos.push(nomeAmigo);
        escreverTexto('h2', 'Digite o nome dos seus amigos');
        exibirAmigos();
    }

    limparCampo();
}

function limparCampo() {
    document.querySelector('input').value = ''; 
}

function escreverTexto(tag, texto) {
    document.querySelector(tag).innerHTML = texto;
}

function exibirAmigos() {
    let listaHTML = document.querySelector('#listaAmigos'); 
    listaHTML.innerHTML = ''; // Limpa a lista antes de adicionar os novos elementos

    listaAmigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        document.getElementById('resultado').innerHTML = "Nenhum amigo na lista para sortear!";
        return;
    }

    let numEscolhido = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[numEscolhido];

    document.getElementById('listaAmigos').innerHTML = '';

    // Exibe o amigo sorteado
    document.getElementById('resultado').innerHTML = `O amigo sorteado foi: <strong>${amigoSorteado}</strong>`;
}

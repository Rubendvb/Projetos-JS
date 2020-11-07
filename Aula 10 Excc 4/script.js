let registros = []

function registrar() {
    let nome = document.querySelector('#nome'.toLowerCase());
    let idade = document.querySelector('#idade');
    let cor = document.querySelector('#cor'.toLowerCase());

    let registro = document.querySelector('#registro');
    
    let nomePessoa = nome.value
    let idadePessoa = idade.value
    let corPessoa = cor.value

    let pessoa = {
        nome: nomePessoa,
        idade: idadePessoa,
        cor: corPessoa
    }
    nome.value = '';
    idade.value = '';
    cor.value = '';
    
    registros.push(pessoa)

    let itemLista = document.createElement('li');
    itemLista.textContent = `${pessoa.nome} tem `+ `${pessoa.idade} anos e gosta da cor ` + `${pessoa.cor}` 

    
    registro.appendChild(itemLista);

    
    
    
}


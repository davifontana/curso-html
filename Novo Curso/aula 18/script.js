//const array = [1, 2, 3]
//array.push(4)
//array[0] = 'Luiz'
//array = 'Outra'
//console.log(array)

/*const pessoal = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
}

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 55
}

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome); */

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25)